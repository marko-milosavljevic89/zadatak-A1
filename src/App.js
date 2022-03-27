import Header from "./components/header/Header";
import New from "./components/new/New";
import Online from "./components/online/Online"
import Package from "./components/package/Package"
import Slide from "./components/slide/Slide"
import Benefits from "./components/benefits/Benefits"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <New/>
      <Package/>
      <Benefits/>
      <Online/>
      <Slide />
      <Footer/>

    </div>
  );
}

export default App;
