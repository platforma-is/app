import React, { FC } from "react";
import { ActionIcon, Menu, rem, Table, Text } from "@mantine/core";
import Router from "next/router";
import { deleteResponseApi } from "@/features/form/queries";
import { IconDots, IconTrash } from "@tabler/icons-react";
import { IResponse } from "@/shared/types";
import { formatDate } from "@/utils/index";

type ResponseItemProps = {
  response: IResponse;
};

async function deleteResponse(id: string): Promise<void> {
  await deleteResponseApi(id);
  await Router.reload();
}

export const ResponseItem: FC<ResponseItemProps> = ({ response }) => {
  const createdAt = formatDate(response.createdAt);

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
