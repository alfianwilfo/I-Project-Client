<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
import navbar from "../components/navbar.vue";
export default {
  name: "DetailNews",
  computed: {
    ...mapState(useCounterStore, ["selectedNews", "status"]),
  },
  components: {
    navbar,
  },
};
</script>

<template>
  <navbar />
  <section class="flex justify-center" style="padding-top: 10em">
    <div class="card w-96 glass">
      <figure><img :src="selectedNews.thumbnail" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{ selectedNews.title }}</h2>
        <p>{{ selectedNews.description }}</p>
        <div class="card-actions justify-end">
          <a
            class="btn btn-primary"
            :href="selectedNews.link"
            v-if="status === 'Premium'"
            >Get !</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
