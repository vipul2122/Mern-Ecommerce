import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";
import Footer from "../features/common/Footer";

function ProductDetailPage() {
    return ( 
        <div>
                 <NavBar></NavBar>
                <ProductDetail></ProductDetail>
           
            <Footer></Footer>
        </div>
     );
}

export default ProductDetailPage;