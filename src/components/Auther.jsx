const Auther = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto">
            <div className="lg:flex-1">
                <img src="https://i.ibb.co/Wvw0Mb3/world.png" alt="" />
            </div>
            <div className="lg:flex-1 space-y-5 text-center lg:text-left">
                <h1 className="text-2xl md:text-5xl font-bold text-primary">We have various <span className="text-secondary">Authors</span> <br /> across the <span className="text-secondary">World</span></h1>
                <p className="text-xs md:text-base font-medium">Our platform is a global community of diverse voices and perspectives. We are proud to host a wide array of talented authors from all corners of the world. Each author brings their unique experiences and expertise to the table, making our content rich, engaging, and truly global. Join us to explore a treasure trove of stories, insights, and knowledge shared by authors who bridge cultures and connect continents through the power of words.</p>
            </div>
        </div>
    );
};

export default Auther;