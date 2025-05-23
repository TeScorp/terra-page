import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});


const ReviewCard = ({ content, imgSrc, name,  }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3 text-yellow-300 text-[18px]">
        {ratings.map(({ icon, style }, key) => (
          <span key={key} className="material-symbols-rounded"
          style={style}>
            {icon}
          </span>
        ))}
      </div>    

      <p className="text-zinc-400 mb-8">
        {content}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
            <img 
            src={imgSrc}            
            alt={name}
            width={44}
            height={44}
            loading='lazy' 
            className="img-cover" />
        </figure>

        <div>
            <p className="">
                {name}
            </p>

        </div>
      </div>
    </div>
  );
};

ReviewCard.protoTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

};

export default ReviewCard;
