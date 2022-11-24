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
import GetAllData from '../Hooks/GetAllData';
import { getDataApi } from '../ApiRequest/ApiRequest';
import { SafeAreaView } from 'react-native-safe-area-context';

// const PokeListItem = ({pokemon, count_columns}) => {
//   const [{data}, searchPokemons] = GetAllData();

//   useEffect(() => {
//     let cancel = false;
//     searchPokemons(pokemon.pokemon.name).then(() => {
//       if (cancel) return;
//     });

//     return () => {
//       cancel = true;
//     };
//   }, []);

//   }

// export default memo(PokeListItem);

const Home = () => {

    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null,
    });

    const loadAlumno = async () => {
        setResults({ data: null, loading: true, error: null });

        let response = await getDataApi(
            'http://localhost:5000/mobile/192016633',  //+ ncontrol
        );

        if (response == false) {
            setResults({ data: null, loading: false, error: 'Something went wrong' });
        } else {
            setResults({ data: response, loading: false, error: null });
        }
        // setResults(results)
    };

    useEffect(() => {
        loadAlumno()
    }, [])

    console.log('respuesta', response)

    return (

        <SafeAreaView>
            <View>
                <Text>HOME SCREEEN</Text>
            </View>
            {/* <View>
                {
                    results.map(alumno => <Text>{alumno.pagado}</Text>)
                }
            </View> */}
        </SafeAreaView>
    )

}

export default Home