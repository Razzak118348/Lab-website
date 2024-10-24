import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>



            <div className="p-6 md:p-16 mx-5 md:mx-20">

                {/* welcome section  */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-20 lg:gap-32 font">
                    {/* <div className="bg-slate-100 p-5 rounded-l-lg">
<h1 className="text-4xl font-bold">What we Do !!</h1>
<p className="my-3">At the IT Department Research Hub, we aim to facilitate collaboration, innovation, and academic growth. Our platform focuses on:</p>
<p><span className="text-lg font-bold">Showcasing Research : </span> By bringing together students, teachers, and external researchers, we encourage cross-disciplinary collaboration on innovative projects.</p>
<p className="my-3"><span className="text-lg font-bold">Supporting Collaboration : </span> We highlight groundbreaking research projects and publications from students and faculty, creating visibility for their academic work.</p>
<p><span className="text-lg font-bold">Empowering Students : </span>We provide a space for students to showcase their research and project work, helping them gain recognition and engage with the broader academic community.</p>
<p className="my-3"><span className="text-lg font-bold">Connecting Faculty & Students : </span>Our platform bridges the gap between faculty and students, providing easy access to faculty profiles, research interests, and mentorship opportunities.</p>
<p className="mb-4"><span className="text-lg font-bold">Archiving Knowledge : </span>We maintain an organized repository of publications and research work, preserving valuable academic contributions for future reference and study.</p>
                     </div> */}

                    <div className="flex justify-center items-center">

                        <div className="space-y-4 ">
                            <h2 className="text-3xl md:text-5xl text-slate-800 font-extrabold mb-8">Welcome !</h2>
                            <h3 className="text-xl md:text-3xl font-bold">What we do?</h3>
                            <h4 className="text-lg md:text-2xl font-medium">This is Data & Knowledge Engineering Lab,<Link className="" to={'https://hstu.ac.bd/'}><span className="text-green-600">HSTU-Dinajpur.</span></Link></h4>
                            <p className="font-medium text-lg">
                                Cultivating leaders of challenge and exploration that will change the world is both (Engineering) Lab's historical mission and its pride. </p>
                        </div>
                    </div>


                    <div className=" m-0 p-0 flex justify-center items-center">

                        <img className="rounded-lg " src="/tanjilaMem.jpg" alt="teachers pic" />

                    </div>

                </div>



            </div>
        </div>
    );
};

export default Home;