import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";   
import MyPortfolio from "../MyPortifolio";
import MySkills from "../MySkilss";
import Navbar from "../NavBar";

export default function Home(){
    return (
        <>
         <Navbar /> 
          <HeroSection />
          <MySkills />
          <AboutMe /> 
          <MyPortfolio/>  
        </>
    );  
}