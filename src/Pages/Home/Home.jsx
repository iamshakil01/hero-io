import React from "react";
import Banner from "../../Components/Banner/Banner";
import Hero from "../../Components/Hero/Hero";
import AppsCard from "../../Components/App/AppsCard";
import useApps from "../../Hook/useApps";
import { Link } from "react-router";

export default function Home() {
  const { apps } = useApps();
  const trendingApps = apps.slice(0, 8);

  return (
    <div>
      <Banner />
      <Hero />

      <div className="text-center max-w-7xl mx-auto px-4 my-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          Trending Apps
        </h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>

        <div className="flex justify-center my-8">
          <Link
            to="/all-apps"
            className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-3 text-sm sm:text-base"
          >
            See All
          </Link>
        </div>
      </div>
    </div>
  );
}
