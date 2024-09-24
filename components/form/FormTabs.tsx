import { Tabs, Text } from "@mantine/core";
import { Responses } from "@/components/form/responses/Responses";
import React, { SetStateAction } from "react";
import { FormSettingsLayout } from "@/shared/ui-kit/layouts/FormSettingsLayout";
import { FormSettingsBody } from "@/components/form/settings/ui/FormSettingsBody";
import { TablerIconsProps } from "@tabler/icons-react";
import { Form, Response } from "@/shared/api/model";
import { IntegrationLayout } from "@/components/form/IntegrationLayout";

interface FormTabsProps {
  tabs: {
    name: string;
    text: string;
    ico: (props: TablerIconsProps) => JSX.Element;
  }[];
  form: Form;
  activeTab: string | null;
  publicLink: string;
  responses: Response[];
  setActiveTab: React.Dispatch<SetStateAction<string | null>>;
}

export const FormTabs = ({
  tabs,
  form,
  responses,
  publicLink,
  setActiveTab,
  activeTab,
}: FormTabsProps) => {
  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        {tabs.map((it) => (
          <Tabs.Tab
            key={it.name}
            value={it?.name}
            color={"#5033FF"}
            leftSection={
              <it.ico
                width={"1.25rem"}
                height={"1.25rem"}
                color={activeTab === it.name ? "#5033FF" : "black"}
              />
            }
          >
            <Text
              size={"1rem"}
              fw={"400"}
              color={activeTab === it.name ? "#5033FF" : "black"}
            >
              {it.text}
            </Text>
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Tabs.Panel key={`integration_panel${form.id}`} value="integration">
        <IntegrationLayout publicLink={publicLink} />
      </Tabs.Panel>
      <Tabs.Panel key={`responses_panel${form.id}`} value="responses">
        <Responses responses={responses} />
      </Tabs.Panel>
      <Tabs.Panel key={`settings_panel${form.id}`} value="settings">
        <FormSettingsLayout body={<FormSettingsBody form={form} />} />
      </Tabs.Panel>
    </Tabs>
  );
};
