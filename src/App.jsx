import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { GitubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GitubProvider>
      <Router>
        <div className="text-xl">
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="Ccontainer mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </GitubProvider>
  );
}

export default App;
