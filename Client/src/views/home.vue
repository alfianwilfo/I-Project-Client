<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
import navbar from "../components/navbar.vue";
import CardNews from "../components/CardNews.vue";
import Carrousel from "../components/Carrousel.vue";
import Cuaca from "../components/Cuaca.vue";
export default {
  name: "home",
  components: {
    navbar,
    CardNews,
    Cuaca,
    Carrousel,
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchData"]),
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapState(useCounterStore, ["news"]),
  },
};
</script>

<template>
  <navbar />
  <Carrousel />
  <Cuaca />
  <section class="container mx-auto grid grid-cols-4 gap-10">
    <CardNews v-for="niws in news" :key="niws.title" :niws="niws" />
  </section>
</template>
