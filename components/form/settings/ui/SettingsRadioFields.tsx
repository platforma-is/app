import { Flex, Group, InputLabel, InputLabelProps, Radio, RadioGroup, RadioProps } from "@mantine/core";
import { useEffect, useId } from "react";

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
  useEffect(() => {
    console.log(data, active);
  }, [data, active]);
  return (
    <Flex align={"flex-start"} gap={"1.5rem"} direction={"row"}>
      <InputLabel w={"12rem"} fw={400} {...labelProps} htmlFor={id}>
        {title}
      </InputLabel>
      <RadioGroup>
        <Group style={{ flexDirection: "column", display: "flex" }}>
          {data?.map((radioItem, idx) => (
            <Radio
              defaultChecked={active === radioItem.value}
              key={idx}
              {...radioItem}
              {...radioProps}
            />
          ))}
        </Group>
      </RadioGroup>
    </Flex>
  );
};
