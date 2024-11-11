import { useLoaderData } from "react-router-dom";

const Students = () => {
    const allStudents = useLoaderData();

    return (
     <div className="mt-32">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {allStudents.map((student, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                    <img
                        src={student.image}
                        alt={student.name}
                        className="w-full  object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold">{student.name}</h3>
                </div>
            ))}
        </div>
     </div>
    );
};

export default Students;
