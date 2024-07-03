import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { Product } from "../../shared/product";

export default function LoadMoreData() {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(0);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [
          ...(count === 0 ? [] : prevData),
          ...result.products
        ]);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [count]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (products && products.length == 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  );
}