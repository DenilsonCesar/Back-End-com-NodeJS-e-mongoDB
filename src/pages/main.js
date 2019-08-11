import React, { useState } from 'react';

import { 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';


export default function pages (){

    const [user, setUser] = useState('');
    const [desc, setDesc] = useState('');

    async function cad(){
        const response = await api.post('/add',
        { name: user, description: desc});
    }

    return(
        <View>
            <TextInput value={user} onChangeText={setUser} placeholder={'Nome do DEV'}/>
            <TextInput value={desc} onChangeText={setDesc} placeholder={'Descrição do DEV'}/>
            <TouchableOpacity onPress={cad}>
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
  }
