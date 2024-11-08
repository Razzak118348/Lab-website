import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Projects = () => {
    const allProjects = useLoaderData();
    const [selectedAuthor, setSelectedAuthor] = useState("All");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get unique authors for the dropdown (including "All")
    const uniqueAuthors = ["All", ...new Set(allProjects.map(singleProject => singleProject.name))];

    // Function to handle author selection
    const handleAuthorChange = (event) => {
        setSelectedAuthor(event.target.value);
    };

    // Function to get all unique projects (to avoid duplicates by project name)
    const getUniqueProjects = (projects) => {
        const seenTitles = new Set();
        return projects.filter((project) => {
            if (seenTitles.has(project.name)) return false;
            seenTitles.add(project.name);
            return true;
        });
    };

    // Filter projects based on selected author
    const filteredProjects = selectedAuthor === "All"
        ? getUniqueProjects(allProjects.flatMap(singleProject => singleProject.projects)) // Get all projects across authors, then deduplicate
        : allProjects.find(singleProject => singleProject.name === selectedAuthor)?.projects || [];

    // Count the total number of displayed projects
    let totalProjectsDisplayed = 0;

    return (
        <div>
            <div className="max-w-3xl mt-5 md:mt-16 mx-auto p-4">
                <div className="flex items-center justify-center">
                    <h3 className="text-lg md:text-xl font-semibold text-orange-500 border-2 p-2 bg-slate-50 rounded-lg shadow-md shadow-slate-500 mb-3 mt-10">
                        <Typewriter
                            words={['All Project']}
                            loop={3}
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={700}
                        />
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

                {/* Display filtered projects */}
                {filteredProjects.length === 0 ? (
                    <p>No projects available.</p>
                ) : (
                    filteredProjects.map((project, projectIndex) => {
                        totalProjectsDisplayed++; // Increment the overall project count
                        return (
                            <div key={projectIndex} className="bg-gray-50 p-4 rounded-lg shadow-md mb-4">
                                <p className="text-black text-sm md:text-base mb-1">
                                    <span>{totalProjectsDisplayed}. </span>
                                    {project.name}
                                    {project.funds && <span>, {project.funds}</span>}
                                    {project.position && <span>, {project.position}</span>}
                                    {project.duration && <span>, {project.duration}</span>}
                                </p>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Projects;
