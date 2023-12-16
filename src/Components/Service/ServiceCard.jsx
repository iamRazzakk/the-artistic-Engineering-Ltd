

const ServiceCard = ({ service }) => {
    const { name, img, price } = service
    // console.log(name);
    return (
        <div>
            <div className="card card-compact bg-black text-white shadow-xl">
                <figure><img className="h-56 w-full object-cover" src={img} alt="Img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;