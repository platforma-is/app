import { Button, Flex, Paper, Text, TextInput } from "@mantine/core";
import { ModalLayout } from "@/shared/ui-kit/layouts/ModalLayout";
import React, { useState } from "react";
import { formCreate } from "@/shared/api/formsApi";
import Router from "next/router";

type CreateModalSidebarProps = {
  open: boolean;
  setOpen: (it: boolean) => void;
};

export const CreateModalSidebar = ({
  open,
  setOpen,
}: CreateModalSidebarProps) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [title, setTitle] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      if (title !== "") {
        const response = await formCreate(title);
        await Router.push(`/form/${response?.data?.id}`);
        setOpen(false);
        setTitle(() => "");
      }
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
        <Text fw={600} size={"2.5rem"} ff={"PP Pangram Sans Rounded"}>
          Создать…
        </Text>
      }
      body={
        <form onSubmit={submitData}>
          <Flex direction={"column"} w={"100%"}>
            <Flex>
              {["Форму", "Папку"].map((it, idx) => (
                <Paper
                  key={it}
                  onClick={() => setSelectedOption(idx)}
                  p={"0.75rem"}
                  withBorder={idx === selectedOption}
                  shadow={idx === selectedOption ? "xl" : ""}
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
              disabled={title === ""}
              type={"submit"}
              mt={"1rem"}
              w={"fit-content"}
            >
              Создать
            </Button>
          </Flex>
        </form>
      }
    />
  );
};
