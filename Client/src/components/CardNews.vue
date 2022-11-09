<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
export default {
  name: "CardNews",
  props: ["niws"],
  methods: {
    ...mapActions(useCounterStore, ["selectNews"]),
    selectMethod(id) {
      //   console.log(id);
      this.selectNews(id);
    },
  },
};
</script>

<template>
  <div class="card w-96 bg-base-100 image-full" style="padding-top: 10em">
    <figure><img :src="niws.thumbnail" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ niws.title }}</h2>
      <p>{{ niws.description }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click.prevent="selectMethod(niws.id)">
          Read more
        </button>
      </div>
    </div>
  </div>
</template>
