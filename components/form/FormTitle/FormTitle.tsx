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
import useDebounce from "@/utils/useDebounce";
import {
  getGetFormsQueryKey,
  useUpdateSettings,
} from "@/shared/api/gen/forms/forms.api";
import { useQueryClient } from "@tanstack/react-query";

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
  const [titleValue, setTitleValue] = useState(form?.title);
  const debouncedTitleValue = useDebounce(titleValue, 1000);
  const updateSettings = useUpdateSettings();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setTitleValue(e.target.value);
  };

  useEffect(() => {
    setTitleValue(form.title);
  }, [form.title]);

  useEffect(() => {
    if (debouncedTitleValue && debouncedTitleValue !== form.title) {
      updateSettings.mutate(
        {
          formId: form.id,
          data: {
            title: debouncedTitleValue,
          },
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getGetFormsQueryKey() });
          },
        },
      );
    }
  }, [debouncedTitleValue]);

  return (
    <Flex className={classes.wrapper} mih={50}>
      <TextInput
        variant="unstyled"
        placeholder="Введите название формы"
        className={classes.title}
        value={titleValue}
        size="xl"
        styles={{ root: { width: "100%" } }}
        onChange={handleChange}
      />
      <div className={classes.subtitle}>
        {form.id}
        {copyFormLink(publicLink)}
      </div>
    </Flex>
  );
};

export default FormTitle;
