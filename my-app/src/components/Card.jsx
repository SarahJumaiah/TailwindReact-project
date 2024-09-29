function Card(props) {
  return (
    <div className="overflow-hidden">
      <img src={props.image} alt={props.title} className="w-full h-58 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{props.title}</h3>
        <p className="text-gray-600 mb-4">{props.description}</p>
        <p className="text-brown-light font-semibold hover:underline">
          {props.linkText} →
        </p>
      </div>
    </div>
  );
}

export default Card;
