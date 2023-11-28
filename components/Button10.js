
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

class Button10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: null,
        };
    }
    generateRandomNumber = () => {
        const min = 1;
        const max = 5;
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
                        Le nombre **: {this.state.randomNumber}
                    </Text>
                }
                </TouchableOpacity>
                
            </View>
        );
    }

}



const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#FE0000',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 5, borderColor: '#002B5B',
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
        color: '#002B5B',
        fontSize: 20,
    },
    randomNumber: {
        fontSize: 24,
        paddingTop: 20,
        color: '#7FC8A9',
        fontWeight: 'bold',
        textShadowColor: '#3F497F',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
});

export default Button10