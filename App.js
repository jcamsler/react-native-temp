import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";

export default function App() {
  return (
    <ImageBackground style={s.container} source={hotBackground}>
      <View style={s.workspace}>
        <TemperatureDisplay value="1234" unit="°C" />
        <InputTemperature defaultValue={"12"} />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
