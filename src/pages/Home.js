import HeroSection from "../components/Herosection.js";
import ImproveSkills from "../components/improveskills.js";
import QuoteSection from "../components/Quotesection.js";
import ChiefSection from "../components/Chiefsection.js";

export default function Home(){
    return (
        <div>
            <HeroSection />
            <ImproveSkills />
            <QuoteSection />
            <ChiefSection />
        </div>
    )
}