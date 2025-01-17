import React, { FC } from "react";
import { Paper, Table, Text } from "@mantine/core";
import { ResponseItem } from "@/components/form/responses/ResponseItem/ResponseItem";
import { Response } from "@/shared/api/model";
import { useWindowSize } from "@/shared/hooks/useWindowSize";

type ResponsesProps = {
  keys: string[];
  responses: Response[];
};

export const Responses: FC<ResponsesProps> = ({ responses, keys }) => {
  const { width, height } = useWindowSize();
  return responses.length > 0 ? (
    <Paper radius={"md"} mt={"1.5rem"}>
      <Table.ScrollContainer
        mah={height - 300}
        minWidth={width - 300}
        type="native"
      >
        <Table
          highlightOnHover
          bgcolor={"white"}
          stickyHeader
          stickyHeaderOffset={0}
          verticalSpacing={"0.75rem"}
          horizontalSpacing={"0.75rem"}
        >
          <Table.Thead>
            <Table.Tr>
              {keys.map((key) => (
                <Table.Th key={key}>
                  <Text color={"#A6A7AB"} size={"0.75rem"}>
                    {key}
                  </Text>
                </Table.Th>
              ))}
              <Table.Th w={"2rem"} key={"createdAt"} pl={"1rem"}>
                <Text color={"#A6A7AB"} size={"0.75rem"}>
                  Дата и время
                </Text>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {responses?.map((response) => (
              <ResponseItem keys={keys} key={response.id} response={response} />
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  ) : (
    <Text
      ff={"Circe Rounded Medium"}
      color={"#ADB5BD"}
      top={"50%"}
      left={"50%"}
      pos={"absolute"}
      fw={"500"}
      size={"2.5rem"}
    >
      Пока ответов нет
    </Text>
  );
};
