import React from 'react';

import {
    View,
    Button
} from 'react-native';

import { Actions } from 'react-native-router-flux';

function Inicio() {
    return (
        <View style={{flex:1,justifyContent:'center',marginHorizontal:15}}>
            <Button 
                title='Ejemplo Camara'
                onPress={ () => Actions.camara() }
            />
        </View>
    )
}

export default Inicio;