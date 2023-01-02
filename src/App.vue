<template>
<nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/aplikacja">Aplikacja</router-link> |
  <router-link to="/dokumentacja">Dokumentacja</router-link>
</nav>
<router-view />

</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
