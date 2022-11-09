<script>
import formLogin from "../components/formLogin.vue";
export default {
  name: "login",
  components: {
    formLogin,
  },
};
</script>

<template>
  <section class="container flex justify-center">
    <formLogin />
  </section>
</template>
