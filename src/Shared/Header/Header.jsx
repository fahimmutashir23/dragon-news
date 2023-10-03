import logo from "../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="text-center mt-12">
                <img src={logo} alt="" className="mx-auto mb-5" />
                <p className="text-xl mb-2">Journalism Without Fear or Favour</p>
                <p className="text-lg font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;