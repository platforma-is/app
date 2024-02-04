import React, { useState } from "react";
import { Card, Tabs, Text } from "@mantine/core";
import { IForm, IResponse } from "src/shared/types";
import {
  IconClipboardList,
  IconNorthStar,
  IconSettings2,
} from "@tabler/icons-react";
import { ResponsesLayout } from "@/src/entities/form/id/ui/responses/ResponsesLayout";
import FormTitle from "@/src/entities/form/id/ui/FormTitle";
import Layout from "@/src/components/Layout";
import { IntegrationLayout } from "@/src/components/Forms/integration/IntegrationLayout";

const Post: React.FC<{
  responses: IResponse[];
  form: IForm;
}> = ({ responses, form }) => {
  const [activeTab, setActiveTab] = useState<string | null>("integration");

  if (!form) return null;

  const publicLink = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/api/form/${form.id}`;

  const tabs = [
    {
      name: "integration",
      text: "Установка на сайт",
      ico: IconNorthStar,
    },
    {
      name: "responses",
      text: "Ответы",
      ico: IconClipboardList,
    },
    {
      name: "settings",
      text: "Интеграции и настройки",
      ico: IconSettings2,
    },
  ];

  return (
    <Layout>
      <Card radius="md" p="xl" mb="md">
        <FormTitle publicLink={publicLink} form={form} />
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            {tabs.map((it, idx) => (
              <Tabs.Tab
                key={idx}
                value={it.name}
                color={"#5033FF"}
                leftSection={
                  <it.ico
                    width={"0.75rem"}
                    height={"0.75rem"}
                    color={activeTab === it.name ? "#5033FF" : "black"}
                  />
                }
              >
                <Text
                  size={"0.75rem"}
                  fw={"400"}
                  color={activeTab === it.name ? "#5033FF" : "black"}
                >
                  {it.text}
                </Text>
              </Tabs.Tab>
            ))}
          </Tabs.List>

          <Tabs.Panel value="integration">
            <IntegrationLayout publicLink={publicLink} />
          </Tabs.Panel>
          <Tabs.Panel value="responses">
            <ResponsesLayout responses={responses} />
          </Tabs.Panel>
          <Tabs.Panel value="settings">settings</Tabs.Panel>
        </Tabs>
      </Card>
    </Layout>
  );
};

export default Post;
