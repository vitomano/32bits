<template>
  <div class="inicio">

    <h3 class="cantidad">Número de juegos disponibles: {{totalJuegos}}</h3>
    <h3 class="cantidad">Cantidad de juegos totales: {{totalStock}}</h3>

    <h3>Busquedas</h3>
    <input type="text" v-model="busquedaPorId" class="cantidad"/>

    <ListaJuegos 
      :juegos="juegos"
      :busquedaPorId="busquedaPorId"
    />

  </div>
</template>


<script>
import { mapGetters, mapState } from "vuex";
import ListaJuegos from './ListaJuegos.vue'

export default {
  data() {
    return {
      busquedaPorId: "",
    };
  },
  components:{
    ListaJuegos
  },

  computed: {
      totalJuegos(){
            return this.$store.state.juegos.length
        },
      totalStock(){
            return this.$store.state.juegos.length
        },
    ...mapState(["juegos"]),
    ...mapGetters(["totalStock"]),
  },
};
</script>
