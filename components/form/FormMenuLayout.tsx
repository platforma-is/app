import React, { FC, ReactNode } from "react";
import {
  ActionIcon,
  Button,
  CopyButton,
  Group,
  Menu,
  rem,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { IconDots, IconTrash } from "@tabler/icons-react";
import { IForm } from "@/shared/types";

type FormMenuProps = {
  form: IForm;
  publicLink: string;
  onDeleteItem: (id: string) => void;
  children: ReactNode;
};

export const FormMenuLayout: FC<FormMenuProps> = ({
  form,
  publicLink,
  onDeleteItem,
  children,
}) => {
  const copyFormLink = (
    <CopyButton value={publicLink}>
      {({ copied, copy }) => (
        <Button size="xs" variant={copied ? "light" : "default"} onClick={copy}>
          {copied ? "Copied" : "Copy form url"}
        </Button>
      )}
    </CopyButton>
  );

  return (
    <Group justify="space-between" align="flex-start">
      <Text fz="lg" fw={900} mb="xl">
        <Link href="/" legacyBehavior>
          Forms
        </Link>{" "}
        / {form.title}
      </Text>

      <Group>
        {copyFormLink}
        {children}
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
              onClick={() => onDeleteItem(form.id)}
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
};
