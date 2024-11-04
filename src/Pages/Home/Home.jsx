import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import { FaArrowRight } from "react-icons/fa";
import 'animate.css';
import Research from "../../Components/ResearchArea/Research";

const Home = () => {
    const AllProfessors = useLoaderData();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading process
        if (AllProfessors) {
            setLoading(false);
        }
    }, [AllProfessors]);

    return (
        <div>
            {loading ? (
                // Loading spinner
                <div className="flex items-center justify-center h-screen">
                    <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-yellow-500"></div>
                </div>
            ) : (
                // Main content
                <>
                    <Banner />

                    <div className="p-4 md:p-16 mx-2 md:mx-20">
                        {/* Welcome section */}
                        <div className="mt-10 grid grid-cols-1 gap-5">
                            <div className="flex justify-center items-center animate__animated animate__lightSpeedInLeft">
                                <div>
                                    <p className="font-medium md:text-lg">
                                        <span className="text-lg lg:text-2xl text-slate-800 font-bold mb-8">Welcome to the Data Intelligence IoT Innovation Lab (DIoT Lab)</span> – a hub for data-driven research and Internet of Things (IoT) advancements powered by machine learning. Driven by a commitment to research excellence and technological innovation, our lab strives to make a significant impact on the future of IoT by leveraging data analysis and IoT technology. With a focus on cutting-edge applications, we bridge data intelligence and the IoT to address challenges and enhance insights across industries.
                                        <br /><br />
                                        Our lab is under the expert guidance of three professors, <span className="text-lg font-bold">Professor Dr. Md. Delowar Hossain, Professor Dr. Ashis Kumar Mandal, and Dr. Tangina Sultana</span>, each with deep expertise and advanced qualifications from prestigious institutions across Canada, South Korea, Malaysia, BUET, SUST, and Islamic University. With a strong foundation in high-level research and real-world applications, numerous high-impact journal publications, they bring significant international collaboration experience and a record of prestigious publications. Our lab is where data and technology converge to drive new possibilities. Together, we aim to lead advancements in data intelligence and IoT, creating a transformative environment where innovation thrives. Explore our projects and learn more about how we’re shaping the future with data and IoT innovations.
                                    </p>
                                </div>
                            </div>

                            {/* Professors section */}
                            <div className="mt-10 p-0 animate__animated animate__fadeInRight grid grid-cols-1 lg:grid-cols-3 gap-7">
                                {AllProfessors.map((professor) => (
                                    <div key={professor.id} className="card card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105">
                                        <figure>
                                            <img
                                                src={professor.image}
                                                alt={professor.name}
                                                className="max-w-sm rounded-lg h-72 mt-1"
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{professor.name}</h2>
                                            <p>{professor.position}</p>
                                            <div className="card-actions justify-end">
                                                <Link to={`/teachers/${professor.id}`}>
                                                    <button className="btn bg-yellow-500 font-bold">
                                                        View Details <FaArrowRight />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Research area section */}
                        <Research />
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
