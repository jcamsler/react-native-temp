import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { useState } from "react";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNIT } from "./constant";
import {
  getOppositUnit,
  convertTemperatureTo,
} from "./services/temperature-services";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositUnit(currentUnit);

  console.log(inputValue);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    console.log("valueAsFloat:" + valueAsFloat);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  return (
    <ImageBackground style={s.container} source={hotBackground}>
      <View style={s.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
        />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
