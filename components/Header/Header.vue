<template>
	<header class="header">
		<div class="header__block">
			<img class="header__img" src="/img/icons/cart.svg" alt="">
			<div class="header__nav">
				<h2 class="header__title">Ваша корзина</h2>
				<p class="header__content">{{ productCount }} товара</p>
				<p class="header__price">{{ totalCost.toLocaleString() }} ₽</p>
			</div>
		</div>
	</header>
</template>

<script setup>
import { computed } from "vue";
import { useProductStore } from "~/store/store";

const store = useProductStore;

const totalCost = computed(() => store.getters.totalCost);
const productCount = computed(() => store.getters.productCount);

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 19px 0 25px 0;
  margin-top: 45px;
  height: 120px;

  &__block {
	display: flex;
	justify-content: center;
	gap: 10px;
	height: 51px;
	align-items: center;
  }

  &__img {
	width: 32px;
	height: 32px;
  }

  &__nav {
	display: flex;
	flex-direction: column;
  }

  &__title {
	color: $midnight-black;
	font-size: 14px;
	line-height: 150%;
  }

  &__content {

	color: $gray;
	font-size: 12px;
	line-height: 145%;
  }

  &__price {
	font-weight: 400;
	color: $midnight-black;
	font-size: 12px;
	line-height: 145%;
  }
}
</style>