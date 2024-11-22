import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';

const Teachers = () => {
  const allProfessor = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simulate loading process
    if (allProfessor) {
      setLoading(false);
    }
  }, [allProfessor]);

  return (
    <div className="mt-32 text-justify">
      {loading ? (
        // Display a loading spinner while waiting for data
        <div className="flex items-center justify-center h-screen">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-yellow-500"></div>
        </div>
      ) : (
        // Display professor data once loaded
        allProfessor.map((professor, index) => (
          <div key={index} className="flex items-center justify-center mb-5">
            <div className="hero bg-gray-50 hover:shadow-xl hover:shadow-slate-300 my-4 p-2 rounded-2xl w-full lg:w-3/4 animate__animated animate__slideInUp">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={professor.image}
                  className="max-w-sm rounded-lg h-72 md:h-60"
                  alt={`${professor.name}`}
                />
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold">{professor.name}</h1>
                  <p className="my-2 font-bold text-justify">{professor.position}</p>
                  <p className="my-2 font-bold text-justify">{professor.graduation}</p>
                  <p>
                    <span className="font-bold text-orange-500">Address</span>: {professor.address}
                  </p>
                  <p>
                    <span className="font-bold text-orange-500 text-justify">Research Interest </span>: {professor.research_interest}
                  </p>
                  <p>
                    <span className="font-bold text-orange-500 text-justify">Email</span>: {professor.email}
                  </p>
                  <p>
                    <span className="font-bold text-orange-500 text-justify">Mobile</span>: {professor.phone}
                  </p>
                  <Link to={`/teachers/${professor.id}`}>
                    <button className="btn bg-yellow-500 font-bold mt-6">
                      Details <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Teachers;
