import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import User from './Pages/User';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { GitubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <GitubProvider>
      <AlertProvider>
        <Router>
          <div className="text-xl">
            <div className="flex flex-col justify-between h-screen">
              <Navbar />
              <main className="Ccontainer mx-auto px-3 pb-12">
                <Alert />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </AlertProvider>
    </GitubProvider>
  );
}

export default App;
