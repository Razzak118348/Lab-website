import { useLoaderData } from "react-router-dom";

const Award = () => {
    const allAwards = useLoaderData();

    return (
        <div className="p-6 bg-gray-100 min-h-screen text-justify mt-20">
            <h2 className="text-lg lg:text-3xl font-bold text-center text-gray-800 mb-8">All Awards</h2>

            <div className="space-y-8">
                {Object.entries(allAwards).map(([person, awards], index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg lg:text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
                            {person}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {awards.map((award, idx) => (
                                <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                    <h4 className="text-base lg:text-xl font-medium text-blue-600">{award.award}</h4>
                                    <p className=" mt-2">
                                        <span className="text-base font-semibold">Funded by:</span> {award.funded_by}
                                    </p>
                                    <p className="">
                                        <span className="text-base font-semibold">Date:</span> {award.date}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Award;
