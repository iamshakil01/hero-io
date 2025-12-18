import { useParams } from "react-router";
import { useState, useEffect } from "react";

import useApps from "../../../Hook/useApps";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../ErrorPage/ErrorPage";

import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import { toast, Toaster } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  const [installed, setInstalled] = useState(false);

  // get app FIRST (safe even if apps empty)
  const app = apps.find((app) => String(app.id) === id);

  // ✅ hook ALWAYS runs
  useEffect(() => {
    if (app) {
      const installedFromStorage =
        localStorage.getItem(`installed-${app.id}`) === "true";
      setInstalled(installedFromStorage);
    }
  }, [app]);

  // ✅ early returns AFTER hooks
  if (loading) return <Loading />;
  if (error || !app) return <ErrorPage />;

  const stars = Array.from({ length: 5 }, (_, i) => (
    <input
      key={i}
      type="radio"
      className="mask mask-star-2 bg-warning"
      checked={i < Math.round(app.ratingAvg)}
      readOnly
    />
  ));

  const chartData = app.ratings.map((r, i) => ({
    name: `${i + 1}★`,
    count: r.count,
  }));

  const handleInstall = () => {
    setInstalled(true);
    localStorage.setItem(`installed-${app.id}`, "true");
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="w-full bg-base-100 pb-10">
      <Toaster />
      <div className="max-w-5xl mx-auto px-4 pt-10">
        <div className="card lg:card-side bg-base-200 shadow-xl rounded-2xl">
          <figure className="lg:w-1/3">
            <img
              src={app.image}
              alt={app.title}
              className="h-full w-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{app.title}</h2>
            <p className="text-gray-600">{app.description}</p>

            <div className="flex gap-3 items-center">
              <span className="text-4xl font-bold">{app.ratingAvg}</span>
              <div className="rating">{stars}</div>
              <span className="text-gray-500">({app.reviews} reviews)</span>
            </div>

            <div className="h-[200px] bg-base-300 p-4 rounded-xl">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <button
              className="btn btn-primary btn-wide rounded-full mt-4"
              onClick={handleInstall}
              disabled={installed}
            >
              {installed ? "Installed" : "Install Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
