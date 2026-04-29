import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import RenderCardComponent from "./components/RenderCardComponent.jsx"

function App() {

  return (<div>
    <Header />
    <Main />
    <Footer />
    <RenderCardComponent
      id={1}
      series='Bimbo Gigi'
      thumb='https://url-img/#'
      />
    </div>
  )

}

export default App
