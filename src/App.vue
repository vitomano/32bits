<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <h1>32bits</h1>
          <h2 class="bajada">Juegos de PC y consolas</h2>
        </div>
        <div>
          <ul class="menu">
            <li><router-link :to="{ name: 'inicio' }">Inicio</router-link></li>
            <li><router-link to="/busquedas">Búsquedas</router-link></li>
            <li><router-link to="/ventas">Ventas</router-link></li>
            <li><router-link to="/total">Total</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Roboto', sans-serif;
}
  .container{
    display: flex;
    align-items: center;
    margin: auto;
    max-width: 1200px;
  }
a{
  text-decoration: none;
}
.navbar {
  background: black;
  padding: 1rem 0 ;
}

.navbar * {
  color: white;
}
.logo{
  margin-right: 5rem;
}
.menu{
  display: flex;
  align-content: center;
  font-size: 1.5rem;
}

.menu li{
  list-style: none;
  margin-left: 1.2rem;
}

.bajada {
  font-size: 10px;
}

.inicio{
  padding: 1.5rem 0;
  max-width: 1200px;
  margin: auto;
}

.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
