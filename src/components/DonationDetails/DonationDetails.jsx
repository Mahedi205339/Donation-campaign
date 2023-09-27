import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from "react-router-dom";
import { getStoredDonation, saveDonation } from '../../Utilities/localstorage';

const DonationDetails = () => {


    const { id } = useParams()


    const idInt = parseInt(id)

    const donations = useLoaderData();

    const findDonation = donations.find(donation => donation.id === idInt)


    console.log(findDonation)

    const handleAddToDonation = () => {
        saveDonation(idInt)
        toast('You have donate successfully')

        console.log(findDonation)
    }


    return (
        <div className="my-3">
            <div>
                <div className="">
                    <img className="w-full" src={findDonation.picture} alt="" />
                </div>
                <div className="w-full mx-auto lg:w-[1280px] bg-[#0b0b0b80] p-4 lg:p-6 lg:-mt-[105px] md:absolute md:-mt-[90px] lg:absolute ">
                    <button style={{ background: findDonation.text_button_bg }} onClick={handleAddToDonation} className="w-40 px-6 py-4 rounded-lg  text-white font-bold">Donate ${findDonation.price}</button>
                </div>
            </div>
            <div className="my-4">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold">{findDonation.title}</h2>
                <p className="text-gray-500 mt-2">{findDonation.description
                }</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;