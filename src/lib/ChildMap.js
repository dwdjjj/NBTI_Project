import React from "react";

class ChildMap extends React.Component {
  static defaultProps = {
    test: [],
  };

  render() {
    const renderArr = (arrayProps) => {
      return arrayProps.map((q, i) => {
        return <div key={i}>{q}</div>;
      });
    };

    return <div>{renderArr(this.props.test)}</div>;
  }
}

export default ChildMap;
