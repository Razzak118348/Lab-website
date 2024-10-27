import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css';

const TeacherDetails = () => {
    const allProfessor = useLoaderData();
    const { id } = useParams();
console.log(allProfessor)
    // Find the selected professor based on the ID from the URL
    const selectProfessor = allProfessor.find((professor) => professor.id === parseInt(id));
    console.log(selectProfessor);

    if (!selectProfessor) {
        return <div>Professor not found.</div>;
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-6 animate__animated animate__lightSpeedInRight">
                <img src={selectProfessor.image} alt={selectProfessor.name} className="w-24 h-24 rounded-full mr-4" />
                <div>
                    <h1 className="text-2xl font-bold">{selectProfessor.name}</h1>
                    <h2 className="text-lg text-gray-600">{selectProfessor.position}</h2>
                    <p className="text-gray-500">{selectProfessor.address}</p>
                    <p className="text-gray-500">{selectProfessor.email}</p>
                </div>
            </div>

            <div className="mb-6 animate__animated animate__fadeInLeft">
                <h3 className="text-2xl font-semibold text-orange-500">Education</h3>
                <ul  className="list-disc list-inside text-lg  space-y-2">

                <li>{selectProfessor.education.post_dr}</li>
                <li>{selectProfessor.education.phd}</li>
                <li>{selectProfessor.education.master}</li>
                <li>{selectProfessor.education.bachelor}</li>

                </ul>
            </div>

            <div className="mb-6 text-lg font-bold animate__animated animate__flipInX">
                <h3 className="text-2xl font-semibold text-orange-500">Research Interests</h3>
                <p>{selectProfessor.research_interest}</p>
            </div>

            <div className="mb-6 animate__animated animate__fadeInDown">
                <h3 className="text-2xl font-semibold mb-2 text-orange-500">Professional Experiences</h3>
                <ol  className="mx-2">
                    {selectProfessor.PROFESSIONAL_EXPERIENCES.map((experience, index) => (
                        <li type="1" key={index} className="mb-2">
                            <strong>{experience.title}</strong> at {experience.organization} ({experience.start_date} - {experience.end_date})
                        </li>
                    ))}
                </ol>
            </div>

            <div className="mb-6 animate__animated animate__fadeInUp">
                <h3 className="text-2xl font-semibold mb-2 text-orange-500">Publications</h3>
                <ol  className="mx-2">
                    {selectProfessor.publications.journal_papers.map((paper, index) => (
                        <li type="1" key={index} className="mb-2">
                            <strong>{paper.title}</strong> by {paper.authors.join(", ")}, {paper.journal}, {paper.year}. <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">DOI: {paper.doi}</a>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default TeacherDetails;
