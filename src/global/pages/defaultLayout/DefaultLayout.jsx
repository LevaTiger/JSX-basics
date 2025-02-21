import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

const DefaultLayout =()=>{

    return(
        <div>
            <Header />
                <Outlet />
            <Footer />
        </div>
    )
}

export default DefaultLayout;