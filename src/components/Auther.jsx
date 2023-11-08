import { motion } from 'framer-motion';

const Auther = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 3,
            },
        },
    };

    return (
        <motion.div
            className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="lg:flex-1">
                <img src="https://i.ibb.co/Wvw0Mb3/world.png" alt="" />
            </motion.div>
            <motion.div className="lg:flex-1 space-y-5 text-center lg:text-left">
                <motion.h1
                    className="text-2xl md:text-5xl font-bold text-primary"
                >
                    We have various{' '}
                    <span className="text-secondary">Authors</span> <br /> across
                    the <span className="text-secondary">World</span>
                </motion.h1>

                <motion.p className="text-xs md:text-base font-medium">
                    Our platform is a global community of diverse voices and
                    perspectives. We are proud to host a wide array of talented
                    authors from all corners of the world. Each author brings
                    their unique experiences and expertise to the table, making
                    our content rich, engaging, and truly global. Join us to
                    explore a treasure trove of stories, insights, and knowledge
                    shared by authors who bridge cultures and connect continents
                    through the power of words.
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Auther;
