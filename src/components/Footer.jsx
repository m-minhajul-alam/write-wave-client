import { FaFacebook, FaTwitter, FaYoutube, } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer data-aos="fade-up" data-aos-duration="1000" className="bg-neutral text-white rounded-t-xl">
            <div className="max-w-6xl w-[90%] mx-auto py-10 flex flex-col md:flex-row text-center md:text-start space-y-4 justify-between items-center">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-primary text-3xl font-bold mb-3">
                        <span>Write<span className="text-secondary">Wave</span></span></p>
                    <p>Unlock Your Creativity,<br /> Share Your Stories.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h3 className="footer-title text-white">Follow Us On</h3>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/"><FaFacebook className='text-2xl'></FaFacebook></a>
                        <a href="https://www.twitter.com/"><FaTwitter className='text-2xl'></FaTwitter></a>
                        <a href="https://www.youtube.com/"><FaYoutube className='text-2xl'></FaYoutube></a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h3 className="footer-title">Downloade On</h3>
                    <div>
                        <a href="https://www.facebook.com/"><img className='w-28 ' src="https://i.ibb.co/F6QTC3X/android.png" alt="" /></a>
                        <a href="https://www.facebook.com/"><img className='w-28 ' src="https://i.ibb.co/wNTdM0v/ios.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;