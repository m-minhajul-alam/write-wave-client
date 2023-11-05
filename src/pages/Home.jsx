import Auther from "../components/Auther";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import NewsletterSignup from "../components/NewsLetterSignup";
import RecentBlog from "../components/RecentBlog";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Auther></Auther>
            <FAQ></FAQ>
            <NewsletterSignup></NewsletterSignup>
            <Footer></Footer>
        </div>
    );
};


export default Home;