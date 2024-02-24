import HeaderPart2 from "../components/HeaderPart2/HeaderPart2";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UsedDailyBySection3 from "@/components/UsedDailyBySection3";
import BrightLocalSection4 from "@/components/BrightLocalSection4";
import BrightLocalRankingSection6 from "@/components/BrightLocalRankingSection6";
import WhyBrightLocal from "@/components/WhyBrightLocal";
import WhenLocalSEO from "@/components/WhenLocalSEO";
import WhereLocalSEO from "@/components/WhereLocalSEO";

export default function Home() {
  return (
    <>
      <Header />
      <HeaderPart2 />
      <UsedDailyBySection3 />
      <BrightLocalSection4 />
      <WhyBrightLocal />
      <BrightLocalRankingSection6 />
      <WhenLocalSEO />
      <WhereLocalSEO />
      <Footer />
    </>
  );
}
