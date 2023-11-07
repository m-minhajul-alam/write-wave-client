import Auther from "../components/Auther";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import NewsletterSignup from "../components/NewsLetterSignup";
import RecentBlog from "../components/RecentBlog";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedBlogs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <RecentBlog
                loadedBlogs={loadedBlogs}
            ></RecentBlog>
            <Auther></Auther>
            <FAQ></FAQ>
            <NewsletterSignup></NewsletterSignup>
            <Footer></Footer>
        </div>
    );
};


export default Home;