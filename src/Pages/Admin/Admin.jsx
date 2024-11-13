import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div className="my-32 max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Admin Panel
            </h1>
            <p className="text-center text-gray-600 mb-10">
                Select an option below to add new entries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Link to={'/addJournal'}>
                    <button className="btn w-full p-5 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200  font-semibold">
                        Add New Journal
                    </button>
                </Link>
                <Link to={'/addConference'}>
                    <button className="btn w-full p-5 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200  font-semibold">
                        Add New Conference
                    </button>
                </Link>
                <Link to={'/addStudent'}>
                    <button className="btn w-full p-5 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200  font-semibold">
                        Add New Student
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Admin;
