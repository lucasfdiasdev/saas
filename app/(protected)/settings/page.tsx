"use client";

import { logout } from "@/actions/logout";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
    logout();
  };
  return (
    <>
      {JSON.stringify(session.data?.user)}
      <Button onClick={onClick} type="submit">
        Sign Out
      </Button>
    </>
  );
};

export default SettingsPage;
