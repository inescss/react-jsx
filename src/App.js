import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import image from "./img/sport.jpg";
import vedeo from "./vidio/video1.mp4";
//import "./components/styles/styles";


function App() {
  return (
    <div className="App">
     <div style={{border:"solid 5px black",maxWidth:'400vw' ,backgroundColor:"#E7E9EB" }}>

      <h1 className="title red" style={{textAlign:"center", color: "red"}}>Your name here</h1>
      

      <img className="image" src={image} width="250" height="250"   alt=""/> 
      <br/>
      <img  className="image" src="./images/img.jpg" width="250" height="250" alt=""/> 
      

      <video clasName="videoo" controls src={vedeo} width="320"  height="240" type=""/>
     
      </div>

    </div>
  );
}

export default App;
