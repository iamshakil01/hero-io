import React from 'react'
import heroImg from '../../assets/hero.png'

export default function Hero() {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <img src={heroImg} alt="" />
        </div>
        <div>
            <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-16">
          {/* Stat 1 */}
          <div>
            <p className="uppercase text-sm tracking-widest opacity-70 mb-2">
              Total Downloads
            </p>
            <p className="text-5xl font-extrabold">29.6M</p>
            <p className="text-xs opacity-70 mt-1">21% More Than Last Month</p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="uppercase text-sm tracking-widest opacity-70 mb-2">
              Total Reviews
            </p>
            <p className="text-5xl font-extrabold">906K</p>
            <p className="text-xs opacity-70 mt-1">46% More Than Last Month</p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="uppercase text-sm tracking-widest opacity-70 mb-2">
              Active Apps
            </p>
            <p className="text-5xl font-extrabold">132+</p>
            <p className="text-xs opacity-70 mt-1">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
        </div>
        
    </div>
  )
}
