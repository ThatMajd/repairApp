import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const ServiceCard = ({ title, img }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={img} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 14,
    },
});

export default ServiceCard;