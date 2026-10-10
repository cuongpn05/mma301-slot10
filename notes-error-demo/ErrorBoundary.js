import React from "react";
import { Text } from "react-native";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught:", error?.message);
    console.log("Component stack:", info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <Text>Có lỗi giao diện xảy ra</Text>;
    }

    return this.props.children;
  }
}
