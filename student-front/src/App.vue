<template>
  <!-- Navbar -->
  <NavVueVue v-if="logginInStatus"></NavVueVue>
<!-- /.navbar -->

<!-- Main Sidebar Container -->

<SidebarVueVue v-if="logginInStatus"></SidebarVueVue>

<!-- Content Wrapper. Contains page content -->

  
  <router-view/>

<!-- /.content-wrapper -->
<FooterVueVue></FooterVueVue>

</template>

<script>
import FooterVueVue from "./components/FooterVue.vue"
import NavVueVue from "./components/NavVue.vue"
import SidebarVueVue from "./components/SidebarVue.vue"

export default({
components:{
  NavVueVue,SidebarVueVue, FooterVueVue
},
computed:{
  logginInStatus(){
    return this.$store.getters.GET_STATUS
  }
}
})
</script>

<style>

</style>
