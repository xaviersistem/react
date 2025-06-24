<!-- filepath: src/components/PokemonTable.vue -->
<template>
  <div>
    <h2>Lista de Pokémon</h2>
    <input v-model="search" placeholder="Buscar Pokémon..." />
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pokemon in filteredPokemons" :key="pokemon.name">
          <td>{{ pokemon.id }}</td>
          <td>{{ pokemon.name }}</td>
          <td>
            <img :src="pokemon.image" alt="pokemon.name" width="50" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const pokemons = ref([]);
const search = ref('');

onMounted(async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const data = await res.json();
  // Obtener detalles de cada Pokémon para la imagen y el id
  const detailed = await Promise.all(
    data.results.map(async (p) => {
      const pokeRes = await fetch(p.url);
      const pokeData = await pokeRes.json();
      return {
        id: pokeData.id,
        name: pokeData.name,
        image: pokeData.sprites.front_default
      };
    })
  );
  pokemons.value = detailed;
});

const filteredPokemons = computed(() =>
  pokemons.value.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
input {
  margin-bottom: 10px;
  padding: 5px;
}
</style>