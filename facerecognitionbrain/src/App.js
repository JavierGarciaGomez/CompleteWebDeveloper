import "./App.css";
import FaceRecognition from "./components/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm";
import Logo from "./components/Logo";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Logo></Logo>
      <ImageLinkForm></ImageLinkForm>
      <FaceRecognition></FaceRecognition>
    </div>
  );
}

export default App;
