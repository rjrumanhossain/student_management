import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

const auth={
    state:{
        auth_status: false,
        auth_token : null,
        auth_info:{
                email:null,
                name:null,
                phone:null
    
        }
      },
      getters:{
        GET_STATUS(state){
            return state.auth_status
        },
        GET_TOKEN(state){
            return state.auth_token
        },
        GET_INFO(state){
            return state.auth_info
        }
      },
      actions:{
        LOGINHOME(context ,loginData){
          return new Promise((resolve, reject)=>{
            axios.post("/login", loginData)
            .then(function(res){
                    resolve(res)
                    context.commit('SET_TOKEN', res.data.token)
                    context.commit('SET_USER_INFO', res.data.user)
                }).catch(function(error){
                    reject(error)
            });
          })
        },

        LOGOUT(context){
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.auth_token;
          return new Promise((resolve, reject) =>{
            axios.post("/logout")
            .then(()=>{
              resolve()
                    context.commit('SET_LOGOUT')
                }).catch(()=>{
                  reject()
            });
          });
        }
      },
      mutations: {
        SET_TOKEN(state, token){
            state.auth_token = token;
            if(token != null){
              state.auth_status = true;
            }
           
            
        },
        SET_USER_INFO(state, info){
            state.auth_info.email = info.email
            state.auth_info.name = info.name
            state.auth_info.phone = info.phone

        },
        SET_LOGOUT(state){
          state.auth_status = false;
          state.auth_token  = null;
          state.auth_info={
            email:null,
            name:null
          }
        }
      }
}

export default auth;