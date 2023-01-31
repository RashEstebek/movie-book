import "./styles/main.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
