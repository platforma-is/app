import React, { FC } from "react";
import { Card, Code, Text, rem, Container } from "@mantine/core";
import { StageBlock } from "@/components/form/StageBlock";

type IntegrationLayoutProps = {
  publicLink: string;
};

type TextBlockProps = {
  header: string;
  description?: string;
};

export const TextBlock: FC<TextBlockProps> = ({ header, description }) => (
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
      <StageBlock
        stage={1}
        title="Создайте на сайте форму"
        description="В атрибуте action укажите специальную ссылку-токен:"
        content={
          <Code mb="xl" block fz={18}>
            {htmlFormCode}
          </Code>
        }
      />
      <StageBlock
        stage={2}
        title="Добавьте в форму нужные поля"
        description="Например"
        content={
          <Code mb="xl" block fz={18}>
            {htmlFormCode}
          </Code>
        }
      />
      <StageBlock
        stage={3}
        title="Форма готова!"
        description="Как только кто-то заполнит форму на сайте, ответы сразу появятся в общей таблице"
      />
    </Card>
  );
};
