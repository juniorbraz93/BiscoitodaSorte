import React, { useState } from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, TouchableOpacityBase, Alert} from 'react-native';

let phrases = [
  'Siga os bons e aprenda com eles.', 
  'O bom-senso vale mais do que muito conhecimento.', 
  'O riso é a menor distância entre duas pessoas.', 
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.'
]

function App() {
  const [img, SetImg] = useState(require('./src/image/biscoito.png'))

  const [phraseText, setPhraseText] = useState('')

  function cookieBreak() {
    let number = Math.floor(Math.random() * phrases.length)

    setPhraseText(`" ${phrases[number]} "`)
    SetImg(require('./src/image/biscoitoAberto.png'))
  }

  function resetCookie() {
    setPhraseText('')
    SetImg(require('./src/image/biscoito.png'))
  }

  return (
    <View style={styles.conteiner}>
      <Image source={img} style={styles.img} />

      <Text style={styles.text}>{phraseText}</Text>

      <TouchableOpacity style={styles.button} onPress={ cookieBreak }>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { marginTop: 15, borderColor: '#121212' }]} onPress={ resetCookie }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: "#121212" }]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  text: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    height: 50,
    width: 230,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});

export default App;
