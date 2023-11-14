<template>
  <LoadingComponent  v-if="store.loading"/>
  <HeaderComponent/>
  <main class="p-5">
    <div class="container bg-light p-5 rounded">
      <CardsListComponent/> 
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import { store } from './data/store'
import HeaderComponent from './components/HeaderComponent.vue';
import CardsListComponent from './components/CardsListComponent.vue';
import LoadingComponent from './components/LoadingComponent.vue';
  export default {
    name:'App',
    components:{
    HeaderComponent,
    CardsListComponent,
    LoadingComponent,
},
    data(){
      return{
        
        store
      }
    },
    methods:{
      getCards(){
        axios.get(store.apiUrl+store.endPoint.name).then((response) =>{
        store.cardsList = response.data.data;
        // store.loading=false
      }).catch((error)=>{
        console.log(error);
      }).finally(()=>{
         store.loading=false
      })
      }
    },
    created(){
      this.getCards();
    }
  }
</script>

<style lang="scss" scoped>
    main{
      background-color: orange;
      
    }
</style>