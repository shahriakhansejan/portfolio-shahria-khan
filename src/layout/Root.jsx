import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav/Nav";
import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;