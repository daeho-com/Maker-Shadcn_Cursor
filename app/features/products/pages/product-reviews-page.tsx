import { useParams } from "react-router";

export default function ProductReviewsPage() {
  const { productID } = useParams();

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      title: "Excellent Product",
      content: "This product exceeded my expectations. Highly recommended!",
      date: "2024-01-15"
    },
    {
      id: 2,
      author: "Jane Smith",
      rating: 4,
      title: "Great Value",
      content: "Good quality for the price. Would buy again.",
      date: "2024-01-10"
    },
    {
      id: 3,
      author: "Mike Johnson",
      rating: 3,
      title: "Decent Product",
      content: "It's okay, but there are some areas for improvement.",
      date: "2024-01-05"
    }
  ];

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Product Reviews
          </h1>
          <a
            href={`/products/${productID}/reviews/new`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Write Review
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Product ID: {productID}</h2>
            <p className="text-gray-600">Read what others are saying about this product</p>
          </div>

          {reviews.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {review.title}
                    </h3>
                    <div className="text-yellow-400 text-lg">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>By {review.author}</span>
                    <span className="mx-2">•</span>
                    <span>{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 