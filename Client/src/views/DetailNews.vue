<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
export default {
  name: "DetailNews",
  computed: {
    ...mapState(useCounterStore, ["selectedNews"]),
  },
};
</script>

<template>
  <section class="flex justify-center" style="padding-top: 10em">
    <div class="card w-96 glass">
      <figure><img :src="selectedNews.thumbnail" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{ selectedNews.title }}</h2>
        <p>{{ selectedNews.description }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  </section>
</template>
