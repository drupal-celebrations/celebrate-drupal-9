import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {

  render() {
    return (
      <h2>
        {this.props.text}
      </h2>
  );
  }

}

ReactDOM.render(<Greeting text="Hi from React!" />, document.getElementById('page'));
