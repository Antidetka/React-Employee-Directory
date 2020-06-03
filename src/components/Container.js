import API from "./utils/API";
import React, { Component } from "react"
import TableData from "./TableData"


class Container extends Component {

    // Setting the component's initial state
    //search starts as an empty string
    //employess and filteredEmployess are empty arrays because that it's the structure of the data we'll be working with
    //order it's to reference the order that the employees are. By defaltu they come randonly and the first click will trigger then to be in asc order
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""

    };
}
export default Container