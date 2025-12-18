import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function AppsCard({ app }) {
  const { image, title, downloads, id } = app;

  return (
    <Link to={`/app-details/${id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 cursor-pointer border border-gray-100 flex flex-col">
        {/* Image */}
        <div className="w-full aspect-square rounded-lg bg-gray-200 overflow-hidden mb-3">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-[15px] font-semibold text-gray-900 leading-tight mb-2 truncate">
          {title}
        </h3>

        {/* Downloads & Rating */}
        <div className="flex justify-between items-center text-[10px] sm:text-[12px]">
          <span className="flex items-center gap-1 sm:gap-1.5 bg-green-100 text-green-600 font-medium px-2 py-1 rounded">
            <FaDownload className="text-[10px] sm:text-[12px]" />
            {downloads >= 1_000_000
              ? `${(downloads / 1_000_000).toFixed(1)}M`
              : downloads}
          </span>

          <span className="flex items-center gap-1 sm:gap-1.5 bg-orange-100 text-orange-600 font-medium px-2 py-1 rounded">
            <FaStar className="text-[10px] sm:text-[12px]" />
            5
          </span>
        </div>
      </div>
    </Link>
  );
}
