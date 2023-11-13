<template>
    <div class="row pt-5" >
        <CardComponent
        v-for="card in store.cardsList"
         :name="card.name"
         :type="card.type"
         :frameType="card.frameType"
         :archetype="card.archetype"
         :card_images="card.card_images.image_url"
        />
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../data/store'
    export default {
        name: 'CharacterListComponent',
        components:{
            CardComponent
        },
        data(){
            return{
                 store

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>