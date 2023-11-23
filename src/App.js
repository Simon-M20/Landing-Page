import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import Trends from "./Components/Trends/Trends";

function App() {
    return (
        <>
            <Hero />
            <main>
                <Section />
                <Trends />
            </main>
            <Footer />
        </>
    );
}

export default App;
