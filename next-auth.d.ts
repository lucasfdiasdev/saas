import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role:
    | "AGENCY_OWNER"
    | "AGENCY_ADMIN"
    | "SUBACCOUNT_GUEST"
    | "SUBACCOUNT_USER";
};

declare module "next-auth" {
  interface Session {
    id: string;
    user: ExtendedUser;
  }
}

import { JWT } from "@auth/core/jwt";

declare module "@auth/core/jwt" {
  interface JWT {
    role?:
      | "AGENCY_OWNER"
      | "AGENCY_ADMIN"
      | "SUBACCOUNT_GUEST"
      | "SUBACCOUNT_USER";
  }
}
