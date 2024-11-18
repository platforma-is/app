import React, { FC } from "react";
import { Table, TableTrProps, Text } from "@mantine/core";
import { formatDate } from "@/utils";
import { useDisclosure } from "@mantine/hooks";
import classes from "./ResponseItem.module.scss";
import { ModalResponse } from "@/components/form/responses/ModalResponse";
import { Response } from "@/shared/api/model";

type ResponseItemProps = {
  keys: string[];
  response: Response;
  trProps?: TableTrProps;
};

export const ResponseItem: FC<ResponseItemProps> = ({
  response,
  keys,
  trProps,
}) => {
  const createdAt = formatDate(new Date(response.createdAt));
  const [openedModal, { open, close }] = useDisclosure(false);
  const responseData = response?.data;
  return (
    <>
      <Table.Tr
        className={classes.content}
        {...trProps}
        onClick={open}
        key={response.id}
      >
        {responseData &&
          keys.map((key) => (
            <Table.Td key={key}>
              {responseData[key] ? (
                <Text size={"0.875rem"} key={key}>
                  {responseData[key]?.length > 40
                    ? responseData[key]?.substring(0, 40) + "..."
                    : responseData[key]}
                </Text>
              ) : (
                <Text size={"0.875rem"} key={key}>
                  -
                </Text>
              )}
            </Table.Td>
          ))}
        <Table.Td
          key={"createdAt"}
          pl={"1rem"}
          style={{ verticalAlign: "baseline", width: "200px" }}
        >
          <Text color={"#A6A7AB"} size={"0.875rem"}>
            {createdAt}
          </Text>
        </Table.Td>
      </Table.Tr>

      <ModalResponse
        openedModal={openedModal}
        createdAt={createdAt}
        response={response}
        close={close}
      />
    </>
  );
};
