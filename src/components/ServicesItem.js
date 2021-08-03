const ServicesItem = ({ Icon, title, describe }) => {
  return (
    <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row text-primary w-64 my-5">
      {Icon && <Icon className="text-3xl mr-3" />}
      <div className="flex flex-col justify-center items-center sm:items-start">
        <h6 className="font-bold text-lg mb-2">{title}</h6>
        <p className="font-medium text-sm text-secondary leading-7 text-center sm:text-left">
          {describe}
        </p>
      </div>
    </div>
  );
};

export default ServicesItem;
