import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utilities/localstorage";
import GivenDonation from "../../components/GivenDonation/GivenDonation";


const Donation = () => {
    const donations = useLoaderData();

    const [noFound, setNoFound] = useState("")

    const [givenDonations, setGivenDonations] = useState([])

    useEffect(() => {
        const storedDonationIDs = getStoredDonation();
        if (donations.length > 0) {
            const donationed = [];

            for (const id of storedDonationIDs) {
                const donation = donations.find(donation => donation.id === id)
                if (donation) {
                    donationed.push(donation)
                }
            }
            setGivenDonations(donationed)

        } else {
            setNoFound("No Data Found")
        }
    }, [])

    // console.log(givenDonations.length)



    return (
        <div>
            {
                noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        {
                            givenDonations?.map(donation =><GivenDonation donation={donation} key={donation.id}></GivenDonation> )
                        }
                    </div>
                </div>
            }
        </div>
    )
};

export default Donation;