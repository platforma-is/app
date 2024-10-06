import { Button, Flex, Loader, Paper, Text, TextInput } from "@mantine/core";
import { ModalLayout } from "@/shared/ui-kit/layouts/ModalLayout";
import React, { useState } from "react";
import Router from "next/router";
import { useAddForm } from "@/shared/api/gen/forms/forms.api";
import { useQueryClient } from "@tanstack/react-query";

type CreateModalSidebarProps = {
  open: boolean;
  setOpen: (it: boolean) => void;
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
            await queryClient
              .invalidateQueries({ queryKey: ["forms"] })
              .then(() => {
                setOpen(false);
                setTitle("");
                Router.push(`/form/${data?.id}`);
              });
          },
        },
      );
    } catch (error) {
      console.error(error);
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
        <form onSubmit={submitData}>
          <Flex direction={"column"} w={"100%"}>
            <Flex gap={10}>
              {VARIANTS.map((it, idx) => (
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
