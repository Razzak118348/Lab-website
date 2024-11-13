
import { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

     <div className="p-8 mt-20 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl space-y-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Lab Location</h2>

                {/* Location Information */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
                        <FaMapMarkerAlt className="text-blue-500 mr-2" /> Location
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg">
                            Room Number: 223, Department of Computer Science and Engineering, Hajee Mohammad Danesh Science and Technology University, Bangladesh
                        </li>
                        <li className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg">
                            Room Number: 647, Department of Electronics and Communication Engineering, Hajee Mohammad Danesh Science and Technology University, Bangladesh
                        </li>
                    </ul>
                </div>

                {/* Phone Information */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
                        <FaPhoneAlt className="text-blue-500 mr-2" /> Phone
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500">+8801712262634</li>
                        <li className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500">+8801912136021</li>
                        <li className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500">+8801309964335</li>
                    </ul>
                </div>

                {/* Email Information */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
                        <FaEnvelope className="text-blue-500 mr-2" /> Email
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="p-3 bg-gray-50 rounded-lg border-l-4 border-red-500">delowar@khu.ac.kr</li>
                        <li className="p-3 bg-gray-50 rounded-lg border-l-4 border-red-500">ashis.62@gmail.com</li>
                        <li className="p-3 bg-gray-50 rounded-lg border-l-4 border-red-500">tangina@khu.ac.kr</li>
                    </ul>
                </div>
            </div>
        </div>


    );


};

export default Contact;