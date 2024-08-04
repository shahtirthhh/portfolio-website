import { verify_auth } from "@/actions/admin/authentication";
import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";

const AdminLogin = async () => {
  const auth_data = await verify_auth();
  if (auth_data.user) redirect("/admin/dashboard");
  else return <LoginForm />;
};

export default AdminLogin;
