import React from "react";
import { TextInput, Text, View, Button, TouchableOpacity } from "react-native";
import { css } from "../assets/CSS/Css";

export default function Carregamento({ navigation }) {
  return (
    <View style={css.container3}>
      <View>
        <Text style={css.texto_inicial}>SUA POSIÇÃO NA FILA É:</Text>
        <TextInput
          style={css.texto_agendamentos}
          placeholder="Posição xxxxx:"
        ></TextInput>
        <TextInput
          style={css.texto_agendamentos}
          placeholder="Posição xxxxx:"
        ></TextInput>
        <TextInput
          style={css.texto_agendamentos}
          placeholder="Posição xxxxx:"
        ></TextInput>
        <TextInput
          style={css.texto_agendamentos}
          placeholder="Posição xxxxx:"
        ></TextInput>

        <TouchableOpacity
          style={css.novo__button}
          onPress={() => navigation.navigate("Telainicial")}
        >
          <Text style={css.novo__buttonText}>VOLTAR PARA O INÍCIO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
