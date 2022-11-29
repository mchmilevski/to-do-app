import "./styles/App.scss";
import ToDo from "./components/Todo/ToDo.component";
import HeaderImage from "./assets/bg-desktop-dark.jpg";

function App() {
  return (
    <div>
      <img style={{ width: "100%" }} src={HeaderImage} />
      <ToDo />
     </div>
  );
}

export default App;
