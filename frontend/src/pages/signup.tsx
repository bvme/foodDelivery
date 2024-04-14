import { getLoginLayout } from "@/components/GetLayOut/LoginLayout";
import { SignUp } from "@/components/user/SignUp";

export default function signup() {
  return (
    <>
      <SignUp></SignUp>
    </>
  );
}
signup.getLayout = getLoginLayout;
