<template>
  <HeaderComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name:'App',
    components:{
    HeaderComponent,
},
    data(){
      return{

      }
    },
    methods:{
      getCards(){
        axios.get(store.apiUrl+store.endPoint.name).then((response) =>{
        store.cardList = response.data.results;
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