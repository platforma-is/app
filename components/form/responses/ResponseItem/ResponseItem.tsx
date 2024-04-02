import React, { FC } from "react";
import { Table, TableTrProps, Text } from "@mantine/core";
import { IResponse } from "@/shared/types";
import { formatDate } from "@/utils/index";
import { useDisclosure } from "@mantine/hooks";
import classes from "./ResponseItem.module.scss";
import { ModalResponse } from "@/components/form/responses/ModalResponse";

type ResponseItemProps = {
  response: IResponse;
  trProps?: TableTrProps;
};

export const ResponseItem: FC<ResponseItemProps> = ({ response, trProps }) => {
  const createdAt = formatDate(response.createdAt);
  const [openedModal, { open, close }] = useDisclosure(false);

  return (
    <>
      <Table.Tr
        className={classes.content}
        {...trProps}
        onClick={open}
        key={response.id}
      >
        {response?.data &&
          Object.keys(response?.data).map((key) => (
            <Table.Td key={key}>
              <Text size={"0.875rem"} key={key}>
                {response?.data[key].length > 40
                  ? response?.data[key].substring(0, 40) + "..."
                  : response?.data[key]}
              </Text>
            </Table.Td>
          ))}
        <Table.Td
          pl={"1rem"}
          style={{ verticalAlign: "baseline", width: "200px" }}
        >
          <Text color={"#A6A7AB"} size={"0.875rem"}>
            {createdAt}
          </Text>
        </Table.Td>
        <Table.Td></Table.Td>
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
