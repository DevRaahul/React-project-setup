import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("error:", error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error :", error);
    console.log("Info :", info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Somthing went wrong ...</h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props?.children;
  }
}

export default ErrorBoundary;
