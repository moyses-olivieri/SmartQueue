import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { css } from "../assets/CSS/Css";

export default function Telainicial({ navigation }) {
  return (
    <View style={css.container3}>
      <View>
        <Text style={css.texto_inicial}>POSSUI AGENDAMENTOS?</Text>

        <TouchableOpacity
          style={css.yes__button}
          onPress={() => navigation.navigate("Agendamentos")}
        >
          <Text style={css.yes__buttonText}>SIM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={css.no__button}
          onPress={() => setDisplay("flex")}
        >
          <Text style={css.no__buttonText}>NÃO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
