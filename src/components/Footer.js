import { PlayForWorkRounded } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="py-32 border-b border-gray-300 w-5/6 flex justify-between items-start gap-14 flex-col flex-wrap md:flex-nowrap sm:flex-row">
        <div className="max-w-xs min-w-min">
          <h2 className="font-medium text-3xl mb-8 text-primary">Rainbow</h2>
          <div className="children:block children:text-sm children:font-medium children:text-secondary children:mb-7">
            <span>3891 Ranchview Dr. Richardson California 62639</span>
            <span>+303 555-0105</span>
            <span>support@rainbow.com</span>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="font-medium text-xl mb-8 text-primary">FAQs</h3>
          <div
            className="children:block children:text-sm children:font-medium children:text-secondary children:mb-5
          children:cursor-pointer"
          >
            <span>Information</span>
            <span>Payment</span>
            <span>Shipping</span>
            <span>Returns</span>
            <span>Gift Card</span>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="font-medium text-xl mb-8 text-primary">Company</h3>
          <div className="children:block children:text-sm children:font-medium children:text-secondary children:mb-5 children:cursor-pointer">
            <span>Delivery</span>
            <span>Collection</span>
            <span>Our Journal</span>
            <span>Contact Us</span>
            <span>Careers</span>
          </div>
        </div>
        <div className="max-w-lg min-w-min mt-3">
          <h3 className="font-medium text-xl mb-5 text-primary">Newsletter</h3>
          <p className="text-sm font-medium text-secondary mb-5">
            Be the first to grt the latest news about trends promotions and much
            more
          </p>
          <form className="flex w-full justify-center items-center border-b border-gray-400">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-8 p-1 outline-none bg-transparent placeholder-gray-600"
              required
            />
            <button
              type="submit"
              className="flex h-8 justify-center items-center text-tertiary font-medium"
              onClick={(e) => e.preventDefault()}
            >
              Subscribe <PlayForWorkRounded className="transform -rotate-90" />
            </button>
          </form>
          <p className="text-sm font-medium text-secondary mt-5">
            By subscribing, you agree with agree with the&nbsp;
            <span className="text-primary font-medium underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-5/6 py-8">
        <span className="text-sm font-medium text-secondary">
          Developed by&nbsp;
          <a
            href="https://www.upwork.com/freelancers/~01c935744e5c90b842"
            target="_blank"
            rel="noreferrer"
            className="underline text-primary"
          >
            @saima
          </a>
        </span>
        <div className="flex children:flex justify-center items-center">
          <span className="text-sm font-medium text-secondary leading-none mb-auto">
            Accept For
          </span>
          <div className="children:w-8 children:h-4 children:object-contain children:flex children:justify-center children:items-center flex justify-center items-center">
            <img
              className="mx-3"
              src="https://www.gstatic.com/pay/images/logo_3x_v1.png"
              alt=""
            />
            <img
              src="https://www.mastercard.us/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg"
              alt=""
            />
            <img
              src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
