import Beneficios from "./components/Beneficios";
import Contato from "./components/Contato";
import Equipamentos from "./components/Equipamentos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Videos from "./components/Videos";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Equipamentos />
        <Videos />
        <Sobre />
        <Servicos />
        <Beneficios />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
