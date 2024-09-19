import ContactUs from "@/components/landing/Contact";
import Features from "@/components/landing/Feature";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import NavBar from "@/components/landing/Navbar";
import Newslater from "@/components/landing/Newslater";
import PodcastForm from "@/components/landing/PodcastForm";

const Landing = () => {
    return (
        <main>
            <div className="relative h-[100vh] flex flex-col bg-[url('/intro-bg.jpg')] bg-cover">
                <div className="absolute inset-0 bg-black opacity-5 z-0"></div>
                <NavBar />
                <Hero />
            </div>
            <Features />
            <PodcastForm />
            <ContactUs />
            <Newslater />
            <Footer />
        </main>
    );
}

export default Landing;