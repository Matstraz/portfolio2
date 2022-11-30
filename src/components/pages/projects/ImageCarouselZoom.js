import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImageCarouselZoom({ imagesData }) {
  return (
    <>
      <Carousel
        showThumbs={true}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
      >
        {imagesData.map((obj, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center "
          >
            <Zoom>
              <img
                src={obj.image}
                style={{ maxHeight: "330px", width: "auto" }}
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
