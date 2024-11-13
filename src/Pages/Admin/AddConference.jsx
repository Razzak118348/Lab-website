
import Swal from 'sweetalert2';

const AddConference = () => {

    const handleAddConference = (e) => {
        e.preventDefault();
        const form = e.target;
        const professor = form.professor.value;
        const authors = form.authors.value.split(',').map(author => author.trim());
        const title = form.title.value;
        const conference = form.conference.value;
        const year = form.year.value;
        const pages = form.pages.value;
        const location = form.location.value;

        const newConference = {
            professor,
            authors,
            title,
            conference,
            year,
            pages,
            location
        };

        console.log(newConference);

        if (newConference) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Conference Added Successfully",
                showConfirmButton: "ok",
            });
            form.reset();
        }
    };

    return (
        <div className="mt-32 mb-10 max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add Conference </h2>
            <form onSubmit={handleAddConference} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Professor</label>
                    <input
                        type="text"
                        name="professor"
                        placeholder="e.g., Dr.Tangina Sultana"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Authors (comma-separated)</label>
                    <input
                        type="text"
                        name="authors"
                        placeholder="e.g., Tangina Sultana, Md Golam Morshed, Young-Koo Lee"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Multi-Kernel Inductive Autoencoder for Efficient RDF Dataset Compression"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Conference</label>
                    <input
                        type="text"
                        name="conference"
                        placeholder="The 4th Korea Artificial Intelligence Conference"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Year</label>
                    <input
                        type="text"
                        name="year"
                        placeholder="September 20-23"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Pages</label>
                    <input
                        type="text"
                        name="pages"
                        placeholder="1-2"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Jeju, South Korea"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded">
                    Add Conference Entry
                </button>
            </form>
        </div>
    );
};

export default AddConference;
