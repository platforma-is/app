import React from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import HeaderLayout from "@/components/HeaderLayout";

export default function HeaderMenu() {
  const router = useRouter();
  const session = useSession();

  const onLogoutClick = () => {
    signOut();
  };

  return (
    <HeaderLayout
      router={router}
      session={session}
      onLogoutClick={onLogoutClick}
    />
  );
}
