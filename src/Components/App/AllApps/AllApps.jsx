import React, { useState } from "react";
import AppsCard from "../AppsCard";
import useApps from "../../../Hook/useApps";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../ErrorPage/ErrorPage";

export default function AllApps() {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          Our All Applications
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex gap-2 font-bold text-lg sm:text-xl">
          <h2>({filteredApps.length})</h2>
          <h2>Apps Found</h2>
        </div>

        <div className="w-full sm:w-auto">
          <input
            className="border border-gray-300 text-sm p-2 w-full sm:w-80 rounded"
            placeholder="Search Apps"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredApps.map((app) => (
          <AppsCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}
