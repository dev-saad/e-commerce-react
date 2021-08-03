import {
  AttachMoneyOutlined,
  LocalAtmOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
} from "@material-ui/icons";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between items-center gap-5 w-5/6 border-t border-b border-gray-300 py-20 flex-col flex-wrap md:flex-nowrap sm:flex-row">
        <ServicesItem
          Icon={LocalShippingOutlined}
          title={"Free Shipping"}
          describe={"International shipping available for all orders over $75"}
        />
        <ServicesItem
          Icon={LocalAtmOutlined}
          title={"Free Shipping"}
          describe={"International shipping available for all orders over $75"}
        />
        <ServicesItem
          Icon={AttachMoneyOutlined}
          title={"Free Shipping"}
          describe={"International shipping available for all orders over $75"}
        />
        <ServicesItem
          Icon={PaymentOutlined}
          title={"Free Shipping"}
          describe={"International shipping available for all orders over $75"}
        />
      </div>
    </div>
  );
};

export default Services;
