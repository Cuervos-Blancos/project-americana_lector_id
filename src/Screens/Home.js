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
import { FlatList } from 'react-native-gesture-handler';
const { getRequest } = getDataApi()


const Home = () => {
    // // 'http://localhost:5000/mobile/192016633'

    // const loadAlumno = async () => {

    //     let response = await getRequest(
    //         'http://127.0.0.1:5000/mobile/9675'
    //     )
    //     console.log(response)
    // }

    // useEffect(() => {
    //     loadAlumno()
    // }, [])

    // console.log('respuesta', response)

    const [alumno, setAlumno] = React.useState([])

    React.useEffect(() => {
        fetch("http://192.168.0.193:5000/mobile/9675")
            .then(response => response.json())
            .then(data => {
                let alumnoData = data.map(item => {
                    return {
                        numeroalumno: item.numeroalumno,
                        nombre: item.nombre,
                        pagado: item.pagado
                    }
                    // this.setState({data: item.data})
                })
                    .catch(function (error) {
                        console.log('There has been a problem with your fetch operation: ' + error.message);
                        throw error;
                    });
                setAlumno(alumnoData)
                console.log(item)
            })
    }, [])


    return (

        <SafeAreaView>
            <View>
                <Text>HOME SCREEEN</Text>
            </View>
            <View>
            </View>
        </SafeAreaView>
    )

}

export default Home