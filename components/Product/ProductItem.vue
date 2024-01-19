<template>
	<div class="product" v-for="product in products" :key="product.id">
		<div class="product__block">
			<img class="product__img" :src="product.image" alt="gh2">
			<div class="product__description">
				<h2 class="product__title">{{ product.deviceModel }}</h2>
				<p class="product__setings">{{ product.performance }}</p>
				<span class="product__sku">Артикул: {{ product.sku }}</span>
			</div>
		</div>
		<div class="product__count">
			<div class="product__butttons">
				<button class="product__button" @click="decrementQuantity(product.id)"><img src="/img/icons/minus.svg" alt="-"></button>
				<p class="product__counter">{{ product.quantity }}</p>
				<button class="product__button" @click="incrementQuantity(product.id)"><img src="/img/icons/plus.svg" alt="-"></button>
			</div>
			<p v-if="product.quantity > 1" class="product__unit-cost">{{ product.price.toLocaleString() }} ₽/шт.</p>
		</div>
		<div class="product__sum">
			<b>{{ sum(product) }} ₽</b>
		</div>
		<div @click="deleteCard(product.id)" class="product__close">
			<img src="/img/icons/close.svg" alt="">
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useProductStore } from "~/store/store";


const store = useProductStore;


const products = computed(() => store.state.cardProduct);
const sum = (product) => (product.price * product.quantity).toLocaleString();
const deleteCard = (id) => store.commit("deleteCard", id);
const incrementQuantity = (id) => store.commit("incrementProductQuantity", id);
const decrementQuantity = (id) => store.commit("decrementProductQuantity", id);
</script>

<style scoped lang="scss">
.product {
  display: flex;
  justify-content: space-between;
  height: 133px;
  align-items: center;

  padding: 10px 4px;
  margin-left: 12px;

  &__item:nth-child(1), &__item:nth-child(2) {
	border-bottom: 1px solid #C4C4C4;
  }

  &__block {
	display: flex;
	gap: 30px;
	align-items: center;
  }

  &__title {
	font-size: 16px;
	color: $midnight-black;
	line-height: 145%;
  }

  &__setings {
	font-size: 12px;
	color: $iris-black;
  }

  &__sku {
	font-size: 14px;
	color: $gray;
	line-height: 150%;
  }

  &__img {
	width: 100px;
	height: 100px;
  }

  &__description {
	display: flex;
	flex-direction: column;
	max-width: 264px;
	gap: 6px;
  }

  &__butttons {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 102px;
	height: 34px;
	background: $gray-btn;
	border-radius: 10px;
  }

  &__button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 38px;
	height: 34px;
	padding: 0;
	background: inherit;
  }

  &__button:first-child {
	border-radius: 5px 0 0 5px;
  }

  &__button:last-child {
	border-radius: 0 5px 5px 0;
  }

  &__counter {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 38px;
	height: 34px;

	background: inherit;
	border-right: 1px solid $white;
	border-left: 1px solid $white;
  }

  &__sum {
	font-family: 'Roboto', 'sans-serif';
	font-weight: 500;
	font-size: 18px;
	line-height: 145%;
  }

  &__close {
	cursor: pointer;
	align-self: start;
  }

  &__count {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
  }

  &__unit-cost {
	font-family: 'Roboto', 'sans-serif';
	font-size: 12px;
	position: absolute;
	left: 50%;
	top: 120%;
	transform: translateX(-50%);
	white-space: nowrap;
  }
}
</style>