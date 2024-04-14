import { AdminMenu } from "@/components/AdminCategory";
import { getAdminLayout } from "@/components/GetLayOut/AdminLayout";

export default function Admin() {
  return (
    <>
      <AdminMenu></AdminMenu>
    </>
  );
}
Admin.getLayout = getAdminLayout;
