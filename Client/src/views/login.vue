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
  <section class="flex justify-center content-center" style="padding-top: 10em">
    <formLogin />
  </section>
</template>
