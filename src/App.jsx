import Hero from "./componants/Hero"
import Navbar from "./componants/Navbar"
import Whyus from "./componants/Whyus"
import Events from "./componants/Events"
import Book from "./componants/Book"
import Gallery from "./componants/Gallery"
import Contact from "./componants/Contact"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <main id="main">
        <Whyus/>
        <Events/>
        <Book/>
        <Gallery/>
        <Contact/>
      </main>
      <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <p>All @copyrights prashanth events</p>
        </div>
      </div>
    </div>
    <p className="text-center">@ Devoloped by <a href="https://yamakalyan3120.web.app/"> yama kalyan</a></p>
  </footer>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center">up</a>
    </>
  )
}

export default App
