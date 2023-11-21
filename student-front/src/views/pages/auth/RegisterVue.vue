<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <router-link :to="{name:'Login'}"><b>Admin</b>LTE</router-link>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form @submit.prevent="RegisterMethod()">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="register.name" placeholder="Full name" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="email" class="form-control" v-model="register.email" placeholder="Email" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="number" class="form-control" v-model="register.phone" placeholder="Phone" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="register.password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Retype password"
                v-model="register.password_confirmation"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    value="agree"

                  />
                  <label for="agreeTerms">
                    I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Register
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <p class="mb-0">
            <router-link :to="{ name: 'Login' }" class="text-center"
              >I have Already Account</router-link
            >
            
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>
  

<script>

export default ({
  data(){
    return{
      register:{
        name:null,
        email:null,
        phone:null,
        password:null,
        password_confirmation:null
      }
    }
  },
  methods:{
    RegisterMethod(){
      this.$store.dispatch('REGISTER', this.register)
      .then((res) => {
        if(res.data.error){
            this.LoginError = res.data
           console.log(res.data)
          }else{
            this.$router.push({name:'Home'})
          }
       
      })
      .catch((error) =>{
          console.log(error);
      })
    }
  }
})
</script>
