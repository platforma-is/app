import {
  Flex,
  InputLabel,
  InputLabelProps,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import { useId } from "react";

interface SettingsFieldProps {
  title?: string;
  inputProps?: TextInputProps;
  labelProps?: InputLabelProps;
}

export const SettingsTextField = ({
  title,
  labelProps,
  inputProps,
}: SettingsFieldProps) => {
  const id = useId();
  return (
    <Flex align={"center"} gap={"1.5rem"} direction={"row"}>
      <InputLabel w={"12rem"} fw={400} {...labelProps} htmlFor={id}>
        {title}
      </InputLabel>
      <TextInput {...inputProps} w={"23rem"} id={id} />
    </Flex>
  );
};
