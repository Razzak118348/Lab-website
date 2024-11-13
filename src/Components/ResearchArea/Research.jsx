import { useEffect, useState } from "react";

const Research = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    fetch('research.json') // Make sure this path is correct
      .then(res => res.json())
      .then(data => setResearch(data))
      .catch(error => console.error("Error fetching research data:", error));

        window.scrollTo(0, 0);

  }, []);

  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold mb-8 text-center mt-20 ">Research Area</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {research.map((item, index) => (
          <div key={index} className="mb-6 p-4 border rounded-md shadow hover:shadow-lg hover:shadow-slate-600 ">
            <h2 className="text-lg font-semibold">{item.researchName}</h2>
            <p className="text-gray-700 text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
