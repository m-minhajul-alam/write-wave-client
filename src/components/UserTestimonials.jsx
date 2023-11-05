const UserTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      testimonial: 'I love this platform! It\'s a great place to share my thoughts and connect with others.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      testimonial: 'The community here is fantastic. I\'ve learned so much from fellow bloggers.',
    },
  ];

  return (
    <div className="bg-gradient-to-t from-purple-500 to-indigo-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">User Testimonials</h2>
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-gray-600">{testimonial.testimonial}</p>
              <p className="text-blue-500 font-semibold mt-2">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTestimonials;
