import './App.css';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <h1>Fathomcurve Tackle</h1>
      <HeaderContainer />
      <HomeContainer />
      {/* other containers can be added here <HomeContainer /> */}
    </div>
  );
}

export default App;
