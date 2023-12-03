import React, { FC } from "react";
import {
  Flex,
  CopyButton,
  Tooltip,
  ActionIcon,
  rem,
  Menu,
} from "@mantine/core";
import {
  IconFileInvoice,
  IconCheck,
  IconCopy,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import { IForm } from "@/utils/types";
import { deleteFormApi } from "@/data/form";
import Router from "next/router";
import classes from "./FormTitle.module.css";

type FormTitleProps = {
  form: IForm;
  publicLink: string;
};

async function deleteForm(id: string): Promise<void> {
  await deleteFormApi(id);
  await Router.push("/");
}

const FormTitle: FC<FormTitleProps> = ({ form, publicLink }) => {
  const copyFormLink = (
    <CopyButton value={publicLink} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip
          label={copied ? "Готово" : "Скопировать"}
          withArrow
          position="right"
        >
          <ActionIcon
            color={copied ? "teal" : "var(--color-dark-2)"}
            variant="subtle"
            onClick={copy}
            style={{ width: rem(16), height: rem(16) }}
          >
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );

  return (
    <Flex
      mih={50}
      gap="md"
      justify="flex-start"
      align="center"
      direction="row"
      wrap="nowrap"
      mb="md"
    >
      <IconFileInvoice
        size="48"
        style={{ color: "var(--color-platforma-6)" }}
      />
      <Flex
        mih={50}
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="nowrap"
      >
        <div className={classes.title}>
          {form.title}
          <Menu
            transitionProps={{ transition: "pop" }}
            withArrow
            position="right"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon
                variant="subtle"
                style={{ color: "var(--color-platforma-6)" }}
              >
                <IconEdit
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                onClick={() => deleteForm(form.id)}
                leftSection={
                  <IconTrash
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                }
                color="red"
              >
                Удалить форму
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className={classes.subtitle}>
          {form.id}
          {copyFormLink}
        </div>
      </Flex>
    </Flex>
  );
};

export default FormTitle;
