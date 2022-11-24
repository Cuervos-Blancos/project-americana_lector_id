//Este modulo recibe el nControl del alumno retorna todos los datos de ese alumno en un objeto
import {useState} from 'react';

//Custom modules
import {getDataApi} from '../ApiRequest/ApiRequest';

const GetAllData = () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchAlumno = async ncontrol => {
    setResults({data: null, loading: true, error: null});

    let response = await getDataApi(
      'http://localhost:5000/mobile/192016633',  //+ ncontrol
    );

    if (response == false) {
      setResults({data: null, loading: false, error: 'Something went wrong'});
    } else {
      setResults({data: response, loading: false, error: null});
    }
  };
  return [results, searchAlumno];
};

export default GetAllData;