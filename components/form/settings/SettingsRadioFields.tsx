import {
  Flex,
  Group,
  InputLabel,
  InputLabelProps,
  Radio,
  RadioGroup,
  RadioProps,
} from "@mantine/core";
import { useId } from "react";

interface SettingsSelectProps {
  title?: string;
  labelProps?: InputLabelProps;
  radioProps?: RadioProps;
  data?: string[];
}

export const SettingsRadioFields = ({
  title,
  labelProps,
  radioProps,
  data,
}: SettingsSelectProps) => {
  const id = useId();
  return (
    <Flex align={"flex-start"} gap={"1.5rem"} direction={"row"}>
      <InputLabel w={"12rem"} fw={400} {...labelProps} htmlFor={id}>
        {title}
      </InputLabel>
      <RadioGroup>
        <Group style={{ flexDirection: "column", display: "flex" }}>
          {data?.map((item, idx) => (
            <Radio key={idx} value={item} {...radioProps} label={item} />
          ))}
        </Group>
      </RadioGroup>
    </Flex>
  );
};
