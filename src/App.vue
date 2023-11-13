<template>
  <HeaderComponent/>
  <CardsListComponent/>
</template>

<script>
import { store } from './data/store'
import HeaderComponent from './components/HeaderComponent.vue';
import CardsListComponent from './components/CardsListComponent.vue';
  export default {
    name:'App',
    components:{
    HeaderComponent,
    CardsListComponent
},
    data(){
      return{
        store
      }
    },
    methods:{
      getCards(){
        axios.get(store.apiUrl+store.endPoint.name).then((response) =>{
        store.cardsList = response.data.results;
        console.log(response);
      })
      },
    created(){
      this.getCards();
    }
    }
  }
</script>

<style lang="scss" scoped>

</style>