import React from 'react';
import {
    View,
    Text,
    Modal
} from 'react-native';
import { CardSection, Button } from '.';
//import App from './App';

// function based component

 const Confirm = ({children,onAccept,onReject,visible}) => {
    return (
        <Modal 
        transparent 
        visible = {visible}
        animationType = "slide"
        >
        <View  style = {styles.containerStyle}> 
        <CardSection>
            <Text>
                {children}
            </Text>
           </CardSection>
           <CardSection>
            <Button onPress = {onAccept}>
                Yes
            </Button>
            <Button onPress = {onReject}>
                No
            </Button>
           </CardSection>
        </View>
        </Modal>
    );
};

const styles = {
    containerStyle: {
        flex:1,
        position: 'relative',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.75)'
    }
} 
export {Confirm} ;
