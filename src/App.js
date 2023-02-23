import Main from './components/Main';
import Card from './components/Card';
import Mid from './components/Mid';
import TitleBar from './components/TitleBar'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Main />
      <Mid />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
