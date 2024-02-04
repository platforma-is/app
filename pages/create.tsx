import React, { useState } from "react";
import Layout from "@/features/Layout";
import Router from "next/router";
import { Button, Card, Group, Stack, Text, TextInput } from "@mantine/core";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title };

      await fetch(`/api/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Card radius="md" p="xl">
        <Text fz="lg" fw={900} mb="xl">
          Forms / Create new
        </Text>

        <form onSubmit={submitData}>
          <Stack gap="xl">
            <TextInput
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
            />

            <Group>
              <Button disabled={!title} type="submit">
                Create
              </Button>
              <Button onClick={() => Router.push("/")} variant="subtle">
                Cancel
              </Button>
            </Group>
          </Stack>
        </form>
      </Card>
    </Layout>
  );
};

export default Draft;
