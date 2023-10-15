import axios from 'axios';

async function ResponseFetching(email) {

    const apiUrl = 'https://validate24x7.com/api/validateEmail';


    try {
        const response = await axios.post(apiUrl, { "email":email });
       
        const validationData = response.data
        return validationData;
      } catch (error) {
        console.log(error)
      }
  };


export default ResponseFetching;
