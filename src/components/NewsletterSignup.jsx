import { motion } from 'framer-motion';
import toast from "react-hot-toast";

const NewsletterSignup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const user = { name, email };
        console.log(user);
        e.target.reset();
        toast.success("Thank you for subscribing to our newsletter");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const formVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 3 } },
    };

    return (
        <motion.div
            className="md:h-96 flex flex-col md:flex-row items-center justify-between rounded-xl gap-7 my-3 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="lg:flex-1 space-y-5 text-center lg:text-right">
                <motion.h1
                    className="text-2xl md:text-5xl font-bold text-primary"
                >
                    Subscribe to Our{' '}
                    <span className="text-secondary">Newsletter</span>
                </motion.h1>
                <motion.p className="text-sm md:text-base font-medium">
                    Our newsletter is your direct ticket to a world of
                    knowledge, inspiration, and community. By subscribing, you
                    will receive regular updates on trending topics, featured
                    authors, and exclusive content. Don not miss out on this
                    opportunity to connect with our growing community of writers,
                    bloggers, and readers. Subscribe today and embark on a
                    journey of discovery through our carefully curated newsletter.
                </motion.p>
            </div>

            <motion.div
                className="lg:flex-1 bg-gradient-to-tr from-primary to-secondary p-8 rounded-lg shadow-md"
                variants={formVariants}
                initial="hidden"
                animate="visible"
            >
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <motion.input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="bg-gray-100 rounded-lg p-3 focus:outline-none"
                        required
                    />
                    <motion.input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="bg-gray-100 rounded-lg p-3 focus:outline-none"
                        required
                    />
                    <motion.input
                        type="submit"
                        className="btn btn-secondary text-white"
                        value="Subscribe"
                    />
                </form>
            </motion.div>
        </motion.div>
    );
};

export default NewsletterSignup;
