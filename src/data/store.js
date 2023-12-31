import { reactive } from "vue";

export const store= reactive({
       apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    endPoint: {
        name: 'name',
        type : 'type',
        frameType : 'frameType',
        archetype : 'archetype'
    },
    cardsList:[],
    archetypeUrl:'https://db.ygoprodeck.com/api/v7/archetypes.php/',
    archetypeEndPoint:{
        archetype_name: 'archetype_name'
    },
    archetypeList:[],
    loading:true
})