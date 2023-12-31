
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

class Button8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: null,
        };
    }
    generateRandomNumber = () => {
        const min = 1;
        const max = 12;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        this.setState({ randomNumber });
    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.Button}
                    onPress={this.generateRandomNumber}>
                    <Text style={styles.buttonText}>
                    *** Fais moi gagner svp!!
                    </Text>
                    {
                    this.state.randomNumber &&
                    <Text style={styles.randomNumber}>
                        ** : {this.state.randomNumber}
                    </Text>
                }
                </TouchableOpacity>
                
            </View>
        );
    }

}



const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#A9A9A9',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 5, borderColor: '#4D4C7D',
        marginTop: 20,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 10,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    buttonText: {
        color: '#4D4C7D',
        fontSize: 20,
    },
    randomNumber: {
        fontSize: 24,
        paddingTop: 20,
        color: '#490478',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
});

export default Button8