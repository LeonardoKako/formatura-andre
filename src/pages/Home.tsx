import { About } from "../components/About";
import { Clock } from "../components/Clock";
import { ConfirmPresence } from "../components/ConfirmPresence";
import { Footer } from "../components/Footer";
import { Locations } from "../components/Locations";
import { NavBar } from "../components/NavBar";
import { SaveTheDate } from "../components/SaveTheDate";

export function Home() {
  return (
    <>
      <NavBar />
      <SaveTheDate />
      <Clock />
      <About />
      <Locations />
      <ConfirmPresence />
      <Footer />
    </>
  );
}
