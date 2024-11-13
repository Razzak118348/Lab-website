import { useLoaderData } from "react-router-dom";
import { FaCertificate, FaClock } from "react-icons/fa";
import { useEffect } from "react";

const Patents = () => {
    const allPatents = useLoaderData();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mt-32 flex items-center text-justify justify-center">
            <div className="p-8 max-w-5xl w-full bg-gray-50 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                    Patents
                </h1>
                <div className="space-y-8">
                    {allPatents.patents.map((patent, index) => (
                        <div
                            key={index}
                            className="bg-white border border-blue-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <FaCertificate className="text-blue-500 text-2xl mr-3" />
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {patent.title}
                                </h2>
                            </div>
                            <div className="text-gray-700">
                                <p className="mb-2">
                                    <span className="font-semibold">Inventors:</span>{" "}
                                    {patent.inventors.join(", ")}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Application Number:</span>{" "}
                                    {patent.application_number}
                                </p>
                                <p className="mb-2 flex items-center">
                                    <FaClock className="text-gray-500 mr-2" />
                                    <span className="font-semibold">Application Date:</span>{" "}
                                    {patent.application_date}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Status:</span>{" "}
                                    <span className="text-blue-600 font-medium">{patent.status}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Patents;
