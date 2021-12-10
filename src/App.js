import 'assets/scss/style.scss';
import Landingpage from 'pages/Landingpage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Landingpage}></Route>
      </Router>
    </div>
  );
}

export default App;
