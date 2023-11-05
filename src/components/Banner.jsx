import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="carousel w-full h-56 md:h-[400px] rounded-b-xl">
            {/* slider 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/kqrp8ng/Banner-1.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold">Explore. Create. Share.</h1>
                            <p className="mb-2 md:mb-5 text-xs md:text-base">Welcome to our vibrant blog community! Our platform is your canvas to Explore, Create, and Share your stories with the world.</p>
                            <Link><button className="btn btn-primary btn-xs md:btn-md text-neutral-content">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                </div>
            </div>
            {/* slider 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/Y0tTNNg/Banner-2.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold">Explore. Create. Share.</h1>
                            <p className="mb-2 md:mb-5 text-xs md:text-base">Welcome to our vibrant blog community! Our platform is your canvas to Explore, Create, and Share your stories with the world.</p>
                            <Link><button className="btn btn-primary btn-xs md:btn-md text-neutral-content">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                </div>
            </div>
            {/* slider 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/wCtRB0T/Banner-3.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold">Explore. Create. Share.</h1>
                            <p className="mb-2 md:mb-5 text-xs md:text-base">Welcome to our vibrant blog community! Our platform is your canvas to Explore, Create, and Share your stories with the world.</p>
                            <Link><button className="btn btn-primary btn-xs md:btn-md text-neutral-content">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;