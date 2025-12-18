import React, { useState, useEffect } from "react";
import { ArrowDownToLine, Star } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import useApps from "../../Hook/useApps";
import Loading from "../Loading/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function Installation() {
  const { apps, loading, error } = useApps();
  const [sortOrder, setSortOrder] = useState("");
  const [installedApps, setInstalledApps] = useState([]);

  // ✅ load installed apps from localStorage whenever apps change
  useEffect(() => {
    const installed = apps.filter(
      (app) => localStorage.getItem(`installed-${app.id}`) === "true"
    );
    setInstalledApps(installed);
  }, [apps]);

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  // ✅ sorting by downloads
  const sortedApps = (() => {
    if (sortOrder === "high-low") {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    }
    if (sortOrder === "low-high") {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    }
    return installedApps;
  })();

  const handleUninstall = (app) => {
    // Remove from localStorage
    localStorage.removeItem(`installed-${app.id}`);

    // Update state so UI updates immediately
    setInstalledApps((prev) => prev.filter((a) => a.id !== app.id));

    toast.success(`${app.title} uninstalled successfully`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <Toaster />

      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Your Installed Apps
        </h2>
        <p className="text-gray-500 text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="font-semibold text-gray-800">
          {sortedApps.length} Apps Found
        </span>

        <select
          className="select select-bordered select-sm w-44"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="" disabled>
            Sort by Downloads
          </option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>

      <div className="space-y-4">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white border rounded-lg shadow-sm p-4 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-md bg-gray-200 overflow-hidden">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{app.title}</h3>

              <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <ArrowDownToLine className="w-3 h-3 text-green-500" />
                  {app.downloads.toLocaleString()}
                </span>

                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-orange-400" />
                  {app.ratingAvg}
                </span>

                <span>{app.size} MB</span>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app)}
              className="btn btn-sm bg-green-500 hover:bg-green-600 text-white"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
