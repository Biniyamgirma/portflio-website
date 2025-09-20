import './App.css'
import Hero from './components/Hero'
// clip-path: polygon(0 0, 0 87%, 11% 100%, 100% 100%, 100% 17%, 96% 14%, 96% 0);
// second option for the nav item clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 72% 11%, 60% 18%, 35% 18%, 23% 11%, 1% 10%);
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
