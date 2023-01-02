<template>
  <div class="doc">
    <h1>Dokumentacja aplikacji </h1>
    <h2>Uruchomienie aplikacji: </h2>
    <ol>
      <li>Zainstaluj wymagane pakiety: <br>
        <code>npm install</code>
      </li>
      <li>Uruchom aplikacje: <br>
        <code>npm run serve</code>
      </li>
    </ol>
    <h2>Vue UI: </h2>
    <ol>
      <li>
        Vue UI to narzędzie graficzne do zarządzania projektami Vue. Umożliwia ono m.in. uruchomienie aplikacji,
        dodawanie nowych komponentów i pluginów oraz konfigurowanie aplikacji.
      </li>
      <li>
        @vue/cli-service:
        @vue/cli-service to biblioteka, która umożliwia uruchomienie aplikacji Vue za pomocą pliecenia vue-cli-service
        serve. Jest to również podstawowy serwis używany przez Vue UI do uruchomienia aplikacji.
      </li>
      <li>
        @vue/cli-plugin-router:
        @vue/cli-plugin-router to plugin Vue CLI, który umożliwia dodanie obsługi routera do aplikacji Vue. Router służy
        do nawigacji między różnymi widokami w aplikacji i jest ważnym elementem wielu aplikacji internetowych.
      </li>
      <li>
        @vue/cli-plugin-eslint:
        @vue/cli-plugin-eslint to plugin Vue CLI, który dodaje obsługę narzędzia ESlint do aplikacji Vue. ESlint to
        narzędzie do sprawdzania kodu pod kątem stylistyki i dobrych praktyk, co pomaga zapewnić jakość i czytelność
        kodu.
      </li>
      <li>
        @vue/cli-plugin-babel:
        @vue/cli-plugin-babel to plugin Vue CLI, który dodaje obsługę narzędzia Babel do aplikacji Vue. Babel to
        narzędzie
        do konwersji kodu JavaScript z nowszych wersji języka do starszych, dzięki czemu aplikacja może być uruchomiona
        na
        starszych przeglądarkach.
      </li>
    </ol>
    <!-- <h2>Opis aplikacji: </h2>
    <ol>
      <li>Aplikacja ToDo to prosty menedżer zadań, który pozwala na dodawanie nowych zadań poprzez podanie opisu i nazwy
        zadania. Aplikacja zapamiętuje kiedy zadanie zostało dodane i umożliwia jego usunięcie. Możliwe jest również
        rozwinięcie zadania, aby zobaczyć opis i datę dodania. Aplikacja posiada estetyczne i przyjazne dla użytkownika
        graficzne interfejsy (GUI).</li>
    </ol> -->
    <h2>Funkcjonalności: </h2>
    <ol>
      <li>
        Dodawanie nowych zadań poprzez podanie opisu i nazwy zadania, które są zapisywane w tablicy zadań.
      </li>
      <li>
        Zapamiętywanie kiedy zadanie zostało dodane przez aplikację.
      </li>
      <li>
        Możliwość usunięcia zadania.
      </li>
      <li>
        Możliwość rozwinięcia zadania, aby zobaczyć opis i datę dodania.
      </li>
      <li>
        Estetyczne i przyjazne dla użytkownika graficzne interfejsy (GUI).
      </li>
    </ol>
  </div>
  <NameSurname />
</template>

<script>
import NameSurname from '@/components/NameSurname.vue';

export default {
  components: {
    NameSurname
  }
}</script>

<style>
ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 20px;
  padding: 10px;
}
</style>