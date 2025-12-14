import TitleSection from "../components/Titlesection";
import SkillsBanner from "../components/SkillsBanner";
import RecentWork from "../components/RecentWork";
import GetIT from "../components/GetIT";
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <>
      <TitleSection title="Mateo" />
      <SkillsBanner />
      <RecentWork/>
      <GetIT />
      <Footer />
    </>
  );
};

export default HomePage;
