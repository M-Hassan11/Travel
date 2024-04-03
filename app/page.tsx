import HomePage from "./Components/view/Home";
import CardsSec from "./Pages/Cards";
import Flight from "./Pages/Flight";
import SecondSec from "./Pages/SecondSec";


export default function Home() {
  return (
    <main>
      <HomePage />
      <SecondSec />
      <CardsSec />
      <Flight />
    </main>
  );
}
