import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa"; //font awesome
import "./Icon.css";

function Icon({ name }) {
    if (name == "circle") {
        return <FaRegCircle className="icon"></FaRegCircle>;
    } else if (name == "cross") {
        return <FaTimes className="icon"></FaTimes>;
    } else {
        return <FaPen className="icon"></FaPen>;
    }
}
export default Icon;
