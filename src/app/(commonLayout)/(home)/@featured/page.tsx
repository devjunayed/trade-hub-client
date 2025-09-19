import { getProducts } from "@/actions/getProducts";
import { TProduct } from "@/types";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

const page = async () => {
  const { data: products }: { data: TProduct[] } = await getProducts();
  return (
    <div> {products.length > 0 && <FeaturedProducts products={products} />}</div>
  );
};

export default page;
