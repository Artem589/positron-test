<template>
	<div class="main">
		<main-header></main-header>
		<div class="main__body">
			<div class="main__list">
				<product-item></product-item>
			</div>
			<Total></Total>
		</div>
	</div>
</template>

<script setup lang="ts">
import Total from "@/components/Main/Total.vue";
import MainHeader from "@/components/Main/MainHeader.vue";

</script>

<style scoped lang="scss">
.main {
  width: 1280px;

  &__body {
	max-width: 1280px;
	display: flex;
	gap: 55px;
	margin-top: 35px;
  }
  
  &__list {
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 800px;
  }
}





</style>