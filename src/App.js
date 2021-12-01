import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HeaderTop from './Pages/Shared/HeaderTop/HeaderTop';
import Home from './Pages/Home/Home/Home';
import HeaderMain from './Pages/Shared/HeaderMain/HeaderMain';
import FooterLinks from './Pages/Shared/FooterLinks/FooterLinks';
import FooterCopyRight from './Pages/Shared/FooterCopyRight/FooterCopyRight';

function App() {
  return (
    <div className="">
      <Router>
        <HeaderTop />
        <HeaderMain />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
        <FooterLinks />
        <FooterCopyRight />
      </Router>


    </div>
  );
}

export default App;
