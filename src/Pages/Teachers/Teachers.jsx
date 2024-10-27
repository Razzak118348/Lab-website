import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';

const Teachers = () => {
const allProfessor = useLoaderData()
console.log(allProfessor)

useEffect(()=>{
  window.scrollTo(0,0)
},[])
    return (
        <div>
{
    allProfessor.map((professor, index) =>
       <div key={index} className="flex items-center justify-center ">
         <div  className="hero bg-gray-200 hover:bg-orange-100 my-10 p-5 rounded-2xl w-full lg:w-3/4 animate__animated animate__slideInUp shadow-xl shadow-slate-500">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src={professor.image}
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">{professor.name}</h1>
        <p className="py-6 font-bold text-xl">
          {professor.position}
        </p>
        <p className="py-3 font-bold ">
         <span className="text-xl font-bold text-orange-500"> Address</span> : {professor.address}
        </p>

        <p className="py-2 font-bold ">
         <span className="text-xl font-bold text-orange-500"> Research Interest with </span> : {professor.research_interest}
        </p>
        <p className="py-2 font-bold ">
        <p className="py-2 font-bold ">
         <span className="text-xl font-bold text-orange-500"> Email</span> : {professor.email}
        </p>
         <span className="text-xl font-bold text-orange-500"> Phone Number</span> : {professor.email}
        </p>
        <Link className="" to={`/teachers/${professor.id}`}> <button className="btn bg-yellow-500 text-lg font-bold mt-6">Professor Details <FaArrowRight></FaArrowRight></button></Link>
      </div>
    </div>
  </div>
       </div>
       )
}
        </div>
    );
};

export default Teachers;