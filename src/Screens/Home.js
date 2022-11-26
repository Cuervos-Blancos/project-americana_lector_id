import React, { useEffect, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import {
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

//Custom modules
// import GetAllData from '../Hooks/GetAllData';
import getDataApi from '../ApiRequest/ApiRequest';
import { SafeAreaView } from 'react-native-safe-area-context';
const { getRequest } = getDataApi()


const Home = () => {
    // 'http://localhost:5000/mobile/192016633'

    const loadAlumno = async () => {

        let response = await getRequest(
            'http://127.0.0.1:5000/mobile/9675'
        )
        console.log(response)
    }

    useEffect(() => {
        loadAlumno()
    }, [])

    // console.log('respuesta', response)

    return (

        <SafeAreaView>
            <View>
                <Text>HOME SCREEEN</Text>
                {}
            </View>
            <View>
                
            </View>
        </SafeAreaView>
    )

}

export default Home