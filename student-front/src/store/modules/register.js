import axios from "axios"
axios.defaults.baseURL= 'http://127.0.0.1:8000/api/v1';


const register ={
    state:{
      
    },
    getters:{

    },
    actions:{
        REGISTER(context, dataInfo){
           return new Promise((resolve, reject) =>  {
                axios.post('/register', dataInfo)
                .then((res)=>{
                    if(res.data.message == null){
                        resolve(res)
                        console.log(res.data)
                        context.commit('SET_TOKEN', res.data.token)
                        context.commit('SET_USER_INFO', res.data.user)
                    }
                })
                .catch((error) => {
                    reject(error)
                })
           })
        }
    },
    mutations:{

    },
}


export default register;