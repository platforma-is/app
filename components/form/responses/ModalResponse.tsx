import classes from "@/components/form/responses/ResponseItem/ResponseItem.module.scss";
import { Button, CloseButton, Flex, Modal, Text } from "@mantine/core";
import React from "react";
import { IResponse } from "@/shared/types";

type ModalResponseProps = {
  openedModal: boolean;
  createdAt: string;
  response: IResponse;
  close: () => void;
};
export const ModalResponse = ({
  openedModal,
  response,
  createdAt,
  close,
}: ModalResponseProps) => {
  return (
    <Modal.Root
      size={"lg"}
      className={classes.modal_root}
      opened={openedModal}
      onClose={close}
    >
      <Modal.Overlay />
      <Modal.Content className={classes.modal_content}>
        <Modal.Header className={classes.modal_header}>
          <Text className={classes.header_title}>{createdAt}</Text>
          <CloseButton onClick={close} />
        </Modal.Header>
        <Modal.Body className={classes.modal_body}>
          {Object.keys(response?.data).map((key) => (
            <Flex
              className={classes.response_item_wrapper}
              direction={"column"}
              align={"flex-start"}
            >
              <Text fs={"1.125rem"} fw={600} lh={"1.25rem"}>
                {key}
              </Text>
              <Text fs={"1.125rem"} fw={400} lh={"1.5rem"}>
                {response?.data[key] ?? "Данные отсутствуют"}
              </Text>
            </Flex>
          ))}
          <Button w={"fit-content"} variant={"light"} onClick={close}>
            Закрыть
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
