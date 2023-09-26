import DonationCart from "../DonationCart/DonationCart";



const Donations = ({donations}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  md:gap-6 lg:gap-16">
            
           {
            donations?.map(donation => <DonationCart donation={donation} key={donation.id}></DonationCart> )
           }
        </div>
    );
};

export default Donations;