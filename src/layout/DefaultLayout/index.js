import Header from "./Header";
import Foolter from "./Foolter";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
            <Foolter />
        </div>
     );
}

export default DefaultLayout;