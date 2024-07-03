import { useRef } from "react";
import { ProductsResponse } from "../../shared/product";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch<ProductsResponse>(
    "https://dummyjson.com/products?limit=200",
    {}
  );
  const bottomRef = useRef<HTMLDivElement>(null);
  if (error) return <h1>Error occured | Please try again</h1>;
  if (pending) return <h1>Loading | Please wait</h1>;
  function handleScrollToBottom(): void {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleScrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>

      <ol>
        {data &&
          data.products.map((item) => <li key={item.id}>{item.title}</li>)}
      </ol>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <h3>This is the bottom of the page.</h3>
      <div ref={bottomRef}></div>
    </div>
  );
}
