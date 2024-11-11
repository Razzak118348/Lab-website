import { useLoaderData } from "react-router-dom";

const Alumni = () => {
    const allAlumni = useLoaderData();

    // Destructure undergraduate and graduate alumni data
    const { undergraduate_alumni, graduate_alumni } = allAlumni;

    return (
      <div className="flex items-center justify-center">
         <div className="mt-20 ">
         <div className="p-4">
            {/* Undergraduate Alumni Section */}
            <h2 className="text-2xl font-semibold mb-4">Undergraduate Alumni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {undergraduate_alumni.map((alumni, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                        <img
                            src={alumni.image}
                            alt={alumni.name}
                            className="w-full  object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold">{alumni.name}</h3>
                    </div>
                ))}
            </div>

            {/* Graduate Alumni Section */}
            <h2 className="text-2xl font-semibold mt-16 mb-4 ">Graduate Alumni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {graduate_alumni.map((alumni, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                        <img
                            src={alumni.image}
                            alt={alumni.name}
                            className="w-full  object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold">{alumni.name}</h3>
                    </div>
                ))}
            </div>
        </div>

       </div>
      </div>
    );
};

export default Alumni;
