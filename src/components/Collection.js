import { PlayForWorkRounded } from "@material-ui/icons";

const Collection = () => {
  return (
    <div className="px-8 py-32">
      <div className="w-full flex justify-evenly items-center gap-20 flex-col md:flex-row">
        <div className="max-w-lg h-full">
          <img
            className="w-full h-full"
            src="https://img.guess.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_666,q_auto,w_500/c_pad,h_666,w_500/v1/NA/Style/ECOMM/M92XN1R34V0-OWHI?pgw=1"
            alt=""
          />
        </div>
        <div className="w-96 h-full flex justify-between items-center flex-col">
          <p className="text-xl font-medium text-primary">New Collection</p>
          <h3 className="font-bold text-4xl text-primary my-3 text-center">
            Men's Casual Jacket
          </h3>
          <div className="w-full">
            <img
              className="w-full"
              src="https://static.fashionbeans.com/wp-content/uploads/2019/05/hotlist-s19-pieces-overshirt.jpg"
              alt=""
            />
          </div>
          <button className="px-3 py-1 border border-yellow-600 flex justify-center items-center font-medium mt-5">
            <span className="block text-tertiary leading-none">
              Shop Collection
            </span>
            <PlayForWorkRounded className="transform -rotate-90 ml-1 text-tertiary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
