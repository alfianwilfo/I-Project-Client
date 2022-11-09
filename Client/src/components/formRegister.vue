<script>
import { useCounterStore } from "../stores/counter";

import { mapStores, mapActions } from "pinia";
export default {
  name: "formRegister",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["register"]),
    async registerHandler() {
      try {
        this.register({ email: this.email, password: this.password });
      } catch (error) {
        Swal.fire("Opss!", "Something wrong", "error");
      }
    },
  },
};
</script>
<template>
  <form style="padding-top: 10em">
    <div class="d-flex justify-content-sm-between">
      <div class="p-2 flex-fill">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          @click.prevent="registerHandler"
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
        <span>
          Already have account?<RouterLink :to="{ name: 'login' }"
            >Login here</RouterLink
          >
        </span>
      </div>
      <div class="fill">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/768px-Solid_red.svg.png?20150316143248"
          alt=""
        />
      </div>
    </div>
  </form>
</template>
<style>
.fill {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.fill img {
  flex-shrink: 0;
  width: 15em;
}
</style>
