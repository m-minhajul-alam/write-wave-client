const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src="https://i.ibb.co/3W1Qs2K/error-removebg.png" alt="" />
            <div className="text-2xl text-gray-600">Page Not Found</div>
            <button
                onClick={() => window.history.back()}
                className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
                Go Back
            </button>
        </div>
    );
};

export default Error;