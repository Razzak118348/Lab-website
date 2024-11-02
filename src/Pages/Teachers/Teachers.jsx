import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';

const Teachers = () => {
const allProfessor =useLoaderData()
console.log(allProfessor)

useEffect(()=>{
  window.scrollTo(0,0)
},[])
    return (
        <div>
{
    allProfessor.map((professor, index) =>
       <div key={index} className="flex items-center justify-center mb-5">
         <div  className="hero bg-gray-50 hover:shadow-xl hover:shadow-slate-300 my-4 p-2 rounded-2xl w-full lg:w-3/4 animate__animated animate__slideInUp  ">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src={professor.image}
        className="max-w-sm  rounded-lg  h-72 md:h-60" />
      <div>
        <h1 className="text-xl lg:text-2xl font-bold">{professor.name}</h1>
        <p className="my-2 font-bold">
          {professor.position}
        </p>
        <p className="">
         <span className=" font-bold text-orange-500"> Address</span > : {professor.address}
        </p>

        <p className="">
         <span className="font-bold text-orange-500"> Research Interest with </span> : {professor.research_interest}
        </p>

        <p className="">
         <span className=" font-bold text-orange-500"> Email</span> : {professor.email}
        </p>
        <p className="">
         <span className=" font-bold text-orange-500"> Mobile</span> : {professor.phone}
         </p>
     <Link to={`/teachers/${professor.id}`}>
     <button className="btn bg-yellow-500  font-bold mt-6">Details <FaArrowRight></FaArrowRight></button>
     </Link>

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