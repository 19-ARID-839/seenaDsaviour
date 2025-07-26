import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StakeholderSegments from "@/components/StakeholderSegments";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="seven-ps">
          <StakeholderSegments />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
