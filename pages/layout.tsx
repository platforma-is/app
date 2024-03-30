import { GlobalWrapper } from "@/components/global/GlobalWraper";
import { Sidebar } from "@/components/global/Sidebar";
import { SidebarMenu } from "@/components/global/SidebarMenu";
import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
  // forms?: IForm[];
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <GlobalWrapper
      sidebar={<Sidebar menuContent={<SidebarMenu forms={[]} />} />}
    >
      {children}
    </GlobalWrapper>
  );
}
