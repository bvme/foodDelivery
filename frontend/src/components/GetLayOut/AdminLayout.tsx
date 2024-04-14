import { ReactElement, ReactNode } from "react";
import { HeaderUser } from "../HeaderAndFooter";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderUser></HeaderUser>
      {children}
    </>
  );
};
export const getAdminLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
