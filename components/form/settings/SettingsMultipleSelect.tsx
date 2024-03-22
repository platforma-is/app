import {
  Button,
  CloseButton,
  Flex,
  Input,
  InputLabel,
  InputLabelProps,
  InputProps,
  Paper,
  rem,
  Switch,
  SwitchProps,
  Text,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import { useId, useState } from "react";

interface SettingsMultipleSelectProps {
  title?: string;
  labelProps?: InputLabelProps;
  inputProps?: TextInputProps;
  selected?: string[];
}

export const SettingsMultipleSelect = ({
  title,
  labelProps,
  inputProps,
  selected = [
    "pashaomelekhin@gmail.com",
    "pashaomelekhin1@gmail.com",
    "pashaomelekhin2@gmail.com",
  ],
}: SettingsMultipleSelectProps) => {
  const id = useId();
  const [items, setItems] = useState(selected);
  const [inputValue, setInputValue] = useState(inputProps?.value?.toString);
  const handleAddItem = (it) => {
    setItems((prev) => [...prev, it]);
    setInputValue(() => "");
  };

  const handleRemoveItem = (it) => {
    setItems((prev) => prev?.filter((item) => item != it));
  };

  return (
    <Flex align={"flex-start"} gap={"1.5rem"} direction={"row"}>
      <InputLabel mt={"1rem"} w={"12rem"} fw={400} {...labelProps} htmlFor={id}>
        {title}
      </InputLabel>
      <Flex direction={"column"}>
        <Paper
          withBorder
          p={"0.5rem"}
          w={"23rem"}
          display={"flex"}
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <TextInput
            w={"65%"}
            {...inputProps}
            placeholder={"inbox@mail.com"}
            id={id}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            variant={"unstyled"}
            rightSectionWidth={"auto"}
            rightSectionPointerEvents={"all"}
          />
          <Button
            onClick={() => handleAddItem(inputValue)}
            variant={"light"}
          >
            Добавить
          </Button>
        </Paper>
        <Flex mt={"1rem"} rowGap={"0.75rem"} w={"100%"} direction={"column"}>
          {items?.map((item) => (
            <Flex
              onClick={() => handleRemoveItem(item)}
              key={item}
              w={"100%"}
              direction={"row"}
              justify={"space-between"}
            >
              <Text>{item}</Text>
              <CloseButton />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
