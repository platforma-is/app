import React, { FC } from "react";
import { ActionIcon, Menu, rem, Table, Text } from "@mantine/core";
import { IconDots, IconTrash } from "@tabler/icons-react";
import { IResponse } from "types";
import { formatDate } from "../utils";

type ResponseItemLayoutProps = {
  response: IResponse;
  onDeleteItem: (id: string) => void;
};


export const ResponseItemLayout: FC<ResponseItemLayoutProps> = ({response, onDeleteItem}) => {
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
              onClick={() => onDeleteItem(response.id)}
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
