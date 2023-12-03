import React, { FC } from "react";
import {
  Button,
  Card,
  Code,
  Stack,
  Text,
  TextInput,
  rem,
  Container,
} from "@mantine/core";
import StageBlock from "../Menu/StageBlock";
import { IconStar, IconStarHalfFilled } from "@tabler/icons-react";

type IntegrationLayoutProps = {
  publicLink: string;
};

type TextBlockProps = {
  header: string;
  description?: string;
};

const TextBlock: FC<TextBlockProps> = ({ header, description }) => (
  <Container w="100%" px="0" mb="xs">
    <Text fw={600} lh={rem(20)} size="md">
      {header}
    </Text>
    {description ? (
      <Text
        fw={400}
        lh={rem(14)}
        size="sm"
        style={{ color: "var(--color-dark-2)" }}
      >
        {description}
      </Text>
    ) : null}
  </Container>
);

export const IntegrationLayout: FC<IntegrationLayoutProps> = (props) => {
  const { publicLink } = props;

  const htmlFormCode = `<form method="POST" action="${publicLink}">
  <input type="text" name="name" placeholder="Name" />
  <input type="text" name="text" placeholder="Text" />
  <button type="submit">Submit</button>
</form>`;

  return (
    <Card radius="md" px="0" py="lg">
      <TextBlock
        header="Ссылка на форму"
        description="Она понадобится для настройки"
      />
      <TextBlock header="Как настроить форму" />

      <StageBlock
        stage={1}
        title="Создайте форму в коде"
        description="У формы должен быть атрибут action со специальной ссылкой"
        content={
          <Code mb="xl" block>
            {htmlFormCode}
          </Code>
        }
      />
      <StageBlock
        stage={2}
        title="Добавьте поля с атрибутами"
        description="У всех полей должны быть атрибуты type и name, чтобы Платформа их распознала"
        content={
          <Code mb="xl" block>
            {htmlFormCode}
          </Code>
        }
      />
      <StageBlock
        stage={3}
        title="Форма готова!"
        description="Как только кто-то заполнит форму на сайте, ответы сразу появятся в общей таблице"
        content={<Button type="button" leftSection={<IconStar size={16} />}>Посмотреть ответы</Button>}
      />

    {/* //   <form
    //     method="POST"
    //     action={publicLink}
    //     // encType="multipart/form-data"
    //   >
    //     <Stack gap="xl">
    //       <Stack>
    //         <TextInput name="name" label="Name" placeholder="Name" required />
    //         <TextInput name="text" label="Text" placeholder="Text" required />
    //       </Stack>
    //       <Button type="submit">Submit</Button>
    //     </Stack>
    //   </form> */}
    </Card>
  );
};
