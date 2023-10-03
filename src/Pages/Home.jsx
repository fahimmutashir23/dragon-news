import LeftContent from "../Shared/Content/LeftSide/LeftContent";
import MainContent from "../Shared/Content/Main/MainContent";
import RightContent from "../Shared/Content/RightSide/RightContent";
import Header from "../Shared/Header/Header";
import Marque from "../Shared/Marque/Marque";
import NavBar from "../Shared/Navbar/NavBar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Marque></Marque>
            <NavBar></NavBar>
            <div className="grid grid-cols-4 gap-4 mt-3">
                <div className="mx-auto"><LeftContent></LeftContent></div>
                <div className="col-span-2 mx-auto"><MainContent></MainContent></div>
                <div className="mx-auto"><RightContent></RightContent></div>
            </div>            
        </div>
    );
};

export default Home;