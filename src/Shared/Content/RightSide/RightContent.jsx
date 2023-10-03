import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
import bgImage from "../../../assets/bg.png"

const RightContent = () => {
    return (
        <div>
            <div>
                <h1 className="text-xl font-semibold mb-2">Login with</h1>
                <Link className="btn text-blue-500 btn-outline">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </Link>
                <Link className="mt-1 btn btn-outline">
                    <FaGithub></FaGithub>
                    Login with Github
                </Link>
            </div>
                        {/* find us on */}
            <div className="mt-4">
                <h1 className="text-xl font-semibold mb-2">Find us on</h1>
                <a href="https://www.facebook.com/" target=" " className="flex gap-2 items-center p-4 border rounded-t-md">
                    <FaFacebook className="text-lg text-blue-400"></FaFacebook>
                    Facebook
                </a>
                <a href="" className="flex gap-2 items-center p-4 border">
                    <FaTwitter className="text-lg text-blue-400"></FaTwitter>
                    Twitter
                </a>
                <a href="" className="flex gap-2 items-center p-4 border rounded-b-md">
                    <FaInstagram className="text-lg text-yellow-800"></FaInstagram>
                    Instagram
                </a>
            </div> 
                       {/* Q zone */}
            <div className="mt-4 bg-slate-200 py-3 px-2">
                <h1 className="text-xl font-semibold mb-2">Q-zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>  

            <div>
                <div className="px-10 py-20 text-white text-center space-y-6 mt-4" style={{backgroundImage: `url(${bgImage})`}}>
                    <h1 className="text-white text-3xl font-bold"> Create an Amazing Newspaper</h1>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="btn rounded-none border-none text-white bg-red-600 p-4">Learn More</button>
                </div>
            </div>         
        </div>
    );
};

export default RightContent;