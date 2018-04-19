import React from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
//import App from './App';

// function based component

 const Button = ({onPress,children}) => {
     const {buttonTextStyle,buttonStyle,buttonViewStyle} = Styles;
    return (
        <View style = {buttonViewStyle}>
                <TouchableHighlight underlayColor='#99d9f4' onPress={onPress} style={buttonStyle}>
                        <Text style={buttonTextStyle}>{children}</Text>
                </TouchableHighlight>
        </View>
    );
};

const Styles = {
    buttonTextStyle: {
        fontSize: 18,
        fontWeight:'600',
        color: '#007aff',
        alignSelf: 'center',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle: {
        flex:1,
        borderRadius:6,
        borderWidth:2,
        borderColor: '#007aff',
        alignSelf:'center',
        marginHorizontal: 5
    },
    buttonViewStyle: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    }
}
export {Button} ;
