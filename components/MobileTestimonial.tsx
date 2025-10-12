"use client";

import React, { useState } from 'react';
import { Star, User } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

const MobileTestimonial: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [reviewText, setReviewText] = useState<string>('');

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Robert Karmazov',
      rating: 4,
      comment: 'Auctor integer enim vitae tempus ultricies officiis nam. Sed duis mattis urta lacus etiam. Aliquam!',
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Robert Karmazov',
      rating: 4,
      comment: 'Auctor integer enim vitae tempus ultricies officiis nam. Sed duis mattis urta lacus etiam. Aliquam!',
      date: '2 days ago'
    },
    {
      id: 3,
      name: 'Robert Karmazov',
      rating: 4,
      comment: 'Auctor integer enim vitae tempus ultricies officiis nam. Sed duis mattis urta lacus etiam. Aliquam!',
      date: '2 days ago'
    }
  ];

  const ratingDistribution = [
    { stars: 5, count: 989, label: 'FIVE' },
    { stars: 4, count: 4500, label: 'FOUR' },
    { stars: 3, count: 50, label: 'THREE' },
    { stars: 2, count: 16, label: 'TWO' },
    { stars: 1, count: 8, label: 'ONE' }
  ];

  const totalReviews = ratingDistribution.reduce((sum, item) => sum + item.count, 0);
  const averageRating = 4.3;

  const renderStars = (rating: number, interactive: boolean = false, size: string = 'w-5 h-5') => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            onClick={() => interactive && setSelectedRating(star)}
          />
        ))}
      </div>
    );
  };

  const handleSubmit = () => {
    console.log({ name, email, rating: selectedRating, reviewText });
    // Reset values
    setName('');
    setEmail('');
    setSelectedRating(0);
    setReviewText('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Rating Distribution */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
              <div className="flex items-center gap-2 mb-1">
                {renderStars(5, false, 'w-6 h-6')}
              </div>
              <div className="text-sm text-gray-500">{totalReviews.toLocaleString()} Ratings</div>
            </div>

            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="text-xs font-medium text-gray-600 w-12">{item.label}</div>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(item.count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <div className="text-sm text-gray-600 w-16 text-right">
                    {item.count >= 1000 ? `${(item.count / 1000).toFixed(1)}k` : item.count}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add a Review */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Add a Review</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add Your Rating *
                </label>
                {renderStars(selectedRating, true, 'w-8 h-8')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Write Your Review *
                </label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all resize-none"
                  rows={4}
                  placeholder="Share your experience..."
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-lg transition-colors duration-200"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>

        {/* Recent Feedbacks */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Feedbacks</h3>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-7 h-7 text-gray-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section Info */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Recent Feedback with add Review
              </h3>
              <p className="text-gray-600">
                Display recent feedback and allow users to add new reviews...{' '}
                <button className="text-gray-900 font-semibold hover:underline">more</button>
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">P</span>
                </div>
                <span className="font-semibold text-gray-900">Pagedone</span>
              </div>
            </div>
            <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors">
              Visit site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTestimonial;