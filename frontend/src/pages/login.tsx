import { getLoginLayout } from "@/components/GetLayOut/LoginLayout";
import { SignIn } from "@/components/user/SignIn";

export default function LogIn() {
  return (
    <>
      <SignIn></SignIn>
    </>
  );
}
LogIn.getLayout = getLoginLayout;
