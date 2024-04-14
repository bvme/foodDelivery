import Order from "@/components/Home/order/Order";
import { getUserLayout } from "@/components/GetLayOut/UserLayout";
export default function order() {
  return (
    <>
      <Order></Order>
    </>
  );
}
order.getLayout = getUserLayout;
