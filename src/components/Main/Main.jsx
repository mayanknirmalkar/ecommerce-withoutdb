import ProductSection from "../ProductSection/ProductSection.jsx";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Slider from "../Slider/Slider.jsx";
import NavigateButtons from "../NavigateButtons/NavigateButtons.jsx";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <NavigateButtons></NavigateButtons>
            <ProductSection>
            </ProductSection>
            <Footer></Footer>
        </div>
    )
}

export default Main;