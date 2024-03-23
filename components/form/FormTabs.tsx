import { Tabs, Text } from "@mantine/core";
import { IntegrationLayout } from "@/components/form/IntegrationLayout";
import { Responses } from "@/components/form/responses/Responses";
import React, { SetStateAction } from "react";
import { IForm, IResponse } from "@/shared/types";
import { FormSettingsLayout } from "@/shared/ui-kit/layouts/FormSettingsLayout";
import { FormSettingsBody } from "@/components/form/settings/FormSettingsBody";

interface FormTabsProps {
  tabs: any[];
  form: IForm;
  activeTab: string | null;
  publicLink: string;
  responses: IResponse[];
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
        {tabs.map((it, idx) => (
          <Tabs.Tab
            key={idx}
            value={it?.name}
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
        <Responses responses={responses} />
      </Tabs.Panel>
      <Tabs.Panel value="settings">
        <FormSettingsLayout body={<FormSettingsBody form={form} />} />
      </Tabs.Panel>
    </Tabs>
  );
};
