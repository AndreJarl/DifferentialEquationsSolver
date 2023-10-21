import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Classification from "./components/Classi"
import GrowthDecay from "./components/GrowthDecay"
import Linear from "./components/LinearApp"
function Home(){
     return (
        <>
        <Navbar/>
        <Hero/>
        <Classification/>
        <GrowthDecay/>
        <Linear/>
        <Footer/>
        </>
     )
}

export default Home