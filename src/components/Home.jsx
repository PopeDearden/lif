import '../App.scss'
import Hero from './sections/Hero'
import Nav from './Nav'
import Mission from './sections/Mission'
import More from './sections/More'
import Help from './sections/Help'
import TheWay from './sections/TheWay'
import Contact from './sections/Contact'


function Home() {
  return (
    <div className="App">
      <Nav />
        <Hero />
        <Mission id="Mission"/>
        <Help id="Help"/>
        <TheWay id="TheWay" />
        <More id="More"/>
        <Contact id="Contact"/>

    </div>
  );
}

export default Home;
