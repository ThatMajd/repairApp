import React from 'react';
import { View, StyleSheet } from 'react-native';
import ServiceCard from './ServiceCard';

import {COLORS, icons} from '../constants'

const Services = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <ServiceCard
                    title="New Repair"
                    img={icons.wrench}
                />
                <ServiceCard
                    title="Complete Repair"
                    img={icons.finished}
                />
            </View>
            <View style={styles.row}>
                <ServiceCard
                    title="View Repair"
                    img={icons.view}
                />
                <ServiceCard
                    title="Edit Repair"
                    img={icons.edit}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        padding: 2,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});

export default Services;