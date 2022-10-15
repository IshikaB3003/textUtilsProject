
// import './App.css';

import React, {useState} from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert  from "./components/Alert";

// let name="Ishika";
function App() {
  const[mode,setMode] = useState('light');//whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#001c5f'
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success");
    }
  }

  return (
                  // <>
                  // <h1>This is a sepearte jsx fragment</h1>
                  // <div classNameNameName="App">
                  //   <header classNameNameName="App-header">
                  //     <img src={logo} classNameNameName="App-logo" alt="logo" />
                  //     <p>
                  //       Edit <code>src/App.js</code> and save to reload.
                  //     </p>
                  //     <a
                  //       classNameNameName="App-link"
                  //       href="https://reactjs.org"
                  //       target="_blank"
                  //       rel="noopener noreferrer"
                  //     >
                  //       Learn React E HERE
                  //     </a>
                  //   </header>
                  // </div>
                  // </>

      // <>
      // <nav>
      //   <li>Home</li>
      //   <li>About</li>
      //   <li>Contact</li>
      // </nav>
      // <div classNameNameName="container">
      //   <h1>Hie {name}</h1>
      //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at architecto incidunt, minima repellat nisi, delectus dolor quas fuga suscipit sit animi. Fugit reprehenderit voluptatibus ut minima. Nam, quo dolorum.</p>

      // </div>
      // </>
      // <div classNameNameName="blank">Lovely</div>

      <>
      {/* <Navbar title="Textutils" aboutText="About textutils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to be anaylsed" mode={mode}/>
        {/* <About/> */}
      </div>
      </>



  );
}

export default App;
