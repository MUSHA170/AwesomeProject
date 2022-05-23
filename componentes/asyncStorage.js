import React from 'react';
import { StyleSheet, Text, View ,TouchableHighlight,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function(){
    return(
        <View style={styles.back}>
            <Text>Storage test</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    txt:{
        //fontFamily:'Comic-Sans',
        //margin:10,
        color: '#fff',
        //backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100,
        fontSize:15,
    },

});
