<template>
    <div class="container">
        <div class=" row row-cols-1">
            <select name="searchbar" id="searchbar" v-model="selectedArchetype" @change="pippo()">
                <option value="">All</option>
                <option v-for="archetype in store.archetypeList" :value="archetype">{{ archetype }}</option>
            </select>
        </div>
    </div>
    
</template>

<script>
import { store } from '../data/store';
    export default {
        name:'SearchComponent',
        data(){
            return{
                selectedArchetype:'',
                store
            }
        },
        methods:{
            pippo(){
                this.$emit('search-arche', this.selectedArchetype)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>