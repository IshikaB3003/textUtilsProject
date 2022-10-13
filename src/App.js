
// import './App.css';


import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// let name="Ishika";
function App() {
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
      <Navbar title="Textutils" aboutText="About textutils"/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to be anaylsed"/>
      </div>
      </>



  );
}

export default App;
