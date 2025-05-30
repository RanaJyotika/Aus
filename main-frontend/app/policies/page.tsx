// pages/policy.tsx or src/pages/Policy.jsx
"use client";
import React, { useEffect, useState } from "react";

interface Policy {
  _id: string;
  title: string;
  qrImageUrl: string;
  redirectLink: string;
}

const PolicyPage = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/policies")
      .then((res) => res.json())
      .then((data) => setPolicies(data))
      .catch((err) => console.error("Error fetching policies:", err));
  }, []);

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-6">Policies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {policies.map((policy) => (
          <div
            key={policy._id}
            className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
          >
            <img
              src={policy.qrImageUrl}
              alt={policy.title}
              className="w-40 h-40 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{policy.title}</h2>
            <a
              href={policy.redirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyPage;
