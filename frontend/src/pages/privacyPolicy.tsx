import { PrivecyPolicy } from "@/components/Footer";
import { getUserLayout } from "@/components/GetLayOut/UserLayout";

export default function privecyPolicy() {
  return (
    <>
      <PrivecyPolicy></PrivecyPolicy>
    </>
  );
}
privecyPolicy.getLayout = getUserLayout;
