import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import ResultImc from "../ResultImc";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
    const [imc,setImc] = useState(null)
    const [TextButton, setTextButton] = useState('Calcular')


    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validation(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
        }else{
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
        }
    }

    return(
        <View>
            <View>
                
                <Text style={styles.innerText}>Altura</Text>
                <TextInput 
                onChangeText={setHeight} 
                value={height}
                style={styles.innerTextInput} 
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                />
                
                <Text style={styles.innerText}>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                style={styles.innerTextInput}
                placeholder="Ex: 75.345"
                keyboardType="numeric"
                />

                <Button 
                onPress={()=>validation()}
                title={TextButton}/>

            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        color: 'red',
        fontWeight: 'bold',
    },
    innerTextInput: {
        color: 'red',
    }
});
