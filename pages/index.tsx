import React from "react";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import { IForm } from "@/shared/types";
import { ApplicationLayout } from "@/shared/ui-kit/layouts/ApplicationLayout";
import { SidebarMenu } from "@/components/global/SidebarMenu";
import { GlobalWrapper } from "@/components/global/GlobalWraper";
import { Sidebar } from "@/components/global/Sidebar";

export const getServerSideProps: GetServerSideProps = async () => {
  const forms = await prisma.form.findMany({
    include: {
      responses: true,
    },
  });

  return {
    props: { forms },
  };
};

type Props = {
  forms: IForm[];
};

const Index: React.FC<Props> = ({ forms }) => {
  return (
    <GlobalWrapper
      sidebar={<Sidebar menuContent={<SidebarMenu forms={forms} />} />}
    >
      <ApplicationLayout title="Формы" />
    </GlobalWrapper>
  );
};

export default Index;
