import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import LayoutWrapper from "@/components/MainLayout";
import Header from "@/features/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const session = useSession();

  return (
    <LayoutWrapper session={session} header={<Header />}>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
