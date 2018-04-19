import React from 'react';
import {
    View
} from 'react-native';
//import App from './App';

// function based component

 const Card = (props) => {
    return (
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 6,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    }
} 
export {Card} ;
