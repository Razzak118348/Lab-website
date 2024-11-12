import { useLoaderData } from "react-router-dom";
import React from 'react';

const Courses = () => {
    const coursesData = useLoaderData();

    return (
        <div className="my-20">
            <div className="min-h-screen bg-gradient-to-r from-blue-100 to-sky-200 p-6 rounded-xl">
                <nav className="bg-sky-300 text-white py-4 mb-8 text-center font-semibold text-lg rounded-lg shadow-lg">
                    Courses by Professors
                </nav>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-lg rounded-lg border-collapse">
                        <thead className="bg-sky-300 text-white">
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-200 font-bold text-left">Code</th>
                                <th className="px-6 py-3 border-b border-gray-200 font-bold text-left">Year</th>
                                <th className="px-6 py-3 border-b border-gray-200 font-bold text-left">Type</th>
                                <th className="px-6 py-3 border-b border-gray-200 font-bold text-left">Title</th>
                                <th className="px-6 py-3 border-b border-gray-200 font-bold text-left">Credit Hours</th>
                                <th className="px-6 py-3 border-b border-gray-200 font-bold text-left">Professor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(coursesData).map(([professor, courses]) => (
                                <React.Fragment key={professor}>
                                    {Object.entries(courses).map(([level, coursesList]) => (
                                        <React.Fragment key={level}>
                                            {coursesList.map((course, idx) => (
                                                <tr key={idx} className="hover:bg-sky-50">
                                                    <td className="px-6 py-4 border-b border-gray-200">{course.Code}</td>
                                                    <td className="px-6 py-4 border-b border-gray-200">{course.Year}</td>
                                                    <td className="px-6 py-4 border-b border-gray-200">{course.Type}</td>
                                                    <td className="px-6 py-4 border-b border-gray-200">{course.Title}</td>
                                                    <td className="px-6 py-4 border-b border-gray-200">{course.CreditHours}</td>
                                                    <td className="px-6 py-4 border-b border-gray-200">{course.Professor}</td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Courses;
