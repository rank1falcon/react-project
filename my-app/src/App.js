import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import { Container } from "./components/index";
import { Header, Footer } from "./sections/index";
import { Home, Profile, Browse, Streams, Details } from "./Pages/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/browse' element={<Browse />} />
                <Route path='/streams' element={<Streams />} />
                <Route path='/details' element={<Details />} />
            </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
