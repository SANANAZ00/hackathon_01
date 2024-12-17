import Anounce from "./components/anouncement";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Fonts from "./components/fonts";
import Products from "./products/page";


export default function Home() {
  return (
    <div>
      <Anounce />
      <Header />
      <Hero />
      <Fonts />
      <Products/>

    </div>
  );
}
