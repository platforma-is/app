import React from "react";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import { IForm, IResponse } from "@/shared/types";
import FormTitle from "@/components/form/FormTitle";
import { GlobalWrapper } from "@/components/global/GlobalWraper";
import useFormItemPage from "@/features/form/use-form-item-page";
import { FormTabs } from "@/components/form/FormTabs";
import { ApplicationLayout } from "@/shared/ui-kit/layouts/ApplicationLayout";

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
      <ApplicationLayout
        title={<FormTitle publicLink={publicLink} form={form} />}
      >
        <FormTabs
          form={form}
          tabs={tabs}
          activeTab={activeTab}
          publicLink={publicLink}
          responses={responses}
          setActiveTab={setActiveTab}
        />
      </ApplicationLayout>
    </GlobalWrapper>
  );
};

export default Post;
