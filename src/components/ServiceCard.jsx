const ServiceCard = ({ imgURL, label, sublabel }) => {
  return (
    <div className="flex">
      <div>
        <img src={imgURL} alt="services" width={300} height={24} />
      </div>
      <div className="absolute text-white bottom-[15%] pl-28">
        <h3>{label}</h3>
        <a href="#prices">{sublabel}</a>
      </div>
    </div>
  );
};
export default ServiceCard;
