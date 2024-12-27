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
  data?: { label: string; value: string }[];
  active?: string;
}

export const SettingsRadioFields = ({
  title,
  labelProps,
  radioProps,
  data,
  active,
}: SettingsSelectProps) => {
  const id = useId();
  return (
    <Flex align={"flex-start"} gap={"1.5rem"} direction={"row"}>
      <InputLabel w={"12rem"} fw={400} {...labelProps} fz={"lg"} htmlFor={id}>
        {title}
      </InputLabel>
      <RadioGroup>
        <Group style={{ flexDirection: "column", display: "flex", gap: "0px" }}>
          {data?.map((radioItem, idx) => (
            <Radio
              defaultChecked={active === radioItem.value}
              key={idx}
              size={"lg"}
              mb="lg"
              {...radioItem}
              {...radioProps}
            />
          ))}
        </Group>
      </RadioGroup>
    </Flex>
  );
};
