'use client';

import React from "react";
import { GetServerSideProps } from "next";
import FormTitle from "@/components/form/FormTitle/FormTitle";
import { GlobalWrapper } from "@/components/global/GlobalWraper";
import useFormItemPage from "@/features/form/use-form-item-page";
import { FormTabs } from "@/components/form/FormTabs";
import { ApplicationLayout } from "@/shared/ui-kit/layouts/ApplicationLayout";
import { Sidebar } from "@/components/global/Sidebar";
import { SidebarMenu } from "@/components/global/SidebarMenu";
import { LoadingOverlay } from "@mantine/core";
import { useGetFormById, useGetResponses } from "@/shared/api/gen/forms/forms.api";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: { id: params?.id },
  };
};

const Form: React.FC<{
  id?: string;
}> = ({ id }) => {
  const { data: form } = useGetFormById(id ?? "");
  const { data: responses } = useGetResponses(id ?? "");
  const { tabs, publicLink, activeTab, setActiveTab, visible } = useFormItemPage(
    form || null,
  );

  return (
    <GlobalWrapper sidebar={<Sidebar menuContent={<SidebarMenu />} />}>
      {form &&
        <ApplicationLayout
          title={<FormTitle publicLink={publicLink} form={form} />}
        >
          <FormTabs
            form={form}
            tabs={tabs}
            activeTab={activeTab}
            publicLink={publicLink}
            responses={responses || []}
            setActiveTab={setActiveTab}
          />
        </ApplicationLayout>
      }

      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

    </GlobalWrapper>
  );
};

export default Form;
