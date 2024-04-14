import { TermsAndCondition } from "@/components/Footer";
import { getUserLayout } from "@/components/GetLayOut/UserLayout";

export default function termsAndCondition() {
  return (
    <>
      <TermsAndCondition></TermsAndCondition>
    </>
  );
}
termsAndCondition.getLayout = getUserLayout;
