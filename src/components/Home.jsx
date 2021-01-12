import '../App.scss'
import Hero from './sections/Hero'
import Nav from './Nav'
import Mission from './sections/Mission'
import More from './sections/More'
import Help from './sections/Help'
import TheWay from './sections/TheWay'
// import Mission from './sections/Mission'

// import Solution from './sections/Solution'
// import Impact from './sections/Impact'
// import Contact from './sections/Contact'
// import GoodAlways from './GoodAlways'

function Home() {
  return (
    <div className="App">
      <Nav />
        <Hero />
        <Mission/>
        <Help />
        <More />
        <TheWay />

    </div>
  );
}

export default Home;
