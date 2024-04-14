import { getLoginLayout } from "@/components/GetLayOut/LoginLayout";
import { getUserLayout } from "@/components/GetLayOut/UserLayout";
import { UserProfile } from "@/components/UserProfile/UProfile";

export default function Userprofile() {
  return (
    <>
      <UserProfile></UserProfile>
    </>
  );
}
Userprofile.getLayout = getUserLayout;
