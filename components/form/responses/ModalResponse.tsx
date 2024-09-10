import classes from "@/components/form/responses/ResponseItem/ResponseItem.module.scss";
import { Button, Flex, Text } from "@mantine/core";
import React from "react";
import { ModalLayout } from "@/shared/ui-kit/layouts/ModalLayout";
import { Response } from "@/shared/api/model";

type ModalResponseProps = {
  openedModal: boolean;
  createdAt: string;
  response: Response;
  close: () => void;
};
export const ModalResponse = ({
  openedModal,
  response,
  createdAt,
  close,
}: ModalResponseProps) => {
  const response_data = response?.data;

  return (
    <ModalLayout
      ModalRootProps={{
        size: "lg",
        className: classes.modal_root,
        opened: openedModal,
        onClose: close,
      }}
      ModalContentProps={{ className: classes.modal_content }}
      ModalBodyProps={{ className: classes.modal_body }}
      ModalHeaderProps={{ className: classes.modal_header }}
      header={<Text className={classes.header_title}>{createdAt}</Text>}
      body={
        <>
          {response_data &&
            Object.keys(response_data).map((key, idx) => (
              <Flex
                key={idx}
                className={classes.response_item_wrapper}
                direction={"column"}
                align={"flex-start"}
              >
                <Text fs={"1.125rem"} fw={600} lh={"1.25rem"}>
                  {key}
                </Text>
                <Text fs={"1.125rem"} fw={400} lh={"1.5rem"}>
                  {response_data[key] ?? "Данные отсутствуют"}
                </Text>
              </Flex>
            ))}
          <Button w={"fit-content"} variant={"light"} onClick={close}>
            Закрыть
          </Button>
        </>
      }
    />
  );
};
