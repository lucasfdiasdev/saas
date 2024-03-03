import { auth } from "@/auth";
import { redirect } from "next/navigation";

const AgencyPage = async () => {
  const session = await auth();
  if (!session) return redirect("/sign-in");

  // get user details
  // const user = await getAuthUserDetails()
  return <div>AgencyPage</div>;
};

export default AgencyPage;
