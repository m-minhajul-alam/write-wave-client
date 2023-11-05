import { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail('');
    };

    return (
        <div className="bg-gradient-to-tr from-primary to-secondary h-96 flex items-center justify-center rounded-xl my-3">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-primary text-center mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-center mb-4">Stay updated with our latest blogs and news. Subscribe now!</p>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Your Email"
                        className="bg-gray-100 rounded-lg p-3 focus:outline-none"
                    />
                    <button type="submit" className="bg-gradient-to-tr from-primary to-secondary text-white font-semibold py-2 rounded-lg">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterSignup;