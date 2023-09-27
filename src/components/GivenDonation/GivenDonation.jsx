
import { Link } from "react-router-dom";

const GivenDonation = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, price } = donation
    return (
        <div className="my-5">

            <div style={{ background: card_bg }} className="card card-compact flex flex-row h-[212px] w-[400px] md:w-[550px]">
                <div>
                    <figure><img className="h-[212px] mx-auto" src={picture} alt="Shoes" /></figure>
                </div>
                <div>
                    <button style={{ background: category_bg, color: text_button_bg }} className="w-15 px-2 my-2 ml-6 py-1 rounded font-bold">{category}</button>
                    <h3 style={{ color: text_button_bg }} className="text-lg font-semibold mb-2 ml-8">{title}</h3>
                    <p style={{ color: text_button_bg }} className="w-15 px-2 ml-6 rounded font-bold">$ {price}</p>
                    <Link to={`/donations/${id}`}>
                        <button style={{ background: text_button_bg }} className="w-30 px-4 py-3 ml-6 my-3 rounded-lg  text-white font-bold">Veiw Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default GivenDonation;