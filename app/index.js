import {useState} from "react";
import { View, ScrollView, SafeAreaView, Text} from "react-native";
import {Stack, useRouter} from "expo-router";

import { COLORS, icons, images, SIZES} from "../constants";
import {Nearbyjobs, PopularJobs, ScreenHeaderBtn, Welcome} from '../components';
import Services from '../mine/Services.jsx';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.primary},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn dimension="60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn dimension="60%"/>
                    ),
                    headerTitle: ""
                }}
            />
            <View style={{
                flex: 1, padding: SIZES.medium
            }}>
                <Welcome/>
                <Services/>
            </View>
        </SafeAreaView>
    )
}
export default Home;