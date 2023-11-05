import Auther from "../components/Auther";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import NewsletterSignup from "../components/NewsLetterSignup";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Auther></Auther>
            <FAQ></FAQ>
            <NewsletterSignup></NewsletterSignup>
            <Footer></Footer>
        </div>
    );
};

export default Home;