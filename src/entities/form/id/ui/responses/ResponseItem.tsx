import { ActionIcon, Menu, rem, Table, Text } from "@mantine/core";
import { IconDots, IconTrash } from "@tabler/icons-react";
import React, { FC } from "react";
import dayjs from "dayjs";
import { deleteResponseApi } from "@/data/response";
import Router from "next/router";
import "dayjs/locale/ru";
import { IResponse } from "@/src/shared/types";

type IResponseItemProps = {
  response: IResponse;
};

async function deleteResponse(id: string): Promise<void> {
  await deleteResponseApi(id);
  await Router.reload();
}

export const ResponseItem: FC<IResponseItemProps> = (props) => {
  const { response } = props;
  const createdAt = dayjs(response.createdAt)
    .locale("ru")
    .format("DD MMMM YYYY, HH:mm");

  return (
    <Table.Tr key={response.id}>
      {response?.data &&
        Object.keys(response?.data).map((key) => (
          <Table.Td key={key}>
            <Text size={"0.875rem"} key={key}>
              {response?.data[key]}
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
      <Table.Td align="right" style={{ verticalAlign: "baseline" }}>
        <Menu
          transitionProps={{ transition: "pop" }}
          withArrow
          position="bottom-end"
          withinPortal
        >
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray">
              <IconDots
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              onClick={() => deleteResponse(response.id)}
              leftSection={
                <IconTrash
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              color="red"
            >
              Delete response
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  );
};
