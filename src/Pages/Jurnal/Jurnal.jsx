import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Jurnal = () => {
    const allJournal = useLoaderData();  // Assuming this is an array of journals
    const [selectedAuthor, setSelectedAuthor] = useState("All");
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    // Get unique authors for the dropdown
    const uniqueAuthors = ["All", ...new Set(allJournal.map(singleJournal => singleJournal.name))];

    // Function to handle author selection
    const handleAuthorChange = (event) => {
        setSelectedAuthor(event.target.value);
    };

    // Function to filter and deduplicate journal papers by title when "All" is selected
    const getUniqueJournalPapers = (journals) => {
        const seenTitles = new Set();  // To track the titles we've already seen
        const uniquePapers = [];

        journals.forEach(singleJournal => {
            singleJournal.journal_papers.forEach(paper => {
                // Check if the title has been seen already
                if (!seenTitles.has(paper.title)) {
                    seenTitles.add(paper.title);  // Add the title to the seen set
                    uniquePapers.push(paper);  // Add the paper to the result
                }
            });
        });

        return uniquePapers;
    };

    // Filter journals based on selected author
    const filteredJournals = selectedAuthor === "All"
        ? allJournal.map(singleJournal => ({
            ...singleJournal,
            journal_papers: getUniqueJournalPapers([singleJournal])  // Deduplicate papers in each journal
        }))
        : allJournal.filter(singleJournal => singleJournal.name === selectedAuthor);

    // Calculate the total number of journal papers displayed
    let totalPapersDisplayed = 0;

    return (
        <div className="max-w-3xl mt-5 md:mt-16 mx-auto p-4">
            <div className="flex items-center justify-center">
                <h3 className="text-lg md:text-xl font-semibold text-orange-500 border-2 p-2 bg-slate-50 rounded-lg shadow-md shadow-slate-500 mb-3 mt-10">
                <Typewriter
words={['All Journal']}
loop={3}
typeSpeed={70}
deleteSpeed={100}
delaySpeed={700}
></Typewriter>
                </h3>
            </div>
            {/* Dropdown for author selection */}
            <div className="my-7">
                <label htmlFor="author-select" className="block text-gray-700 font-bold mb-2">
                    Select Author:
                </label>
                <select
                    id="author-select"
                    value={selectedAuthor}
                    onChange={handleAuthorChange}
                    className="border border-gray-300 p-2 rounded-md"
                >
                    {uniqueAuthors.map((author, index) => (
                        <option key={index} value={author}>
                            {author}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display filtered journals */}
            {filteredJournals.map((singleJournal, journalIndex) => {
                return (
                    <div key={journalIndex} className="bg-white shadow-lg rounded-lg p-6 mb-4">
                        <div className="space-y-4">
                            {singleJournal.journal_papers.map((paper, paperIndex) => {
                                totalPapersDisplayed++; // Increment the overall paper count
                                return (
                                    <div key={paperIndex} className="bg-gray-50 p-4 rounded-lg shadow-md">
                                        <p className="text-black text-sm md:text-base mb-1">
                                            <span>{totalPapersDisplayed}. </span>
                                            {paper.authors.join(", ")}, "{paper.title}",
                                            <span className="font-bold"> {paper.journal}  {paper.category && (<span> {paper.category},</span>)} {paper.impact_factor && (<span>IF: {paper.impact_factor}</span>)} {paper.indexing && (<span>{paper.indexing} Indexing</span>)}  </span>
                                            {paper.volume && (<span> {paper.volume}</span>)}
                                            {paper.pages && (<span>pp. {paper.pages},</span>)}{paper.country&& (<span>{paper.country}, </span>)} {paper.year}.
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
                );
            })}
        </div>
    );
};

export default Jurnal;
