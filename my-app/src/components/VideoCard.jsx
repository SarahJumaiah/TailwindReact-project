function VideoCard({ image, title, description }) {
    return (
      <div className="flex mb-6">
        <img src={image} alt={title} className="w-24 h-24 object-cover mr-4" />
        <div>
          <h4 className="font-bold text-sm mb-1">{title}</h4>
          <p className="text-gray-500 text-xs">{description}</p>
        </div>
      </div>
    );
  }
  
  export default VideoCard;