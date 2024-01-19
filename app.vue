<template>
	<div class="container">
		<Header></Header>
		<Breadcrumbs></Breadcrumbs>
		<Main></Main>
		<Settings></Settings>
		<Footer></Footer>
	</div>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  width: 1280px;
}
</style>
<script setup lang="ts">
import Footer from "~/components/Main/Footer.vue";
import Settings from "~/components/Main/Settings.vue";
</script>