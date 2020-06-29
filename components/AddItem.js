import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity, ScrollView } from 'react-native'

export default (props)=>{
    const [item , setItem] =useState('');
    const [items, setItems] = useState(props.items); 
    const [tip, setTip] = useState(0);
    

        //const total = items.reduce((a, b) => a +=  b.task, 0)
        //console.log(total)
        
  

    const handleSubbmit = () =>{
        if(item.trim() != ''){ 
            let items = [...props.items];
            items.push({
                task:item.trim(),
                done: false
            })
            const t = items.task
            console.log(items[0].toString())
         
        
            props.setItems(items);
            
            
            }

        setItem('');
    }

    return(
        <>
        <View style={styles.area}>
            <TextInput
            placeholder="Novo produto"
            keyboardType="numeric"
            style={styles.textinput}
            value={item}
            onChangeText={e=>setItem(e)}
            //clicou em enviar executa função abaixo
            onSubmitEditing={handleSubbmit}
            returnKeyType="send"

            />

            
            

        </View>
        <View style={styles.resultado}>
            <Text>teste</Text>
        </View>
        </>
   
    );
}

const styles = StyleSheet.create({
    area: {
        backgroundColor: "#CCC",
        padding:10
    },
    textinput:{
        backgroundColor:"#FFF",
        fontSize:25,
        height:50,
        borderRadius:5,
        padding:10
    },
    resultado:{
      backgroundColor:"#FFF",
      fontSize:25,
      height:50,
      borderRadius:5,
      padding:10 
  }
    
});