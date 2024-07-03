import { useCallback, useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
interface Props {
  url: string;
  limit: number;
  page: number;
}

interface ImageSlide {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}
export default function ImageSlider({ url, limit, page }: Props) {
  const [images, setImages] = useState<ImageSlide[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImages = useCallback(async (getUrl: string) =>{
    
    try {
      setLoading(true);
      setErrorMsg(null);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
      }
      setLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMsg(e.message);
      } else {
        setErrorMsg("Something Went Wrong");
      }
      setLoading(false);
    }
  }, [page, limit])
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, fetchImages]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occured! {errorMsg}</div>;
  }
  function handlePrevious(): void {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext(): void {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      ></BsArrowLeftCircleFill>
      {images &&
        images.length > 0 &&
        images.map((imageItem, index) => (
          <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        ))}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      ></BsArrowRightCircleFill>
      <span className="circle-indicators">
        {images &&
          images.length > 0 &&
          images.map((_, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "current-indicator inactive-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
      </span>
    </div>
  );
}
