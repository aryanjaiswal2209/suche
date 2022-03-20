import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { globalstyle } from "./GlobalStyling";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { ProductData, ProductDataTwo } from "./components/Products/Data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import FormSuccess from './FormSuccess'
import Form from "./Form";
import submitForm from './Form'
import isSubmitted from './Form'
import Opnenings from "./Openings";
import { OpeningsData } from "./OpeningsData";
import ContactUsMain from "./ContacUsMain"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <globalstyle />
          <Hero />
          <Products heading="Specialities" data={ProductData} />
          <Products data={ProductDataTwo} />

          <Feature />

          <Footer />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Form" to='/'>

          <Form />
          {!isSubmitted ? (<Form submitForm={submitForm}/>) : (<FormSuccess/>)}
          
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Openings">
          <Opnenings  data={OpeningsData} />
        </Route>
      </Switch>
      
      <Switch>
        <Route exact path="/ContactUsMain">
          <ContactUsMain />
        </Route>
      </Switch>
      
      
    </Router>
  );
}

export default App;
