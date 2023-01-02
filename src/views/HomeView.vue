<template>
  <div>
    <img alt='Vue logo' src='../assets/logo.png' />
    <div class="opis">
      <ol>
        <li>
          <b>Aplikacja ToDo została stworzona przez Michała Kazienko z klasy 3F.</b>
        </li>
        <li>
          W opisie zadania, który wysłałem wcześniej, zapowiedziałem, że zrobię forum.
        </li>
        <li>
          Jednak po poznaniu technologii Vue okazało się, że to zadanie przerasta moje możliwości.
        </li>
        <li>
          Vue jest dla mnie nową technologią, więc poświęciłem dużo czasu na poznanie podstaw jej działania, łączenia
          komponentów oraz tworzenia ich poprawnej struktury.
        </li>
        <li>W odpowiedzi na sugestię Pana Profesora na ostatniej lekcji, postanowiłem zmienić moje założenia i zająć się
          prostszym zadaniem - aplikacją ToDo - by lepiej zapoznać się z technologią Vue.
        </li>
      </ol>
    </div>
    <NameSurname />
  </div>
</template>

<script>
import NameSurname from '../components/NameSurname.vue'

export default {
  name: 'HomeView',
  components: {
    NameSurname
  }
}
</script>