import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderTop from "./Pages/Shared/HeaderTop/HeaderTop";
import Home from "./Pages/Home/Home/Home";
import HeaderMain from "./Pages/Shared/HeaderMain/HeaderMain";
import FooterLinks from "./Pages/Shared/FooterLinks/FooterLinks";
import FooterCopyRight from "./Pages/Shared/FooterCopyRight/FooterCopyRight";
import Contact from "./Pages/ContactUs/Contact/Contact";
import Blog from "./Pages/Blog/Blog/Blog";
import Portfolio from "./Pages/Portfolio/Portfolio/Portfolio";
import AboutUs from "./Pages/Company/AboutUs/AboutUs";
import WhyChooseUs from "./Pages/Company/WhyChooseUs/WhyChooseUs";
import OurServices from "./Pages/Company/OurServices/OurServices";
import SingleService from "./Pages/Company/SingleService/SingleService";
import OurTeam from "./Pages/Company/OurTeam/OurTeam";
import TeamDetails from "./Pages/Company/TeamDetails/TeamDetails";
import Pricing from "./Pages/Company/Pricing/Pricing";
import Faq from "./Pages/Company/Faq/Faq";
import ITServices from "./Pages/Services/ITServices/ITServices";
import WebDevelopment from "./Pages/Services/WebDevelopment/WebDevelopment";

function App() {
  return (
    <div className="">
      <Router>
        <HeaderTop />
        <HeaderMain />
        <Routes>
          {/* home route */}
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />

          {/* company route */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/single-service" element={<SingleService />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />

          {/* Service route */}
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/web-development" element={<WebDevelopment />} />
        </Routes>
        <FooterLinks />
        <FooterCopyRight />
      </Router>
    </div>
  );
}

export default App;
