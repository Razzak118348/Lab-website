import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Conferance = () => {
    const allConference = useLoaderData();
    const [selectedAuthor, setSelectedAuthor] = useState("All");
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    // Get unique authors for the dropdown
    const uniqueAuthors = ["All", ...new Set(allConference.map(singleConference => singleConference.name))];

    // Function to handle author selection
    const handleAuthorChange = (event) => {
        setSelectedAuthor(event.target.value);
    };

    // Filter conferences based on selected author
    const filteredConferences = selectedAuthor === "All"
        ? allConference
        : allConference.filter(singleConference => singleConference.name === selectedAuthor);

    // Track unique titles to prevent duplicates
    const uniqueTitles = new Set();
    let totalPapersDisplayed = 0;

    return (
        <div className="max-w-3xl mt-5 md:mt-16 mx-auto p-4">
            <div className="flex items-center justify-center">
                <h3 className="text-lg md:text-xl font-semibold text-orange-500 border-2 p-2 bg-slate-50 rounded-lg shadow-md shadow-slate-500 mb-3 mt-10">
                    <Typewriter
                        words={['All Conference']}
                        loop={3}
                        typeSpeed={70}
                        deleteSpeed={100}
                        delaySpeed={700}
                    />
                </h3>
            </div>

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

            {/* Display filtered conferences without duplicate titles */}
            {filteredConferences.map((singleConference, ConferenceIndex) => (
                <div key={ConferenceIndex} className="bg-white shadow-lg rounded-lg p-6 mb-4">
                    <div className="space-y-4">
                        {singleConference.conferencePapers.map((paper, paperIndex) => {
                            // Only display the paper if its title has not been added yet
                            if (uniqueTitles.has(paper.title)) {
                                return null; // Skip duplicate titles
                            }
                            uniqueTitles.add(paper.title);
                            totalPapersDisplayed++; // Increment the paper count

                            return (
                                <div key={paperIndex} className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <p className="text-black text-sm md:text-base mb-1">
                                        <span>{totalPapersDisplayed}. </span>
                                        {paper.authors.join(", ")}, "{paper.title}",
                                        {paper.conference}, {paper.pages && (<span>pp. {paper.pages}, </span>)}
                                        {paper.location && (<span className="font-bold">{paper.location}, </span>)}
                                        {paper.year && (<span className="font-semibold">{paper.year}.</span>)}{paper.award && (<span className="font-semibold">({paper.award})</span>)}
                                        {paper.doi && (
                                            <a className="text-green-500 underline" href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                                                {paper.doi}
                                            </a>
                                        )}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Conferance;
