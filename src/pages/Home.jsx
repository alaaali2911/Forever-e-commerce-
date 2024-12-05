import BestSeller from "../components/BestSeller";

import Hero from "../components/Hero";
import LastCollection from "../components/LastCollection";
import NewsLetterBox from "../components/NewsLetterBox";
import OurPolicy from "../components/OurPolicy";

function Home() {
  return (
    <div>
      <Hero />
      <LastCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
}

export default Home;
