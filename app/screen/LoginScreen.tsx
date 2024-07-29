import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                placeholder="Username"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={() => { /* Handle login logic */ }} />
        </View>
    );
}

// Define styles using StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        padding: 12,
        marginVertical: 8,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
});

export default LoginScreen;
