<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
export default {
  name: "Cuaca",
  methods: {
    ...mapActions(useCounterStore, ["getWeather"]),
  },
  computed: {
    ...mapState(useCounterStore, ["weather"]),
  },
  created() {
    this.getWeather();
  },
};
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/prakiraan-cuaca-9999.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ weather.location.name }}
        <div class="badge badge-secondary">
          {{ weather.current.condition.text }}
        </div>
      </h2>
      <p>Suhu : {{ weather.current.temp_c }}°C</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Indonesia</div>
      </div>
    </div>
  </div>
  <!-- http://api.weatherapi.com/v1/current.json?key=8b8ebdc80115456c85840905221011&q=Jakarta&aqi=no -->
</template>
