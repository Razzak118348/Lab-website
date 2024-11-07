import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const Research = () => {
    const allResearch = useLoaderData()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    return (
        <div className="my-30 p-4  mx-2 md:mx-20" >
      <div >
      <h2 className="mt-32 text-xl md:text-3xl font-bold text-black text-center">Research Area</h2>
            <div className="flex justify-center items-center mb-10 mt-4">
            <p className="px-5  w-full md:w-1/2 text-sm md:text-lg">The Data Intelligence IoT Innovation Lab focuses on a diverse range of research areas that integrate data science, artificial intelligence, and IoT to create innovative solutions for modern challenges.</p>
            </div>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-20">
            {allResearch.map((research) => (
              <div
                id="my-anchor-element-id"
                key={research._id}
                className="card bg-base-100 w-auto shadow-xl shadow-gray-500  animate__animated animate__slideInUp hover:scale-105"
              >
                <figure>
                  <img
                    src={research.image}
                    className="h-52 w-full"
                    alt={research.researchName}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg">
                    <Typewriter
                      words={[research.researchName]}
                      loop={1}
                      typeSpeed={70}
                    />
                  </h2>
                  <p>{research.description}</p>
                </div>
              </div>
            ))}
            </div>

          </div>
    );
};

export default Research;