import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'



export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [percent, setPercent] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill != '') {
      setTip( nBill * (percent / 100) )

    } else {
      alert("Digite o valor a ser calculado")
    }

  }
  useEffect(()=>{
    calc()
  }, [percent])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de Gorjeta</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Valor total da conta"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />
      <View style={styles.pctArea}>
        <TouchableOpacity style={styles.buttonItem} onPress={()=>setPercent(5)} ><Text style={styles.itemText}>5%</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonItem} onPress={()=>setPercent(10)} ><Text style={styles.itemText}>10%</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonItem} onPress={()=>setPercent(15)} ><Text style={styles.itemText}>15%</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonItem} onPress={()=>setPercent(20)} ><Text style={styles.itemText}>20%</Text></TouchableOpacity>
      </View>
      
      <Button
        style={styles.button}
        title={`Calcular ${percent}%`}
        onPress={calc}
      />
      { tip > 0 &&
      <View style={styles.resultArea}>
        <Text>Valor da conta:</Text>
        <Text>R$: {parseFloat(bill).toFixed(2)}</Text>
        <Text>Valor da Gorjeta:</Text>
        <Text>R$: {`${tip.toFixed(2)} (${percent}%)`}</Text>
        <Text>Valor Total:</Text>
        <Text>R$: {(parseFloat(bill) + tip).toFixed(2)}</Text>
      </View>
      }
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"

  },
  header: {
    fontSize: 25,
    marginTop: 30
  },
  TextInput: {
    width: 200,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginTop: 20
  },
  button: {
    marginTop: 20
  },
  resultArea: {
    marginTop: 30,
    backgroundColor: "#EEE",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 0.5,
    width: 200
  },
  quadrado: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10

  },
  pctArea:{
    flexDirection:"row",
    margin:20,
  },
  buttonItem:{
    width: 70,
    height: 40,
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10,
    margin:5,
    backgroundColor:"#EEE",
    justifyContent:"center"
  }, 
  itemText:{
    textAlign:'center',
    fontSize:20,
    

  }

})