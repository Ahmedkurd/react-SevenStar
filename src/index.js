import React from "react";
import ReactDOM from "react-dom";
import AddSubject from "./components/AddSubject";
import contentSubject from './components/contentSubject';

ReactDOM.render(
    <AddSubject/>,
    document.getElementById('app')
  );
ReactDOM.render(
  <contentSubject/>,
  document.getElementById('content')
);