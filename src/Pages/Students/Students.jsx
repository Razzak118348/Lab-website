import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Students = () => {
    const { Under_graduate } = useLoaderData();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mx-auto my-32 px-4 text-justify">

            {/* Undergraduate Section */}
            <div className="mb-16">
                <h3 className="text-base lg:text-3xl font-semibold text-center text-blue-600 mb-8">Undergraduate Students</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Under_graduate.map((student, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl">
                            <img
                                src={student.image}
                                alt={student.name}
                                className="w-full h-80 object-cover rounded-t-lg mb-4"
                            />
                            <h4 className="text-xl font-semibold text-gray-700">{student.name}</h4>
                            <p>Email : {student.email}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Students;
