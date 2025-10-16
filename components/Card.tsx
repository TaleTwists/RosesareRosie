import React from 'react';
import Image from 'next/image';
import africana from "@/public/africana.png";

const Card = () => {
  return (
    <div>
      {/* .ourteam */}
      <div className="flex justify-center items-center min-h-screen relative py-14">
        {/* .team-members */}
        <div className="grid grid-cols-2 auto-rows-auto gap-5 p-8">
            {/* .member-card */}
            <div className="py-4 px-10 bg-white rounded-[10px] flex justify-center items-center flex-col relative shadow-[5px_10px_10px_rgba(0,0,0,0.6)] transition-all duration-500">
                <img src="/africana" alt="" className="rounded-full object-cover" />
                <h2>Alex Richman</h2>
                <h5>Developer</h5>
                <div className="social">
                    <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                </div>
            </div>
            {/* 2nd card with top-[20%] */}
            <div className="py-4 px-10 bg-white rounded-[10px] flex justify-center items-center flex-col relative shadow-[5px_10px_10px_rgba(0,0,0,0.6)] transition-all duration-500 top-[20%]">
                <img src="/africana" alt="" className="rounded-full object-cover" />
                <h2>Alex Richman</h2>
                <h5>Developer</h5>
                <div className="social">
                    <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                </div>
            </div>
            {/* 3rd card */}
            <div className="py-4 px-10 bg-white rounded-[10px] flex justify-center items-center flex-col relative shadow-[5px_10px_10px_rgba(0,0,0,0.6)] transition-all duration-500">
                <img src="public/africana" alt="" className="rounded-full object-cover" />
                <h2>Alex Richman</h2>
                <h5>Developer</h5>
                <div className="social">
                    <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                </div>
            </div>
            {/* 4th card with top-[20%] */}
            <div className="py-4 px-10 bg-white rounded-[10px] flex justify-center items-center flex-col relative shadow-[5px_10px_10px_rgba(0,0,0,0.6)] transition-all duration-500 top-[20%]">
                <img src="/africana" alt="" className="rounded-full object-cover" />
                <h2>GeorgeBushn</h2>
                <h5>Genius</h5>
                <div className="social">
                    <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                     <a href="#" className="fab">
                        <i className='fab fa-facebook'></i>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card