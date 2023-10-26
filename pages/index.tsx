import React from "react";
import type { GetServerSideProps } from "next";
import dayjs from "dayjs";
import { ActionIcon, Button, CopyButton, Menu, rem } from "@mantine/core";
import Layout from "@/components/Layout";
import Router from "next/router";
import prisma from "@/lib/prisma";
import { Card, Group, Text } from "@mantine/core";
import classes from "@/components/Forms.module.css";
import { IForm } from "@/utils/types";
import { deleteFormApi } from "@/data/form";
import { IconDots, IconTrash } from "@tabler/icons-react";

async function deleteForm(id: string): Promise<void> {
  await deleteFormApi(id);
  await Router.reload();
}

export const getServerSideProps: GetServerSideProps = async () => {
  const forms = await prisma.form.findMany({
    include: {
      responses: true,
    },
  });

  return {
    props: { forms },
  };
};

type Props = {
  forms: IForm[];
};

const Index: React.FC<Props> = ({ forms }) => {
  const items = forms.map((form) => {
    const createdAt = dayjs().to(dayjs(form.createdAt));

    const publicLink = `${
      typeof window !== "undefined" ? window.location.origin : ""
    }/api/form/${form.id}`;

    return (
      <Group
        key={form.id}
        justify="space-between"
        className={classes.item}
        wrap="nowrap"
        gap="xl"
      >
        <div
          className={classes.link}
          onClick={() => Router.push("/form/[id]", `/form/${form.id}`)}
        >
          <Text>{form.title}</Text>
          <Text size="xs" c="dimmed">
            Created {createdAt}. Responses: {form.responses.length}
          </Text>
        </div>

        <Group>
          <CopyButton value={publicLink}>
            {({ copied, copy }) => (
              <Button
                variant={copied ? "light" : "default"}
                onClick={copy}
                size="xs"
              >
                {copied ? "Copied" : "Copy form url"}
              </Button>
            )}
          </CopyButton>

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
    );
  });

  if (items.length === 0) {
    return (
      <Layout>
        <Card radius="md" p="xl">
          <Text fz="lg" fw={900} mb="xl">
            Forms
          </Text>
          <Text fz="lg" fw={500}>
            No forms yet. <a href="/create">Create</a>
          </Text>
        </Card>
      </Layout>
    );
  }

  return (
    <Layout>
      <Card radius="md" p="xl">
        <Text fz="lg" fw={900} mb="xl">
          Forms
        </Text>
        {items}
      </Card>
    </Layout>
  );
};

export default Index;
