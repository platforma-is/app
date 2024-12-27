import { useId } from "react";
import {
  Flex,
  InputLabel,
  InputLabelProps,
  Select,
  SelectProps,
} from "@mantine/core";

interface SettingsSelectProps {
  title?: string;
  labelProps?: InputLabelProps;

  selectProps?: SelectProps;
}

export const SettingsSelect = ({
  title,
  labelProps,
  selectProps,
}: SettingsSelectProps) => {
  const id = useId();
  return (
    <Flex align={"center"} gap={"1.5rem"} direction={"row"}>
      <InputLabel fz="lg" w={"12rem"} fw={400} {...labelProps} htmlFor={id}>
        {title}
      </InputLabel>
      <Select
        {...selectProps}
        placeholder={selectProps?.placeholder}
        data={selectProps?.data}
        fz="lg"
        size={"lg"}
        w={"26rem"}
      />
    </Flex>
  );
};
