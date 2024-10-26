import { Button, Flex, Loader, Paper, Text, TextInput, Tooltip } from "@mantine/core";
import { ModalLayout } from "@/shared/ui-kit/layouts/ModalLayout";
import React, { useState } from "react";
import Router from "next/router";
import { getGetFormsQueryKey, useAddForm } from "@/shared/api/gen/forms/forms.api";
import { useQueryClient } from "@tanstack/react-query";
import { handleNotification } from "@/shared/utils";

type CreateModalSidebarProps = {
  open: boolean;
  setOpen: (it?: boolean) => void;
};
const VARIANTS = ["Форму", "Папку"];
export const CreateModalSidebar = ({
  open,
  setOpen,
}: CreateModalSidebarProps) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();
  const createFormMutation = useAddForm();
  const submitData = async () => {
    try {
      createFormMutation.mutate(
        { data: { title } },
        {
          onSuccess: async (data) => {
            handleNotification({message: "Форма создана :)"})
            await queryClient
              .invalidateQueries({ queryKey: [getGetFormsQueryKey()] })
              .then(() => {
                setOpen(false);
                setTitle("");
                Router.push(`/form/${data?.id}`);
              });
          },
          onError: (err) => {
            handleNotification({mode: "error", message: err.message})
          }
        },
      );
    } catch (error) {
      handleNotification({mode: "error", message: "Ошибка в создании формы"})
    }
  };

  return (
    <ModalLayout
      ModalRootProps={{
        size: "md",
        opened: open,
        onClose: () => setOpen(false),
      }}
      ModalContentProps={{ p: "1rem" }}
      header={
        <Text fw={600} size={"2.5rem"} ff={"Circe Rounded Medium"}>
          Создать…
        </Text>
      }
      body={
        <form onSubmit={() => {submitData();}}>
          <Flex direction={"column"} w={"100%"}>
            <Flex gap={10}>
              {VARIANTS.map((it, idx) => (
                <Tooltip position={'bottom'} disabled={it !== VARIANTS[1]} label="Пока недоступно">
                  <Paper
                  key={it}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedOption(idx);
                  }}
                  disabled={it === VARIANTS[1]}
                  p={"0.75rem"}
                  withBorder={idx === selectedOption}
                  shadow={idx === selectedOption ? "xl" : ""}
                  sx={{border: idx !== selectedOption ? 'none' : ''}}
                  radius={"0.5rem"}
                  h={"fit-content"}
                  w={"fit-content"}
                  component={"button"}
                >
                  <Text>{it}</Text>
                </Paper>
                </Tooltip>
              ))}
            </Flex>
            <TextInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              mt={"2rem"}
              placeholder={"Название формы"}
            />
            <Button
              disabled={title.trim() === "" || createFormMutation.isPending}
              type={"submit"}
              mt={"1rem"}
              w={"fit-content"}
            >
              {createFormMutation.isPending ? (
                <Loader size={"1rem"} color={"white"} />
              ) : (
                "Создать"
              )}
            </Button>
          </Flex>
        </form>
      }
    />
  );
};
