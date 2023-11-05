const NewsletterSignup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = (form.get('name'));
        const email = (form.get('email'));
        const user = { name, email };
        console.log(user);
    };

    return (
        <div className="h-96 flex flex-col md:flex-row items-center justify-between rounded-xl gap-7 my-3 max-w-6xl mx-auto">
            <div className="lg:flex-1 space-y-5 text-center lg:text-right">
                <h1 className="text-5xl font-bold text-primary">Subscribe to Our <span className="text-secondary">Newsletter</span></h1>
                <p className="text-base font-medium">Our newsletter is your direct ticket to a world of knowledge, inspiration, and community. By subscribing, you will receive regular updates on trending topics, featured authors, and exclusive content. Don not miss out on this opportunity to connect with our growing community of writers, bloggers, and readers. Subscribe today and embark on a journey of discovery through our carefully curated newsletter</p>
            </div>

            <div className="lg:flex-1 bg-gradient-to-tr from-primary to-secondary p-8 rounded-lg shadow-md w-96">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="bg-gray-100 rounded-lg p-3 focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="bg-gray-100 rounded-lg p-3 focus:outline-none"
                        required
                    />
                    <button type="submit" className="btn btn-secondary text-white">
                        Subscribe
                    </button>
                </form>
            </div>

        </div>
    );
};

export default NewsletterSignup;