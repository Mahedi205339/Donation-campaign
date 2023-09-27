
const Banner = () => {
    return (
        <div className="h-[60vh] flex justify-center items-center">
           <div>
            <h1 className="text-base md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className="flex justify-center items-center lg:mt-10">
            <input className="text-center md:h-10 my-4 border md:my-6 md:w-72 h-8 lg:h-12" type="text" />
            <button className="font-bold bg-[#FF444A]  rounded-r-lg py-1 md:py-3 px-3 text-white">Search</button>
            </div>
           </div>
        </div>
    );
};

export default Banner;