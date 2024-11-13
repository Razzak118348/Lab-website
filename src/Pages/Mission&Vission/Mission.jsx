import { useEffect } from "react";

const Mission = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
     <div className="mt-32 mb-10 text-justify">
   <div className=" max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl shadow-2xl">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl space-y-6 sm:space-y-8">
                {/* Mission Section */}
                <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Mission
                    </h2>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-justify">
                        The mission of the Data Intelligence IoT Innovation Lab is to advance the fields of data science and IoT by developing groundbreaking solutions that address pressing global and local challenges. Our lab is committed to conducting cutting-edge research in data analysis, machine learning, and IoT technology, with an emphasis on real-world applications that improve quality of life, optimize industry processes, and support sustainability.
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-justify">
                        We strive to create scalable, intelligent systems that leverage the potential of data and connectivity to empower decision-makers, enhance efficiency, and drive progress in healthcare, agriculture, urban planning, environmental conservation, and beyond. Through our interdisciplinary approach, we aim to build a collaborative research environment that fosters innovation, facilitates knowledge-sharing, and empowers the next generation of researchers and professionals with skills and insights to shape the future.
                    </p>
                </div>

                {/* Vision Section */}
                <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
                        Vision
                    </h2>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-justify">
                        The Data Intelligence IoT Innovation Lab envisions becoming a leading global hub for research and innovation in data intelligence and IoT, recognized for pushing the boundaries of knowledge and technology. We aspire to create transformative impacts on society by developing smart, sustainable, and connected systems that respond to dynamic challenges in an increasingly data-driven world.
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-justify">
                        Our vision is to set a benchmark for excellence in IoT and data intelligence research, known for pioneering advancements that bridge the gap between technology and practical solutions in critical areas. We aim to foster strong partnerships with academia, industry, and government bodies worldwide, driving collaboration that accelerates the development and adoption of innovative solutions.
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-justify">
                        Therefore, we seek to inspire a new era of research that integrates intelligence, connectivity, and sustainability, paving the way for a smarter, more resilient, and equitable world.
                    </p>
                </div>
            </div>
        </div>

     </div>
    );
};

export default Mission;
