const FAQ = () => {
    return (
        <div className="my-4">
            <h1 className="text-4xl font-bold text-center text-primary mb-3">FAQs</h1>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-b-0 border-primary">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What is the purpose of this platform?
                    </div>
                    <div className="collapse-content">
                        <p>Our platform is designed to provide a space for writers and bloggers to publish and share their content across various categories. It is a community that fosters creativity, collaboration, and knowledge sharing.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-primary">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How do I create an account and start publishing my blogs?
                    </div>
                    <div className="collapse-content">
                        <p> Creating an account is easy! Click on the Singup button, fill in your details, and you wll have access to your personalized dashboard where you can start writing and publishing your blogs in just a few clicks.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-b-0 border-primary">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Can I publish blogs in multiple categories?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can publish blogs in multiple categories. We encourage diversity and allow you to share your thoughts on various topics. Each blog can be assigned to one or more relevant categories.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-primary">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Is my content protected on this platform?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, your content is protected. We respect your intellectual property rights, and you retain ownership of the content you publish. Please review our terms and policies for more details.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-primary">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How can I connect with other writers and readers on the platform?
                    </div>
                    <div className="collapse-content">
                        <p>You can connect with fellow writers and readers through comments, likes, and by following their profiles. Engage in discussions, share your thoughts, and build a network of like-minded individuals passionate about writing and blogging.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;