

const FeaturedCard = ({ icon, title, description }) => {
  return (
    <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
               
              {icon}
              <h3 className="font-bold text-2xl">{title}</h3>
              <p className="text-slate-500">
                {description}
              </p>
            </div>
  );
};

export default FeaturedCard;