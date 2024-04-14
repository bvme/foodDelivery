import { GoogleMap } from "@/components/Footer";
import { getUserLayout } from "@/components/GetLayOut/UserLayout";
export default function googleMap() {
  return (
    <>
      <GoogleMap></GoogleMap>
    </>
  );
}
googleMap.getLayout = getUserLayout;
