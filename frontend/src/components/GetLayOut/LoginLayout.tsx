import { ReactElement, ReactNode } from "react";
import { Footer, HeaderLogin } from "../HeaderAndFooter";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderLogin></HeaderLogin>
      {children}
      <Footer></Footer>
    </>
  );
};
export const getLoginLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
};
