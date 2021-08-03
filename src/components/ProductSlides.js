import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import data from "../data/data";
import ProductCard from "./ProductCard";
import { useMeasure } from "react-use";

const ProductSlides = ({ user }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [translate, setTranslate] = useState();
  const [ref, { width }] = useMeasure();

  useEffect(() => {
    setTranslate((width + 56) * sliderIndex);
  }, [sliderIndex]);
  return (
    <div>
      <h2 className="font-bold text-primary text-5xl text-center mb-6">
        Our Fresh Product
      </h2>
      <div className="relatives flex items-center w-full py-10">
        <ArrowBackIosRounded
          className="transform -translate-y-1/2 text-secondary cursor-pointer "
          fontSize="large"
          onClick={() =>
            setSliderIndex(sliderIndex === 0 ? sliderIndex : sliderIndex - 1)
          }
        />
        <div className="w-full overflow-x-hidden">
          <div
            className="inline-flex children:mr-14"
            style={{
              transform: `translateX(${-translate}px)`,
              transition: "0.5s ease-out",
            }}
          >
            {data.properties.map((property) => (
              <div ref={ref} key={property._id} className="last:mr-0">
                <ProductCard
                  picture={property.picture}
                  price={property.price}
                  reviews={property.reviews}
                  description={property.description}
                  key={property._id}
                  id={property._id}
                  user={user}
                />
              </div>
            ))}
          </div>
        </div>
        <ArrowForwardIosRounded
          className="transform -translate-y-1/2  text-secondary cursor-pointer"
          fontSize="large"
          onClick={() =>
            setSliderIndex(
              sliderIndex === data.properties.length - 1
                ? sliderIndex
                : sliderIndex + 1
            )
          }
        />
      </div>
    </div>
  );
};

export default ProductSlides;
