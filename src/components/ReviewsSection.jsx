import { Star } from 'lucide-react';

const ReviewsSection = ({ darkMode }) => {
  const reviews = [
    {
      name: "Harshad Patel",
      company: "Appinitial Technologies",
      role: "Project Manager",
      content: "Exceptional work on our e-commerce platform. The integration with AI recommendations increased our sales by 40%.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
      name: "Mike Yoo",
      company: "RBC",
      role: "Project Managment",
      content: "Outstanding Investment management system. The investment related features are exactly what we needed.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
      name: "Chris",
      company: "Full Stack resources",
      role: "Project Manager",
      content: "The 360 view integration transformed our property listings. Highly recommended!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/19.jpg"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Client <span className={`${
              darkMode ? 'text-cyan-400' : 'text-indigo-600'
            }`}>Reviews</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            What clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50'
                  : 'bg-white/50 border border-gray-200/50 hover:border-indigo-300/50'
              } backdrop-blur-sm`}
            >
              <div className="flex items-center space-x-4 mb-4">
                 <img
                    alt="testimonial"
                    src={review.avatar}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                <div>
                  <h4 className={`font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {review.name}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {review.role} at {review.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      darkMode ? 'text-yellow-400' : 'text-yellow-500'
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className={`${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;