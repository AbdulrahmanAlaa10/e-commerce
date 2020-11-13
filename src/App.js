import React, { Component, Fragment } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Content from "./Content";
import "./Content.css";

firebase.initializeApp({
  apiKey: "AIzaSyBmNl09LKQjZ6ZSyYDEqW1DcVIMot7BkrE",
  authDomain: "auth-app-35857.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (


      <div className="Apppp">
        {this.state.isSignedIn ? (
          <span>
            <div className="gdgjkdsn">
            <button onClick={() => firebase.auth().signOut()} className="btntnt btn btn-outline-info" style={{float:"right", clear:"both"}}>Sign out!</button>
            <h5 className="heading1">Welcome {firebase.auth().currentUser.displayName}</h5>
            </div>

            <Content/>
          </span>
        ) : (
          
          <StyledFirebaseAuth

            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            
          />
          
        )}


        <footer className="footer">
            <div className="container Abodt">

            <div className="col-md-6 col-lg-6">
                <h1>About us</h1>
                <p>iCareer We are, thanks to God, an initiative and we have more than one channel spreading the field of web programming for free We make every effort to get at least one person capable of developing websites</p>

            </div>

            <div className="col-md-6 col-lg-6">
                <h1>Contact us</h1>
                <i className="fa fa-map-marker icooooon" aria-hidden="true"><span>Place: Egypt Cairo 6 Octobar 47 street</span></i>
                <br />
                <i className="fa fa-phone-square icooooon" aria-hidden="true"><span>Phone: 0201008698567</span></i>
                <br />
                <i className="fa fa-envelope icooooon" aria-hidden="true"><span>E-mail: Abdulrahmaanalaa199@gmail.com</span></i>

            </div>

            </div>
        </footer>

      </div>



      

      
      
    )
  }
}

export default App