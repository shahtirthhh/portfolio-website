import { verify_auth } from "@/actions/admin/authentication";
import { redirect } from "next/navigation";

const AdminDashboard = async () => {
  const auth_data = await verify_auth();
  if (!auth_data.user) redirect("/admin");
  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
