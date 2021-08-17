<template>
    <div class="inicio">
        <h3 class="cantidad">Cantidad de productos con stock: {{totalJuegos}}</h3>
        <ul>
            <li v-for="(juego, index) in juegos" :key="index">
                {{juego.codigo}}  |  {{juego.nombre}}  |  {{juego.stock}}  |  {{juego.precio}}  |  <button>vender</button>
            </li>
        </ul>
    </div>
</template>
<script>

import {mapState} from 'vuex'

export default {

    computed: {
        totalJuegos(){
            return this.$store.state.juegos.length
        },
        ...mapState([
            'juegos'
        ])
    }


}
</script>

<style>

.cantidad{
    margin-bottom: 1rem;
}

</style>

