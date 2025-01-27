import { getProducts } from "@/actions/getProducts";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard/ProductCard";

const NewArrival = async () => {
  const { data: products }: { data: TProduct[] } = await getProducts();
  console.log(products);

  return (
    <div className="mx-6 ">
      <h1 className="text-3xl my-10">New Arrival</h1>
      {products?.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default NewArrival;
