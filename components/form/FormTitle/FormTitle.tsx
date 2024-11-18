"use client";

import React, { FC, useEffect, useState } from "react";
import {
  ActionIcon,
  CopyButton,
  Flex,
  rem,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import classes from "@/components/form/FormTitle/FormTitle.module.scss";
import { Form } from "@/shared/api/model";
import {
  getGetFormsQueryKey,
  useUpdateSettings,
} from "@/shared/api/gen/forms/forms.api";
import { useQueryClient } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";

type FormTitleProps = {
  form: Form;
  publicLink: string;
};

const copyFormLink = (publicLink) => (
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

const FormTitle: FC<FormTitleProps> = ({ form, publicLink }) => {
  const [titleValue, setTitleValue] = useState(form.title);
  const queryClient = useQueryClient();
  const updateSettings = useUpdateSettings();
  const handleUpdateQuery = (value: string, formId: string) => {
    if (value?.length > 0) {
      updateSettings.mutate(
        {
          formId,
          data: { title: value },
        },
        {
          onSuccess: async () => {
            console.log("call");
            await queryClient.invalidateQueries({
              queryKey: getGetFormsQueryKey(),
            });
          },
        },
      );
    }
  };

  const debouncedUpdateQuery = useDebouncedCallback(handleUpdateQuery, 1500);
  const handleChange = (e) => {
    const value = e.target.value;
    setTitleValue(value);
    debouncedUpdateQuery(value, form.id);
  };

  useEffect(() => {
    setTitleValue(form.title);
  }, [form.id, form.title]);

  return (
    <Flex key={`${form.id}${form.title}`} className={classes.wrapper} mih={50}>
      <TextInput
        variant="unstyled"
        placeholder="Введите название формы"
        className={classes.title}
        value={titleValue}
        onChange={handleChange}
        defaultValue={form.title}
        size="xl"
        styles={{ root: { width: "100%" } }}
      />
      <div className={classes.subtitle}>
        {form.id}
        {copyFormLink(publicLink)}
      </div>
    </Flex>
  );
};

export default FormTitle;
