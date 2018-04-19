import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

 const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) => {
     const {containerStyle,labelStyle,textInputStyle} = styles;
    return (
        <View style = {containerStyle}>
                <Text style = {labelStyle}>
                    {label}
                </Text>
                <TextInput
                    secureTextEntry = {secureTextEntry}
                    style = {textInputStyle}
                    allowCorrections = {false}
                    value = {value}
                    placeholder = {placeholder}
                    onChangeText = {onChangeText}
                />
        </View>
    );
};

const styles = {
    containerStyle: {
       flexDirection: 'row',
       flex:1,
       alignItems:'center',
       height: 40
    },
    labelStyle: {
        flex:1,
        fontSize:18,
        paddingLeft: 20
     },
     textInputStyle: {
        color: '#000',
        fontSize:18,
        lineHeight: 23,
        flex:2,
        paddingHorizontal: 20

     }

} 
export {Input} ;
