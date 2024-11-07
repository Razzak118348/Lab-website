import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

import 'animate.css';

const TeacherDetails = () => {
    //for window see in top firest
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const AllTeachers = useLoaderData()

    const { id } = useParams();

    console.log(AllTeachers)
    // console.log(allProfessor)
    // Find the selected professor based on the ID from the URL
    const selectProfessor = AllTeachers.find((professor) => professor.id === id);
    // console.log(selectProfessor);

    if (!selectProfessor) {
        return <div>Professor not found.</div>;
    }



    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-6 animate__animated animate__lightSpeedInRight">
                <img src={selectProfessor.image} alt={selectProfessor.name} className="w-24 h-24 rounded-full mr-4" />
                <div>
                    <h1 className="text-lg md:text-2xl font-bold mb-1">{selectProfessor.name}</h1>
                    <h2 className="text-gray-600">{selectProfessor.position}</h2>
                    <p className="text-gray-500"> <span className="font-bold">Address :</span> {selectProfessor.address}</p>
                    <p className="text-gray-500"><span className="font-bold">Email :</span> {selectProfessor.email}</p>
                    <p className="text-gray-500"><span className="font-bold">Mobile :</span> {selectProfessor.phone}</p>
                </div>
            </div>

            <div className="mb-6 animate__animated animate__fadeInLeft ">
                <h3 className="text-lg md:text-xl font-semibold text-orange-500 border-2 p-2 bg-slate-50 rounded-lg shadow-md shadow-slate-500 mb-3 mt-10"> Education</h3>
                <ul className="list-disc list-inside  space-y-2">

                    <li>{selectProfessor.education.phd}</li>
                    <li>{selectProfessor.education.master}</li>
                    <li>{selectProfessor.education.bachelor}</li>

                </ul>
            </div>

            <div className="mb-6  animate__animated animate__flipInX">
                <h3 className="text-lg md:text-xl  font-semibold text-orange-500 border-2 p-2 bg-slate-50 rounded-lg shadow-md shadow-slate-500 mb-3">Research Interest</h3>
                <p>{selectProfessor.research_interest}</p>
            </div>

            <div className="mb-6 animate__animated animate__fadeInDown">
                <h3 className="text-lg md:text-xl font-semibold text-orange-500 border-2 p-2 bg-slate-50 rounded-lg shadow-md shadow-slate-500 mb-3">Professional Experiences</h3>
                <ol className="mx-2">
                    {selectProfessor.PROFESSIONAL_EXPERIENCES.map((experience, index) => (
                        <li type="1" key={index} className="mb-2">
                            <strong>{experience.title}</strong> at {experience.organization} ({experience.start_date} - {experience.end_date})
                        </li>
                    ))}
                </ol>
            </div>

            <div className="mb-6 animate__animated animate__fadeInUp ">
                <h3 className="text-lg md:text-xl font-semibold  text-orange-500 border-2 p-2 bg-slate-50 rounded-lg shadow-md shadow-slate-500 mb-3">Research Publications </h3>
                <h3 className="text-lg md:text-xl font-semibold my-2 border-2 w-full lg:w-1/2 p-2 rounded-md shadow-md shadow-slate-500">Journal Papers</h3>
                <ol className="mx-2">
                    {selectProfessor.publications.journal_papers.map((paper, index) => (
                        <li type="1" key={index} className="mb-2">
                        {paper.authors.join(", ")}, "{paper.title}",
                                            <span className="font-bold"> {paper.journal} ({paper.category && (<span>{paper.category},</span>)} {paper.impact_factor && (<span>IF: {paper.impact_factor}</span>)} {paper.indexing && (<span>{paper.indexing} Indexing</span>)}) </span>
                                            {paper.volume && (<span>{paper.volume}</span>)}
                                            {paper.pages && (<span>pp. {paper.pages},</span>)}{paper.country&& (<span>{paper.country}, </span>)} {paper.year}.
                                            {paper.doi && (
                                                <a className="text-green-500 underline" href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                                                    {paper.doi}
                                                </a>
                                            )}
                        </li>
                    ))}
                </ol>
                <h3 className="text-lg md:text-xl font-semibold mt-5 mb-2 border-2 w-full lg:w-1/2 p-2 rounded-md shadow-md shadow-slate-500"> Conferance  Inproceedings</h3>
                <ol className="mx-2">
                    {selectProfessor.publications.conferencePapers.map((paper, index) => (
                        <li type="1" key={index} className="mb-2">
                            {paper.authors.join(", ")}, "{paper.title}",
                                            {paper.conference}, {paper.pages && (<span>pp. {paper.pages}, </span>)}
                                            {paper.location && (<span className="font-bold">{paper.location}, </span>)}
                                            {paper.year && (<span className="font-semibold">{paper.year}.</span>)}{paper.award && (<span className="font-semibold">({paper.award})</span>)}
                                            {paper.doi && (
                                                <a className="text-green-500 underline" href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                                                    {paper.doi}
                                                </a>
                                            )}
                        </li>
                    ))}
                </ol>

            </div>


            {selectProfessor.award && (<div className="mb-6 animate__animated animate__fadeInUp ">
                <h3 className="text-lg md:text-xl font-semibold  text-orange-500 border-2 p-2 bg-slate-50 rounded-lg shadow-md shadow-slate-500 mb-3">SCHOLARSHIPS AND AWARDS </h3>
                <ol className="mx-2">
                    {selectProfessor.award?.map((award, index) => (
                        <li type="1" key={index} className="mb-2">
                            <strong>{award.award} ,</strong> funded by {award.funded_by} at {award.date}.
                        </li>
                    ))}
                </ol>
            </div>)}

        </div>
    );
};

export default TeacherDetails;
