import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";

function App() {
    return (
        <div id="root">
            <Header />

            <BrowserRouter>
                <Nav />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="nosotros" element={<NosotrosPage />} />
                        <Route path="novedades" element={<NovedadesPage />} />
                        <Route path="contacto" element={<ContactoPage />} />
                    </Routes>
                </main>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;


