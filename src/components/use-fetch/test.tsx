import useFetch from ".";
import { ProductsResponse } from "../../shared/product";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch<ProductsResponse>(
    "https://dummyjson.com/products",
    {}
  );
  console.log(error, data, pending);
  return (
    <div>
      <h1>User Fetch Hook</h1>
      {pending && <h3>Pending ! Please Wait</h3>}
      {error && <h4>{error}</h4>}
      {data &&
        data.products &&
        data.products.map((productItem) => (
          <p key={productItem.id}>{productItem.title}</p>
        ))}
    </div>
  );
}
