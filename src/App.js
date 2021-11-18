// tip of the day:
/* You should import individual components like: react-bootstrap/Button rather than the entire library.
Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.
*/

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;