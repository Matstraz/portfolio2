import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImageCarouselZoom({ imagesData }) {
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={2250}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
        className="w-full"
      >
        {imagesData.map((obj, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center "
          >
            <Zoom>
              <img
                src={obj.image}
                style={{ maxHeight: "400px", width: "auto" }}
                className="px-6"
                alt="pic"
              />
            </Zoom>
            {obj.links}
          </div>
        ))}
      </Carousel>
    </>
  );
}
