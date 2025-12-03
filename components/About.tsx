import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14 bg-gray-100">
      <p className="text-xs text-gray-500">ABOUT US</p>
      <Title className="md:text-4xl text-2xl font-medium text-center py-4">
        Our
        <span className="text-emerald-600 pl-1.5">
          Mission, Vision & Values
        </span>
      </Title>

      <section className="w-full py-12">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1 max-w-xs text-center hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-4 text-emerald-600">
              Vision
            </h3>
            <p className="text-gray-600">
              To be the leading brand in natural hair care, empowering everyone
              to embrace their natural beauty with high-quality wigs, hair
              products, and tools.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1 max-w-xs text-center hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-4 text-emerald-600">
              Mission
            </h3>
            <p className="text-gray-600">
              To provide top-quality natural hair products, wigs, and styling
              tools while delivering a premium and trustworthy shopping
              experience to our customers.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1 max-w-xs text-center hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-4 text-emerald-600">
              Values
            </h3>
            <p className="text-gray-600">
              We value authenticity, quality, customer satisfaction, and
              innovation in natural hair care, helping everyone feel confident
              in their natural look.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
