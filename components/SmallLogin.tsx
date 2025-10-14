import React from 'react';

export default function SmallLogin() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-3">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden h-full max-h-screen flex flex-col">
        {/* Hero Images Section */}
        <div className="px-5 py-6 flex-1 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Large Left Image - Woman in olive/tan dress */}
              <div className="col-span-1 row-span-2">
                <div className="relative rounded-full overflow-hidden aspect-[3/4] bg-stone-200">
                  <img 
                    src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop" 
                    alt="Woman in elegant dress"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Top Right Circle - Woman in brown blazer with hat */}
              <div className="col-span-1">
                <div className="relative rounded-full overflow-hidden aspect-square bg-stone-200">
                  <img 
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop" 
                    alt="Woman in blazer and hat"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Bottom Right Circle - Woman in animal print with sunglasses */}
              <div className="col-span-1">
                <div className="relative rounded-full overflow-hidden aspect-square bg-stone-200">
                  <img 
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop" 
                    alt="Woman in sunglasses"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Asterisk */}
            <div className="flex justify-start mb-4">
              <span className="text-2xl text-gray-800">*</span>
            </div>

            {/* Text Content */}
            <div className="text-center mb-5">
              <h1 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                The Fashion App That<br />Makes You Look Your Best
              </h1>
              <p className="text-gray-500 text-xs leading-relaxed px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2.5">
            <button className="w-full bg-amber-900 hover:bg-amber-800 text-white font-medium py-3.5 px-6 rounded-full transition-colors duration-200 shadow-lg text-sm">
              Let&rsquo;s Get Started
            </button>
            <button className="w-full bg-transparent text-gray-700 font-medium py-3.5 px-6 rounded-full transition-colors duration-200 text-sm">
              Already have an account? <span className="text-amber-900 font-semibold">Sign In</span>
            </button>
          </div>
        </div>

        {/* Bottom Safe Area */}
        <div className="h-4"></div>
      </div>
    </div>
  );
}