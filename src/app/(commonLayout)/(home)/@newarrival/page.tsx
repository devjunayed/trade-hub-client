import { getProducts } from "@/actions/getProducts";
import { TProduct } from "@/types";
import NewArrival from "../components/NewArrival/NewArrival";

const page = async () => {
  const { data: products }: { data: TProduct[] } = await getProducts();
  return (
    <div> {products.length > 0 && <NewArrival products={products} />}</div>
  );
};

export default page;
