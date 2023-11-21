<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>Admin</b>LTE</a>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form @submit.prevent="LoginMethod()">
              <div class="alert alert-danger" v-if="LoginError.error" >{{ LoginError.error.LoginError }}</div>
            <div class="input-group mb-3">
              <input type="email" v-model="form.email" class="form-control" placeholder="Email" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
             
            </div> 
            <p v-if="messageError.email" class="text-red">{{ messageError.email[0] }}</p>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="form.password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
              </div>
              <p v-if="messageError.password" class="text-red">{{ messageError.password[0] }}</p>
           
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember"> Remember Me </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>

        
          <!-- /.social-auth-links -->

          <!-- <p class="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p> -->
          <p class="mb-0">
            <router-link :to="{'name':'Register'}"  class="text-center"
              >Register a new membership</router-link >
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>


<script>
import router from '@/router';




export default{
  data(){
    return{
      form:{
        email:null,
        password:null,
       
      },

      messageError:{},
      LoginError:{},
    }
    
  },
  methods:{
      LoginMethod(){
        this.$store.dispatch("LOGINHOME",this.form)
        .then((res)=>{
          if(res.data.error){
            this.LoginError = res.data
           console.log(res.data)
          }else{
            router.push({name:'Home'})
          }
        
          
        })
        .catch((error) =>{
          console.log(error)
           this.messageError = error.response.data.errors
        })  
      }
    }
}

</script>
