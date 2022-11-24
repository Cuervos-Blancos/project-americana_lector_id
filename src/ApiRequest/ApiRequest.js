//* MODULO PARA REALIZAR PETICIONES A LA API*/

//******************* Hace una peticion a la url ************ */
const getDataApi = async url => {
    try {
      let data = await axios.get(url);
  
      return data.data;
    } catch (error) {
      return false;
    }
  };
  
  //*********************  Encontrar coincedncias ********************* */
  // Agregar una api que recorra toda la base de datos
  const getCoincidences = async param => {
    let response = await getDataApi(
      'http://localhost:5000/mobile/',
    );
  
    let Alucoincidences = response.results.filter(item => {
      let coincidence = 0;
  
      if (item.name.includes(param)) {
        coincidence = 1;
      }
  
      if (coincidence != 0) {
        return item;
      }
    });
  
    return Alucoincidences;
  };
  
  //********************* Retornar solo determinado tipo ***************** */
  
  import axios from 'axios';
  const Get_numero = async numero => {
    try {
      let response = await axios.get(
        'http://localhost:5000/mobile/' + numero.toLowerCase(),
      );
  
      return response.data.pokemon;
    } catch (error) {
      return false;
    }
  };
  
  /**************************** RETORNAR COINCIDENCIAS ************************ */
  
  const Get_alumnos = async param => {
    try {
      let response = await getCoincidences(param.toLowerCase());
  
      return response;
    } catch (error) {
      return false;
    }
  };
  
  export {Get_numero, Get_alumnos, getDataApi};