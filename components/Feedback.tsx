"use client";

import React from "react";
import { Star, User } from "lucide-react";
import Image from "next/image";
import beauty from "@/public/beauty.jpg";
import GoodLuck from "@/public/good-luck (1).svg";
import LoveChat from "@/public/love-chat.svg";
import Present from "@/public/present.svg";
import HeartLoveEmoji from "@/public/heart-love-emoji.svg";
import Heart1 from "@/public/heart (1).svg";
import Heart2 from "@/public/heart.svg";
import Stars3 from "@/public/stars (3).svg";
import Stars2 from "@/public/stars (2).svg";
import Stars1 from "@/public/stars (1).svg";
import Title from "./Title";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

interface RecentFeedbackProps {
  reviews?: Review[];
  titleStart?: string;
  titleHighlight?: string;
  titleEnd?: string;
  className?: string;
}

const Feedback: React.FC<RecentFeedbackProps> = ({
  reviews = [],
  titleStart = "What ",
  titleHighlight = "Our Clients Say",
  titleEnd = "!",
  className = "",
}) => {
  // Default reviews with avatar images
  const defaultReviews: Review[] = [
    {
      id: 1,
      name: "Ruth Ben",
      rating: 4,
      comment: "Exceptional service and amazing quality products",
      date: "12 days ago",
      avatar: "beauty.jpg",
    },
    {
      id: 2,
      name: "Robert Karmazov",
      rating: 4,
      comment:
        "Auctor integer enim vitae tempus ultricies officiis nam. Sed duis mattis urta lacus etiam. Aliquam!",
      date: "2 days ago",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Outstanding experience from start to finish. Highly recommend!",
      date: "5 days ago",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
  ];

  const displayReviews = reviews.length > 0 ? reviews : defaultReviews;

  // Static scattered icons using your local SVGs with brand colors
  const scatteredIcons = [
    { src: GoodLuck, size: 40, top: "1%", left: "6%" },
    { src: Stars1, size: 36, top: "5%", left: "75%" },
    // { src: LoveChat, size: 42, top: "15%", left: "45%" },
    { src: Present, size: 38, top: "25%", left: "85%" },
    { src: HeartLoveEmoji, size: 40, top: "35%", left: "25%" },
    { src: Heart1, size: 36, top: "45%", left: "65%" },
    { src: Stars2, size: 38, top: "55%", left: "35%" },
    { src: Heart2, size: 36, top: "65%", left: "70%" },
    { src: Stars3, size: 34, top: "75%", left: "20%" },
    { src: GoodLuck, size: 38, top: "85%", left: "80%" },
    { src: Present, size: 32, top: "12%", left: "60%" },
    { src: LoveChat, size: 40, top: '40%', left: '10%' },
    { src: Heart1, size: 34, top: "70%", left: "50%" },
    { src: Stars1, size: 36, top: "20%", left: "90%" },
    { src: HeartLoveEmoji, size: 38, top: "50%", left: "5%" },
    { src: Stars2, size: 40, top: "30%", left: "55%" },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "fill-shop_light_green text-shop_light_green"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

 return (
    <div className="relative bg-white py-16 px-4 overflow-hidden">
      {/* Scattered Icons Background - Full Width */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {scatteredIcons.map((item, index) => {
          const { src, size, top, left } = item;
          return (
            <div
              key={index}
              className="absolute"
              style={{
                top,
                left,
                opacity: 0.3,
              }}
            >
              <Image
                src={src}
                alt=""
                width={size}
                height={size}
                priority={false}
              />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto ${className}`}>
        <p className="text-xs text-center text-gray-500 uppercase tracking-wider mb-2">Testimonial</p>
        <Title className="md:text-4xl text-2xl font-medium text-center py-2 mb-3.5">
          <span className="text-gray-900">{titleStart} </span>
          <span className="text-shop_light_green">{titleHighlight}</span>
          <span className="text-gray-900">{titleEnd}</span>
        </Title>        
        <div className="max-w-4xl mx-auto bg-transparent rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="space-y-6">
            {displayReviews.map((review) => (
              <div
                key={review.id}
                className="flex gap-4 pb-6 border-b border-gray-200 last:border-0"
              >
                <div className="flex-shrink-0">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-7 h-7 text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
