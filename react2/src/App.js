import data from './data';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import ProductScreen from './Pages/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavbarBrand } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavbarBrand>amazon</NavbarBrand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
