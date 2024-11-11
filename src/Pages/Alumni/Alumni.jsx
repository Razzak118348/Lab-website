import { useLoaderData } from "react-router-dom";

const Alumni = () => {
    const allAlumni = useLoaderData();

    // Destructure undergraduate and graduate alumni data
    const { undergraduate_alumni, graduate_alumni } = allAlumni;

    return (
        <div className="container mx-auto mt-20 px-4">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Alumni</h1>

            {/* Undergraduate Alumni Section */}
            <div className="mb-16">
                <h2 className="text-lg lg:text-3xl font-semibold text-gray-800 mb-8 text-center">Undergraduate Alumni</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {undergraduate_alumni.map((alumni, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl">
                            <img
                                src={alumni.image}
                                alt={alumni.name}
                                className="w-full  object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-base lg:text-xl font-semibold text-gray-700">{alumni.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Graduate Alumni Section */}
            <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Graduate Alumni</h2>
                {graduate_alumni.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {graduate_alumni.map((alumni, index) => (
                            <div key={index} className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl">
                                <img
                                    src={alumni.image}
                                    alt={alumni.name}
                                    className="w-full  object-cover rounded-t-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold text-blue-800">{alumni.name}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg mt-8">No graduate alumni available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default Alumni;
