import { getProducts } from "@/actions/getProducts";
import { TProduct } from "@/types";
import BestSelling from "../components/BestSelling/BestSelling";

const page = async () => {
  const { data: products }: { data: TProduct[] } = await getProducts();
    await fetch(process.env.NEXT_PUBLIC_BASE_API + "/uiconfig/inc-visit", {
    method: "PATCH"
  });
  return (
    <div> {products.length > 0 && <BestSelling products={products} />}</div>
  );
};

export default page;
