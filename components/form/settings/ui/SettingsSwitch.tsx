import {
  Flex,
  InputLabel,
  InputLabelProps,
  Switch,
  SwitchProps,
} from "@mantine/core";
import { useId } from "react";

interface SettingsSwitchProps {
  title?: string;
  labelProps?: InputLabelProps;
  switchProps?: SwitchProps;
}

export const SettingsSwitch = ({
  title,
  labelProps,
  switchProps,
}: SettingsSwitchProps) => {
  const id = useId();

  return (
    <Flex align={"center"} gap={"1.5rem"} direction={"row"} my={'0.6rem'}>
      <InputLabel w={"12rem"} fw={400} fz="lg" {...labelProps} htmlFor={id}>
        {title}
      </InputLabel>
      <Switch fz="lg" size={"lg"} {...switchProps} w={"26rem"} id={id} />
    </Flex>
  );
};
