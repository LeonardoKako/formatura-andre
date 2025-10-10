import { About } from "../components/About";
import { Clock } from "../components/Clock";
import { ConfirmPresence } from "../components/ConfirmPresence";
import { Footer } from "../components/Footer";
import { List } from "../components/List";
import { Locations } from "../components/Locations";
import { NavBar } from "../components/NavBar";
import { SaveTheDate } from "../components/SaveTheDate";

export function Home() {
  return (
    <>
      <NavBar />
      <div className='flex flex-col justify-center items-center'>
        <SaveTheDate />
        <About />
        <Clock />
        <Locations
          title='MISSA'
          desc='A missa será realizada em tal lugar tal hora'
          src='https://www.google.com/maps?q=rod.+tertuliano+brito+xavier,+688&z=14&output=embed'
        />
        <Locations
          title='FESTA'
          desc='A festa será realizada em tal lugar tal hora'
          src='https://www.google.com/maps?q=rod.+tertuliano+brito+xavier,+688&z=14&output=embed'
        />
        <List />
        <ConfirmPresence />
        <Footer />
      </div>
    </>
  );
}
