import "../styles/styles.css"
import "lazysizes"

// React Related Code Goes Here
import React from "react"
import ReactDOM from "react-dom"

// Import React components that we created
import MyAmazingComponent from "./modules/MyAmazingComponent"

ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example"))

if (module.hot) {
  module.hot.accept()
}
