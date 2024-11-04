import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Jurnal = () => {
    const allJournal = useLoaderData();
    const [selectedAuthor, setSelectedAuthor] = useState("All");

    // Get unique authors for the dropdown
    const uniqueAuthors = ["All", ...new Set(allJournal.map(singleJournal => singleJournal.name))];

    // Function to handle author selection
    const handleAuthorChange = (event) => {
        setSelectedAuthor(event.target.value);
    };

    // Filter journals based on selected author
    const filteredJournals = selectedAuthor === "All"
        ? allJournal
        : allJournal.filter(singleJournal => singleJournal.name === selectedAuthor);

    return (
        <div className="max-w-3xl mt-16 mx-auto p-4">
            {/* Dropdown for author selection */}
            <div className="my-7">
                <label htmlFor="author-select" className="block text-gray-700 font-bold mb-2">Select Author:</label>
                <select
                    id="author-select"
                    value={selectedAuthor}
                    onChange={handleAuthorChange}
                    className="border border-gray-300 p-2 rounded-md"
                >
                    {uniqueAuthors.map((author, index) => (
                        <option key={index} value={author}>{author}</option>
                    ))}
                </select>
            </div>

            {/* Display filtered journals */}
            {filteredJournals.map((singleJournal, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{singleJournal.name}</h2>
                    <p className="text-gray-600 mb-4">{singleJournal.position}</p>

                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Journal Papers</h3>

                    <div className="space-y-4">
                        {singleJournal.journal_papers.map((paper, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-bold text-gray-800">{paper.title}</h4>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Authors:</span> {paper.authors.join(", ")}
                                </p>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Journal:</span> {paper.journal}
                                </p>
                                {paper.publisher && (
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-semibold">Publisher:</span> {paper.publisher}
                                    </p>
                                )}
                                {paper.impact_factor && (
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-semibold">Impact Factor:</span> {paper.impact_factor}
                                    </p>
                                )}
                                {paper.citescore && (
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-semibold">Citescore:</span> {paper.citescore}
                                    </p>
                                )}
                                {paper.indexing && (
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-semibold">Indexing:</span> {paper.indexing}
                                    </p>
                                )}
                                {paper.year && (
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-semibold">Year:</span> {paper.year}
                                    </p>
                                )}
                                {paper.status && (
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Status:</span> {paper.status}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Jurnal;
