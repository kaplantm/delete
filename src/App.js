import logo from "./logo.svg";
import "./App.css";
import { ReactComponent as BackpackSvg } from "./assets/images/backpack.svg";

const Backpack = ({ Image }: BackpackTemplateProps) => {
  return (
    <div className="backpack-wrapper">
      <BackpackSvg />
      <Image />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Backpack Image={BackpackSvg} />
    </div>
  );
}

export default App;
