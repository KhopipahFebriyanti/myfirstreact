import "./App.css";
import React from "react";
import Container from "./components/container/Container";
import ConCard from "./components/containerCard/ConCard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="App">
        <Container bgColor="cyan" title="My title" body="ini adalah body" />

        <Container
          bgColor="yellow"
          title="Hello Khopipah...."
          body="Semangat... Kamu pasti bisa"
        >
          <img src="https://picsum.photos/seed/38238e/200" alt="" />
        </Container>

        <Container
          bgColor="lightgreen"
          title="Dear kalian"
          body="Selama keburukan seseorang tidak merugikanmu, maka itu bukan urusanmu.
        Boleh menasehati, tapi bukan berarti menghakimi"
        >
          <img src="https://picsum.photos/seed/245o97/200" alt="" />

          <h1>ini dari perent</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore eveniet nam atque iusto odio totam hic. Illum harum
            blanditiis, optio tempora cum magni fuga nesciunt consequuntur
            voluptates beatae dignissimos!
          </p>
        </Container>

        <ConCard />
      </main>
    </>
  );
}
export default App;

/*import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Container from "./components/container/Container";
const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Container />

      <Footer />
    </div>
  );
};

export default App;*/
