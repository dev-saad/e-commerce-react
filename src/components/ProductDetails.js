import { PlayForWorkRounded } from "@material-ui/icons";

const ProductDetails = () => {
  return (
    <div className="p-8">
      <div>
        <div className="w-full flex justify-evenly items-center gap-20 flex-col md:flex-row">
          <div className="max-w-lg">
            <h2 className="text-5xl font-semibold text-primary leading-tight">
              Spring/Summer Vibes
            </h2>
            <p className="text-secondary font-medium text-lg my-5">
              Casual line, Short design, 100% suede leather. Backstitched elbow
              patch
            </p>
            <img
              src="https://images.asos-media.com/products/asos-design-extreme-oversized-sweatshirt-in-washed-yellow/21481984-1-buckthornbrown?$XXL$&wid=513&fit=constrain"
              alt=""
            />
          </div>
          <div className="max-w-sm">
            <img
              className="w-full rounded-t-full"
              src="https://img.guess.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_533,q_auto,w_400/c_pad,h_533,w_400/v1/NA/Style/ECOMM/M1GL01R81M2-F1W2?pgw=1"
              alt=""
            />
            <p className="text-secondary font-medium text-lg my-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              repellendus inventore repudiandae ex eos, soluta, nam recusandae
              tempore sit excepturi veritatis, suscipit consectetur in ipsa
              eveniet commodi blanditiis hic deserunt?
            </p>
            <button className="px-3 py-1 border border-yellow-600 flex justify-center items-center font-medium">
              <span className="block text-tertiary leading-none">Explore</span>
              <PlayForWorkRounded className="transform -rotate-90 ml-1 text-tertiary" />
            </button>
          </div>
        </div>
        <div className="my-28 w-full flex justify-evenly items-center gap-20 flex-col-reverse md:flex-row">
          <div className="max-w-lg">
            <h2 className="text-5xl font-semibold text-primary leading-tight">
              An Industrial Take on Streetwear
            </h2>
            <p className="text-secondary font-medium text-lg my-9">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, cumque.
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              voluptate veniam, in dolore quod perferendis atque impedit ad
              earum corporis hic ducimus aut id temporibus reprehenderit debitis
              minima? Et, saepe.
            </p>
            <button className="px-3 py-1 border border-yellow-600 flex justify-center items-center font-medium">
              <span className="block text-tertiary leading-none">
                Shope Now
              </span>
              <PlayForWorkRounded className="transform -rotate-90 ml-1 text-tertiary" />
            </button>
          </div>
          <img
            className="max-w-lg"
            src="https://sayhappy.vn/wp-content/uploads/2020/07/be-v%C3%A0-n%C3%A2u.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
