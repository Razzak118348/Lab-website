import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { FaArrowRight } from "react-icons/fa";
import 'animate.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="p-6 md:p-16 mx-5 md:mx-20">

                {/* welcome section  */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-20 lg:gap-32 font ">


                    <div className="flex justify-center items-center animate__animated animate__lightSpeedInLeft">

                        <div className="space-y-4 ">
                            <h2 className="text-3xl md:text-5xl text-slate-800 font-extrabold mb-8">Welcome !</h2>
                            <h3 className="text-xl md:text-3xl font-bold">What we do?</h3>
                            <h4 className="text-lg md:text-2xl font-medium">This is Data & Knowledge Engineering Lab,<Link className="" to={'https://hstu.ac.bd/'}><span className="text-green-600">HSTU-Dinajpur.</span></Link></h4>
                            <p className="font-medium text-lg">
                                Cultivating leaders of challenge and exploration that will change the world is both (Engineering) Lab's historical mission and its pride. </p>

                               <Link  to={'/teachers'}><button className="btn mt-8 text-lg font-bold bg-yellow-400 text-black hover:text-black">All Professors <FaArrowRight /></button></Link>
                        </div>
                    </div>


                    <div className=" m-0 p-0 flex justify-center items-center animate__animated animate__fadeInRight">

                       <Link to={'/teachers'}><img className="rounded-lg shadow-lg shadow-slate-700 hover:scale-125 hover:my-5" src="/tanjilaMem.jpg" alt="teachers pic" /></Link>

                    </div>

                </div>



            </div>
        </div>
    );
};

export default Home;