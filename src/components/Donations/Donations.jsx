import Donation from "../Donation/Donation";


const Donations = ({donations}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  md:gap-6 lg:gap-10">
            
           {
            donations?.map(donation => <Donation donation={donation} key={donation.id}></Donation> )
           }
        </div>
    );
};

export default Donations;