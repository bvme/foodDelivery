import { getLoginLayout } from "@/components/GetLayOut/LoginLayout";
import HomePage from "@/components/Home/Menu";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage></HomePage>
    </>
  );
}
Home.getLayout = getLoginLayout;
