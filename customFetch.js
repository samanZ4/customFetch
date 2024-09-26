import axios from "axios";

const customFetch = async (url,method,config = {}) => {
  try{
    const response = await axios({
      url,
      method,
    ...config

    })
    return { response : response.data , isSuccess:true }
  }catch(error){
    console.log(error)
    if(error.response.status === 500){
      return { errors:"server Erros" , isSuccess:false }
    }
    if(error.response.status === 400){
      return { errors:error.response.data.errors[0].message , isSuccess:false }
    }
  }
}

export default customFetch