<template>
  <div class="inicio">

    <h3 class="cantidad">Número de juegos disponibles: {{totalJuegos}}</h3>
    <h3 class="cantidad">Cantidad de juegos totales: {{totalStock}}</h3>

    <h3>Busquedas</h3>

    <input type="text" v-model="busquedaPorId" class="cantidad"/>
    <ul v-if="juegoDisponiblePorId.length > 0">
      <li v-for="(juego1, index) in juegoDisponiblePorId" :key="index" :style="{background:juego1.color}">
                {{ juego1.codigo }} | {{ juego1.nombre }} | {{ juego1.stock }} | {{ juego1.precio }}
      </li>
    </ul>
    <ul v-else>
      <li
        v-for="(juego, index) in juegos" :key="index" :style="{ background: juego.color }">
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} | {{ juego.precio }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      busquedaPorId: "",
    };
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

    juegoDisponiblePorId() {
      return this.$store.getters.juegoDisponiblePorId(this.busquedaPorId);
    },
  },
};
</script>
