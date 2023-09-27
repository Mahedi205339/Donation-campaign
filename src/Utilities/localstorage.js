
const getStoredDonation = ()=>{
    const storedDonation =localStorage.getItem('give-donation');
    if(storedDonation){
        return JSON.parse(storedDonation); 
    }
    return [];
}


const saveDonation = id => {
const storedDonation = getStoredDonation() ;
    const exists = storedDonation.find(donationId => donationId === id) ;
    if(!exists){
        storedDonation.push(id);
        localStorage.setItem('give-donation', JSON.stringify(storedDonation))
    }

}

export { saveDonation  ,getStoredDonation}
