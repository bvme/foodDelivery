import { ReactElement, ReactNode } from "react";
import { Footer, HeaderUser } from "../HeaderAndFooter";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderUser></HeaderUser>
      {children}
      <Footer></Footer>
    </>
  );
};
export const getUserLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
