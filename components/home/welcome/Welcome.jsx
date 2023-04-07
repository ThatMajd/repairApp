import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {COLORS} from "../../../constants";

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to our Services App!</Text>
            <Text style={styles.subtitle}>Please choose a service:</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        backgroundColor: COLORS.lightWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
    },
});

export default Welcome;