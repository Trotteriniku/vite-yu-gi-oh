<template>
    <div class="loadingscr">
        <img src="../assets/images/yugioh_magic_circle_vector_by_carionto_dbdd767.png" alt="" class="spin">
    </div>
</template>

<script>
import {store} from '../data/store'
    export default {
        name: 'LoadingComponent.vue',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loadingscr{
        width: 100%;
        height: 100vh;
        background-color: rgba(127, 255, 212, 0.363);
        position: fixed;

       

        @keyframes spin {
        0% { transform: rotate(360deg); }
        100% { transform: rotate(0deg); }
        }

        .spin {
        animation: spin 3.5s linear 0s infinite normal;
        -moz-animation: 3.5s linear 0s normal none infinite spin;
        -webkit-animation: spin 3.5s linear 0s infinite normal;
        animation: spin 3.5s linear 0s infinite normal;
        width: 200px;
        height: 200px;
        // border-radius: 50px 50px 50px 50px;
        overflow: hidden;
        margin-left: -100px;
         margin-top: -100px;
         top: 50%;
         left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        }

    
      
    }
</style>