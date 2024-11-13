
import Swal from 'sweetalert2';

const AddJournal = () => {
    const handleAddJournal = (e) => {
        e.preventDefault();
        const form = e.target;
        const professor = form.professor.value;
        const authors = form.authors.value.split(',').map(author => author.trim());
        const title = form.title.value;
        const journal = form.journal.value;
        const publisher = form.publisher.value;
        const category = form.category.value;
        const impactFactor = form.impactFactor.value;
        const indexing = form.indexing.value;
        const status = form.status.value;
        const year = form.year.value;
        const volume = form.volume.value;
        const pages = form.pages.value;
        const doi = form.doi.value;

        const NewJournal = {
            professor,
            authors,
            title,
            journal,
            publisher,
            category,
            impactFactor,
            indexing,
            status,
            year,
            volume,
            pages,
            doi,
        };

        console.log(NewJournal);

        if (NewJournal) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Journal Added Successfully",
                showConfirmButton: "ok",
            });
            form.reset();
        }
    };

    return (
        <div className="mt-32 mb-10 max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add Journal Entry</h2>
            <form onSubmit={handleAddJournal} className="space-y-4">
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
                        placeholder="e.g., Ashis Kumar Mandal, Mohammad Nadim"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Journal</label>
                    <input
                        type="text"
                        name="journal"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Publisher</label>
                    <input
                        type="text"
                        name="publisher"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <input
                        type="text"
                        name="category"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Impact Factor</label>
                    <input
                        type="number"
                        name="impactFactor"
                        step="0.01"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Indexing</label>
                    <input
                        type="text"
                        name="indexing"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Status</label>
                    <input
                        type="text"
                        name="status"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Year</label>
                    <input
                        type="number"
                        name="year"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Volume</label>
                    <input
                        type="text"
                        name="volume"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Pages</label>
                    <input
                        type="text"
                        name="pages"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">DOI</label>
                    <input
                        type="text"
                        name="doi"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded">
                    Add Journal Entry
                </button>
            </form>
        </div>
    );
};

export default AddJournal;