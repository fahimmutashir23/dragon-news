import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="bg-slate-100 p-4 flex mt-6">
            <div className="bg-red-700 px-5 py-2 text-white max-w-min">
                Latest
            </div>
            <Marquee pauseOnHover={true} speed={100}>
             <p>Match Highlights: Germany vs Spain — as it happened!</p>
             <p className="ml-11">Match Highlights: Germany vs Spain — as it happened!</p>
            </Marquee>
        </div>
    );
};

export default Marque;