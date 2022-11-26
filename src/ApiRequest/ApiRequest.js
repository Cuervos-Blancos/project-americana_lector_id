//* MODULO PARA REALIZAR PETICIONES A LA API*/
//******************* Hace una peticion a la url ************ */
const getDataApi = () => {
  const getRequest = async (URL) => {
    try {
      let response = await fetch(URL)
      return response.json()

    } catch (error) {
      console.log('Error!', error)
    }
  }
  return { getRequest }

}

export default getDataApi;