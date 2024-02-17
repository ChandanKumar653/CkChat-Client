import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#0e0e0f] w-full py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            author="John Doe"
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit eget."
          />
          <TestimonialCard
            author="Jane Smith"
            quote="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          {/* Add more TestimonialCard components for additional testimonials */}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ author, quote }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-gray-800">{quote}</p>
      <p className="text-gray-600 mt-4">- {author}</p>
    </div>
  );
};

export default Testimonials;
