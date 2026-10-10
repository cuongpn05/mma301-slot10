import { Text, View } from "react-native";
import ErrorBoundary from "./ErrorBoundary";

// Component cố tình gây lỗi
function BrokenContent() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{undefinedVariable}</Text>
    </View>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrokenContent />
    </ErrorBoundary>
  );
}
