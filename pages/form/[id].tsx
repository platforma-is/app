import React from "react";
import { GetServerSideProps } from "next";
import Router from "next/router";
import Link from "next/link";
import dayjs from "dayjs";
import prisma from "@/lib/prisma";
import Layout from "@/components/Layout";
import {
  Card,
  Text,
  Table,
  TextInput,
  Stack,
  Button,
  List,
  ListItem,
  CopyButton,
  Group,
  ActionIcon,
  Menu,
  rem,
  Code,
} from "@mantine/core";
import { IForm, IResponse } from "types";
import { IconDots, IconTrash } from "@tabler/icons-react";
import { deleteFormApi } from "@/data/form";
import { deleteResponseApi } from "@/data/response";
import { ActiveToggleForm } from "features/Forms/ActiveToggleForm";

async function deleteForm(id: string): Promise<void> {
  await deleteFormApi(id);
  await Router.push("/");
}

async function deleteResponse(id: string): Promise<void> {
  await deleteResponseApi(id);
  await Router.reload();
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const form = await prisma.form.findUnique({
    where: {
      id: params?.id as string,
    },
  });

  const responses = await prisma.response.findMany({
    where: {
      formId: params?.id as string,
    },
  });

  return {
    props: { form, responses },
  };
};

const Post: React.FC<{
  responses: IResponse[];
  form: IForm;
}> = ({ responses, form }) => {
  if (!form) return null;

  const publicLink = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/api/form/${form.id}`;
  const htmlFormCode = `<form method="POST" action="${publicLink}">
  <input type="text" name="name" placeholder="Name" />
  <input type="text" name="text" placeholder="Text" />
  <button type="submit">Submit</button>
</form>`;

  const copyFormLink = (
    <CopyButton value={publicLink}>
      {({ copied, copy }) => (
        <Button size="xs" variant={copied ? "light" : "default"} onClick={copy}>
          {copied ? "Copied" : "Copy form url"}
        </Button>
      )}
    </CopyButton>
  );

  const rows = responses.map((response) => {
    const createdAt = dayjs(response.createdAt).format("DD.MM.YYYY HH:mm:ss");
    return (
      <Table.Tr key={response.id}>
        <Table.Td style={{ verticalAlign: "baseline", width: "200px" }}>
          {createdAt}
        </Table.Td>
        <Table.Td>
          <List size="xs">
            {response?.data &&
              Object.keys(response?.data).map((key) => (
                <ListItem key={key}>
                  <Text>
                    {key}: {String(response?.data[key])}
                  </Text>
                </ListItem>
              ))}
          </List>
        </Table.Td>
        <Table.Td align="right" style={{ verticalAlign: "baseline" }}>
          <Menu
            transitionProps={{ transition: "pop" }}
            withArrow
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                onClick={() => deleteResponse(response.id)}
                leftSection={
                  <IconTrash
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
                color="red"
              >
                Delete response
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Layout>
      <Card radius="md" p="xl" mb="md">
        <Group justify="space-between" align="flex-start">
          <Text fz="lg" fw={900} mb="xl">
            <Link href="/" legacyBehavior>
              Forms
            </Link>{" "}
            / {form.title}
          </Text>

          <Group>
            {copyFormLink}
            <ActiveToggleForm formId={form.id} active={form.active} />

            <Menu
              transitionProps={{ transition: "pop" }}
              withArrow
              position="bottom-end"
              withinPortal
            >
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                  <IconDots
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  onClick={() => deleteForm(form.id)}
                  leftSection={
                    <IconTrash
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  }
                  color="red"
                >
                  Delete form
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>

        <Text fz="md" fw={500} mb="sm">
          Ответы
        </Text>

        <Table horizontalSpacing={0}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Когда</Table.Th>
              <Table.Th>Что</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Card>

      <Card radius="md" p="xl">
        <Text fz="lg" fw={500} mb="sm">
          Api test
        </Text>

        <Code mb="xl" block>
          {htmlFormCode}
        </Code>

        <form
          method="POST"
          action={publicLink}
          // encType="multipart/form-data"
        >
          <Stack gap="xl">
            <Stack>
              <TextInput name="name" label="Name" placeholder="Name" required />
              <TextInput name="text" label="Text" placeholder="Text" required />
            </Stack>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Card>
    </Layout>
  );
};

export default Post;
