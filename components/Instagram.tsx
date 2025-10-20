'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Instagram() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=1000&fit=crop',
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    return diff;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
      <div style={{ maxWidth: '124rem', padding: '4rem 1rem', margin: '0 auto', width: '100%' }}>
        <h1 style={{
          padding: '1rem 0',
          fontSize: '3.5rem',
          textAlign: 'center',
          color: 'white',
          marginBottom: '2rem'
        }}>
          Featured Gallery
        </h1>

        <div style={{
          height: '52rem',
          padding: '2rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {images.map((img, index) => {
              const position = getSlidePosition(index);
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    width: '37rem',
                    height: '42rem',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: `translateX(${position * 40}rem) scale(${isActive ? 1.15 : 1})`,
                    opacity: Math.abs(position) > 2 ? 0 : (isActive ? 1 : 0.5),
                    zIndex: isActive ? 10 : Math.abs(position) > 2 ? 0 : 5 - Math.abs(position),
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '2rem',
                      backgroundImage: `url(${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      boxShadow: isActive ? '0 20px 50px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          position: 'relative',
          bottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <button
            onClick={prevSlide}
            style={{
              background: 'white',
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 8px 24px rgba(18, 28, 53, 0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <ChevronLeft size={24} color="#222224" />
          </button>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '0.8rem',
                  height: '0.8rem',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: index === currentIndex ? '#6366f1' : 'rgba(255, 255, 255, 0.5)',
                  transition: 'all 0.3s',
                  boxShadow: '0px 8px 24px rgba(18, 28, 53, 0.1)'
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            style={{
              background: 'white',
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 8px 24px rgba(18, 28, 53, 0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <ChevronRight size={24} color="#222224" />
          </button>
        </div>
      </div>
    </div>
  );
}