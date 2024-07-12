import { Text, TextInput, View } from "react-native";
import { s } from "./TemperatureDisplay.style.js";

export function TemperatureDisplay({ value, unit }) {
  return (
    <Text style={s.text}>
      {value} {unit}
    </Text>
  );
}
