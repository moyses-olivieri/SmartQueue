import React from "react";
import { TextInput, Text, View, Button, TouchableOpacity } from "react-native";
import { css } from "../assets/CSS/Css";

export default function Agendamento({ navigation }) {
  return (
    <View style={css.container3}>
      <View>
        <Text style={css.texto_inicial}>INFORMAÇÕES</Text>
        <TextInput
          style={css.texto_agendamentos}
          placeholder="Cliente:"
        ></TextInput>
        <TextInput
          style={css.texto_agendamentos}
          placeholder="Compartimentos:"
        ></TextInput>
        <TextInput
          style={css.texto_agendamentos}
          placeholder="Tipo de Combustível:"
        ></TextInput>
        <TextInput
          style={css.texto_agendamentos}
          placeholder="Volume de Combustível:"
        ></TextInput>

        <TouchableOpacity
          style={css.carregar__button}
          onPress={() => navigation.navigate("Fila")}
        >
          <Text style={css.carregar__buttonText}>CARREGAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={css.novo__button}
          onPress={() => setDisplay("flex")}
        >
          <Text style={css.novo__buttonText}>AGUARDAR AGENDAMENTO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
