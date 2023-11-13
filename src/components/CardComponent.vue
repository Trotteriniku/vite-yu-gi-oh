<template> 
    <div class="text-center">
        <figure >
            <img :src="card_images" alt="name" >
            <div class="p-3 figcontainer rounded-bottom   " >
                <figcaption class=" text-light text-uppercase fw-bold">{{ name}}</figcaption>
                <figcaption class="  text-uppercase">{{type }}</figcaption>
                <figcaption class="  text-uppercase">{{ frameType }}</figcaption>
                <figcaption class="  text-uppercase">{{ archetype}}</figcaption>
            </div>
            
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
    img{
        width: 100%;
    }
    .figcontainer{
        min-height: 150px;
        background-color: orange;
    }
</style>



