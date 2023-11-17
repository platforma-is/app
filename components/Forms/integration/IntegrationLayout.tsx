import {Button, Card, Code, Stack, Text, TextInput} from "@mantine/core";
import React, {FC} from "react";
import {IForm} from "@/utils/types";

type IntegrationLayoutProps = {
    publicLink: string
}
export const IntegrationLayout: FC<IntegrationLayoutProps> = (props) => {
    const {publicLink} = props;

    const htmlFormCode = `<form method="POST" action="${publicLink}">
  <input type="text" name="name" placeholder="Name" />
  <input type="text" name="text" placeholder="Text" />
  <button type="submit">Submit</button>
</form>`;

    return (
        <Card radius="md" p="xl">
            <Text fz="lg" fw={500} mb="sm">
                Api test
            </Text>

            <Code mb="xl" block>
                {htmlFormCode}
            </Code>

            <form
                method="POST"
                action={publicLink}
                // encType="multipart/form-data"
            >
                <Stack gap="xl">
                    <Stack>
                        <TextInput name="name" label="Name" placeholder="Name" required/>
                        <TextInput name="text" label="Text" placeholder="Text" required/>
                    </Stack>
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </Card>
    );
};