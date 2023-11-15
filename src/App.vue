<template>
  <LoadingComponent  v-if="store.loading"/>
  <HeaderComponent/>
  <main class="p-5">
    <div class="container bg-light p-5 rounded">
      <SearchComponent @search-arche="pippo"/>
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
import SearchComponent from './components/SearchComponent.vue';
  export default {
    name:'App',
    components:{
    HeaderComponent,
    CardsListComponent,
    LoadingComponent,
    SearchComponent
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
        
      }).catch((error)=>{
        console.log(error);
      }).finally(()=>{
         store.loading=false
      })
      },
      getArchetypes(){
        axios.get(store.archetypeUrl+store.archetypeEndPoint.archetype_name).then((response)=>{
           for (let i = 0; i < response.data.length; i++) {
                store.archetypeList.push(response.data[i].archetype_name)
           }
           console.log(store.archetypeList);

           
        })
      },
      pippo(archetype){
        console.log(archetype);
        let archetypeparsed=''
        if (archetype !== "") {
          archetypeparsed='&archetype='+archetype
        }
        axios.get(store.apiUrl+archetypeparsed).then((response) =>{
        store.cardsList = response.data.data;
        
        }).catch((error)=>{
        console.log(error);
        }).finally(()=>{
         store.loading=false
        })
      }
    },
    created(){
      this.getCards();
      this.getArchetypes();
      this.pippo()





    }
  }
</script>

<style lang="scss" scoped>
    main{
      background-color: orange;
      
    }
</style>