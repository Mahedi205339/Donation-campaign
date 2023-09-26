import { Link } from "react-router-dom";

const DonationCart = ({ donation }) => {
    const {id, picture, title, category, category_bg, card_bg, text_button_bg } = donation
    return (
        <div>
            <Link to={`/donations/${id}`}>
                <div style={{ background: card_bg }} className="card card-compact w-[312px]">
                    <figure><img className="w-[312px] mx-auto" src={picture} alt="Shoes" /></figure>
                    <div>
                        <button style={{ background: category_bg, color: text_button_bg }} className="w-15 px-2 my-4 ml-6 py-1 rounded font-bold">{category}</button>
                        <h3 style={{ color: text_button_bg }} className="text-lg font-semibold mb-4 ml-8">{title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCart;