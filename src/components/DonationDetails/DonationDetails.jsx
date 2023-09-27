
// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {

    // const [donation, setDonation] = useState();

    const { id } = useParams()
    // console.log(id);

    const idInt = parseInt(id)

    const donations = useLoaderData();
    // console.log(donations)



    // useEffect(() => {
    const findDonation = donations.find(donation => donation.id === idInt)

    // setDonation(findDonation)
    console.log(findDonation)

    // }, [idInt, donations])

    // console.log(donation)




    return (
        <div className="my-3">
            <div>
                <div className="">
                    <img className="w-full" src={findDonation.picture} alt="" />
                </div>
                <div className="w-full mx-auto lg:w-[1280px] bg-[#0b0b0b80] p-4 lg:p-6 lg:-mt-[105px] md:absolute md:-mt-[90px] lg:absolute ">
                    <button className="w-40 px-6 py-4 rounded-lg bg-[#FF444A] text-white font-bold">Donate ${findDonation.price}</button>
                </div>
            </div>
            <div className="my-4">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold">{findDonation.title}</h2>
                <p className="text-gray-500 mt-2">{findDonation.description
                }</p>
            </div>
        </div>
    );
};

export default DonationDetails;