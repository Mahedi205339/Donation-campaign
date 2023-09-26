
const Donation = ({donation}) => {
    const {picture,title,category,category_bg,card_bg,text_button_bg} =donation
    return (
        <div>
            <div style={{background:card_bg}} className="card card-compact w-96">
                <figure><img className="w-80 lg:w-96 mx-auto" src={picture} alt="Shoes" /></figure>
                <div>
                    <button style={{background:category_bg ,color:text_button_bg}} className="w-15 px-2 my-6 ml-8 py-1 rounded font-bold">{category}</button>
                    <h3 style={{color:text_button_bg}} className="text-lg font-semibold mb-4 ml-8">{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default Donation;