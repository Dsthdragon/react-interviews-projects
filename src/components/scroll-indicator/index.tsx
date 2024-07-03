import { useCallback, useEffect, useState } from "react";
import { Product } from "../../shared/product";
import "./scroll.css";

interface Props {
  url: string;
}
export default function ScrollIndicator({ url }: Props) {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const fetchData = useCallback(async (getUrl: string) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data && data.products) {
        setData(data.products);
      }
    } catch (e) {
      let msg = "Something Went Wrong!";
      if (e instanceof Error) {
        msg = e.message;
      }
      setErrorMessage(msg);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchData(url);
  }, [url, fetchData]);

  const handleScrollPercentage = useCallback(() => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [handleScrollPercentage]);
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.map((dataItem) => <p>{dataItem.title}</p>)}
      </div>
    </div>
  );
}
