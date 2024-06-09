
import Hero from "../components/herosection";
import Clients from "../components/Clients";
import AboutUs from "./about/About";
import Counts from "./about/Counts";
import Services from "../components/services";
import Features from "@/components/featuresSections";
import MoreServices from "@/components/moreServices";
import ContactForm from "./contact/ContactForm";

export default function Home() {
  return (
  <>
  <Hero/>
  <Clients/>
  <AboutUs/>
  <Counts/>
  <Services/>
  <MoreServices/>
  <Features/>
  <ContactForm/>
  </>
  );
}
