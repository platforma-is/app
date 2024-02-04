import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import LayoutWrapper from "@/components/MainLayout";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const session = useSession();

  return <LayoutWrapper session={session}>{children}</LayoutWrapper>;
};

export default Layout;
