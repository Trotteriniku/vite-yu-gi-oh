<template>
    <div class="col-12 col-md-3 pb-4">
        <figure>
            <img :src="card_images" alt="name" class="name ">
            <figcaption class="text-secondary">{{ name}}</figcaption>
            <figcaption class="text-secondary">{{type }}</figcaption>
            <figcaption class="text-secondary">{{ frameType }}</figcaption>
            <figcaption class="text-secondary">{{ archetype}}</figcaption>
        </figure>
    </div>
</template>

<script>
import { store } from '../data/store'
    export default {
        name:'CardComponent',
        props:{
            name: String,
            type: String,
            frameType: String,
            archetype: String,
            card_images: String

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



