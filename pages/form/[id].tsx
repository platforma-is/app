import React from "react";
import { Card, Tabs, Text } from "@mantine/core";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import { IForm, IResponse } from "@/shared/types";
import { IntegrationLayout } from "@/components/form/IntegrationLayout";
import FormTitle from "@/components/form/FormTitle";
import { GlobalWrapper } from "@/components/global/GlobalWraper";
import { Header } from "@/components/global/Header";
import { Responses } from "@/components/form/Responses";
import useFormItemPage from "@/features/form/use-form-item-page";
import { FormItemLayout } from "@/shared/ui-kit/layouts/FormItemLayout";
import { FormTabs } from "@/components/form/FormTabs";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const form = await prisma.form.findUnique({
    where: {
      id: params?.id as string,
    },
  });

  const responses = await prisma.response.findMany({
    where: {
      formId: params?.id as string,
    },
  });

  return {
    props: { form, responses },
  };
};

const Post: React.FC<{
  responses: IResponse[];
  form: IForm;
}> = ({ responses, form }) => {
  const { tabs, publicLink, activeTab, setActiveTab } = useFormItemPage(form);

  if (!form) return null;

  return (
    <GlobalWrapper>
      <FormItemLayout
        title={<FormTitle publicLink={publicLink} form={form} />}
        tabs={
          <FormTabs
            tabs={tabs}
            activeTab={activeTab}
            publicLink={publicLink}
            responses={responses}
            setActiveTab={setActiveTab}
          />
        }
      />
    </GlobalWrapper>
  );
};

export default Post;
