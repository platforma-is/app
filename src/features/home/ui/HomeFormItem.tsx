import classes from "@/src/components/Forms.module.css";
import Router from "next/router";

import { IconDots, IconTrash } from "@tabler/icons-react";
import React, { FC } from "react";
import { IForm } from "@/src/shared/types";
import { deleteForm } from "@/src/entities/home/queries";
import {
  ActionIcon,
  Button,
  CopyButton,
  Group,
  Menu,
  rem,
  Text,
} from "@mantine/core";

type HomeFormItemProps = {
  form: IForm;
  createdAt: string;
  publicLink: string;
};

export const HomeFormItem: FC<HomeFormItemProps> = ({
  form,
  createdAt,
  publicLink,
}) => {
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
              Удалить форму
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  );
};
