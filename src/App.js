import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/ContactUs/Contact";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App(){
  return(
    <div>
    <Router>
    {/* <Header></Header> */}
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
         <Route path="/home">
          <Home></Home>
        </Route>
         <Route path="/about">
          <About></About>
        </Route>
         <Route path="/services">
          <Services></Services>
        </Route>
         <Route path="/contact">
         <Contact></Contact>
        </Route>
         <Route path="/footer">
         <Footer></Footer>
        </Route>
         <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}
export default App;






















// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home/Home";
// import React, { createContext, useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Error from "./components/Error/Error";

// export const userContext = createContext();

// function App() {
//   const [user, setUser] = useState({
//     name: "hero alom",
//   });
//   return (
//     <div className="App">
//       <userContext.Provider value={[user, setUser]}>
//         <Router>
//           <Switch>
//             <Route exact path="/">
//               <Home></Home>
//             </Route>
//             <Route path="/home">
//               <Home></Home>
//             </Route>
//             <Route path="*">
//               <Error></Error>
//             </Route>
//           </Switch>
//         </Router>
//       </userContext.Provider>
//     </div>
//   );
// }

// export default App;
