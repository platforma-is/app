import React from "react";
import { ApplicationLayout } from "@/shared/ui-kit/layouts/ApplicationLayout";
import { SidebarMenu } from "@/components/global/SidebarMenu";
import { GlobalWrapper } from "@/components/global/GlobalWraper";
import { Sidebar } from "@/components/global/Sidebar";

const Index: React.FC = () => {
  return (
    <GlobalWrapper sidebar={<Sidebar menuContent={<SidebarMenu />} />}>
      <ApplicationLayout title="Формы" />
    </GlobalWrapper>
  );
};

export default Index;
