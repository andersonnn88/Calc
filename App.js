import React, { useState, useEffect } from 'react'
import { Modal, View, TextInput, StyleSheet, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import lista from './src/lista'
import AddItem from './components/AddItem';


export default () => {
  const [items, setItems] = useState([])
  const [item, setItem] = useState('');
  const [total, setTotal] = useState('');
  const [modalVisible, setModalVisible] = useState(false)

  const handleLimpar = () => {
    //alert('Alert with one button');
    setModalVisible(true)
  }
  const formataDinheiro = (n) => {
    return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    }
  const handleSubbmit = () => {

    if (item.trim() != '') {
      let ites = [...items];
      ites.push({
        task: parseFloat(item).toFixed(2),

      })
      ites.sort().reverse();
      setItems(ites);
      setItem('');

      let valor = 0;
      ites.forEach(function (ite, indice, array) {
        valor += parseFloat(ite.task);
      })
      valor = formataDinheiro(valor)
      console.log(valor)
      setTotal(valor)
     
    }

  }

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={()=>setModalVisible(false)}
      >
        <View style={styles.box}>
          <View style={styles.boxBody}>
            <Text style={{textAlign:"center", paddingTop:10,paddingBottom:'15%', fontSize:20}}>Deseja Limpar?</Text>
            <View style={{ width:"70%", height:60, flexDirection:"row"}}>
              
              <View style={
                {flex:1,
                  flexDirection:"row",
                  justifyContent:"space-around"

              }} >             
              <TouchableOpacity  
              onPress={() =>{
              setItems([]), 
              setModalVisible(false),
              setTotal('')
              } } style={styles.botaoModal}>
                <Text style={{textAlign:"center"}}>SIM</Text>
              </TouchableOpacity>
        
              <TouchableOpacity onPress={() =>{setModalVisible(false)} }  style={styles.botaoModal}>
                <Text style={{textAlign:"center"}}>NAO</Text>
              </TouchableOpacity>
              </View>
        
            </View>
          </View>
        </View>
      </Modal>

      <Text style={styles.header}>Calculadora de Mercado</Text>
      {/* <AddItem  items={items} setItems={setItems}/> */}
      <View style={styles.area}>
        <TextInput
          placeholder="Novo produto"
          keyboardType="numeric"
          style={styles.textinput}
          value={item}
          onChangeText={e => setItem(e)}
          //clicou em enviar executa função abaixo
          onSubmitEditing={handleSubbmit}
          returnKeyType="send"
        />
      </View>
      <View style={styles.resultado}>
        <Text style={styles.textresult}>{total}</Text>
      </View>

      <ScrollView style={styles.scroll} >

        {items.map((item, index) => {

          return (

            <TouchableOpacity activeOpacity={0.3} key={index} style={styles.viewlista}>
              <>
                <Text style={styles.testItem} >{formataDinheiro(parseFloat(item.task))}</Text>
                <View style={styles.viewBolinha}></View>
              </>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.botaoArea}>
        <TouchableOpacity style={styles.botao}
          onPress={handleLimpar}
        >
          <Text style={styles.textBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    //alignItems: "center"

  },
  header: {
    fontSize: 25,
    marginTop: 30,
    textAlign: "center"
  },
  viewlista: {
    padding: 10,
    flexDirection: "row"

  },
  scroll: {
    maxHeight: 300,

  },
  testItem: {
    fontSize: 20,
    flex: 1

  },
  viewBolinha: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    //borderColor:"#FFF"
  },
  area: {
    backgroundColor: "#CCC",
    padding: 10
  },
  textinput: {
    backgroundColor: "#FFF",
    fontSize: 25,
    height: 50,
    borderRadius: 5,
    padding: 10
  },
  resultado: {
    backgroundColor: "#FFF",
    fontSize: 25,
    height: 50,
    borderRadius: 5,
    padding: 10

  },
  textresult: {
    fontSize: 25,
    textAlign: "center"
  },
  botao: {
    backgroundColor: '#CCC',
    borderRadius: 5,
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center"


  },
  botaoArea: {
    width: '100%',
    alignItems: "center"
  },
  textBotao: {
    fontSize: 25,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    //alignSelf: "center",
    justifyContent:"center",
    alignItems:"center"
  },
  boxBody:{
    width:'70%',
    height:150,
    backgroundColor:"#FFF",
    borderRadius:10,
    alignItems:"center",

  },
  botaoModal:{
    width: 70,
    height:40,
    borderColor:"#000",
    borderRadius:5,
    borderWidth:2,
    justifyContent:"center"
  }


})