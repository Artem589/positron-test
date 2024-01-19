<template>
	<div class="main">
		<main-header></main-header>
		<div class="main__body">
			<div class="main__list">
				<product-item v-if="productCount"></product-item>
				<h2 v-else class="main__empty">В вашей корзине пусто</h2>
			</div>
			<Total></Total>
		</div>
	</div>
</template>

<script setup lang="ts">
import Total from "@/components/Main/Total.vue";
import MainHeader from "@/components/Main/MainHeader.vue";
import { useProductStore } from "~/store/store";

const store = useProductStore

const productCount = computed(() => store.getters.productCount)
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
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 800px;
  }
  
  &__empty {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	font-family: "Lato", 'sans-serif';
	font-size: 35px;
	line-height: 120%;
  }
}
</style>
