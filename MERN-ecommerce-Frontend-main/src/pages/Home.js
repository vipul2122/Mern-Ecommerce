import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";

function Home() {
    return ( 
        <div>
                <NavBar></NavBar>
                <ProductList></ProductList>
          
                <Footer></Footer>
        </div>
     );
}

export default Home;