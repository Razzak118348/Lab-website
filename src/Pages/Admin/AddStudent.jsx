
import Swal from 'sweetalert2';

const AddStudent = () => {
    const handleAddStudent = (e) => {
        e.preventDefault();
        const form = e.target;
        const studentType = form.studentType.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const job = form.job.value;
        const email = form.email.value;

        const newStudent = { studentType, name, photoUrl, job, email };

        console.log(newStudent);

        // Display success message
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Student Added Successfully",
            showConfirmButton: true,
        });

        form.reset();
    };

    return (
        <div className="mt-32 mb-10 max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add Student</h2>
            <form onSubmit={handleAddStudent} className="space-y-4">

                <div>
                    <label className="block mb-1 font-medium">Student Type</label>
                    <select name="studentType" className="w-full px-3 py-2 border rounded">
                        <option value="undergraduate">Undergraduate</option>
                        <option value="graduate">Graduate</option>
                        <option value="alumni">Alumni</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter student name"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Photo URL</label>
                    <input
                        type="url"
                        name="photoUrl"
                        placeholder="Enter photo URL"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Job</label>
                    <input
                        type="text"
                        name="job"
                        placeholder="Enter job title"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded">
                    Add Student
                </button>
            </form>
        </div>
    );
};

export default AddStudent;
