import { Box } from "@mui/material";
// import { useRef } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";

interface LazyImageProps {
  width: string;
  height: string;
  src: string;
  alt: string;
}

const LazyImage = (props: LazyImageProps) => {
  const { width, height, src, alt } = props;

  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      wrapperProps={{ style: { width, height } }}
      style={{
        width: width,
        height: height,
        objectFit: "cover",
      }}
    />
  );
};

export default LazyImage;
