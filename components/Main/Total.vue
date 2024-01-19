<template>
	<div class="total">
		<h2 class="total__title">Итого</h2>
		<div class="total__card">
			<div class="total__services">
				<span class="total__content">Сумма заказа</span>
				<span class="total__content">Количество</span>
				<span class="total__content">Установка</span>
			</div>
			<div class="total__quantity">
				<span class="total__content-end">{{ totalCost.toLocaleString() }} ₽</span>
				<span class="total__content-end">{{ totalQuantity.toLocaleString() }} шт</span>
				<span class="total__content-end">{{ isChecked ? "Да" : "Нет" }}</span>
			</div>
		</div>
		<div class="total__cost">
			<p class="total__const-text">Стоимость товаров</p>
			<span class="total__cost-sum">{{ totalCost.toLocaleString() }} ₽</span>
		</div>
		<div class="total__btns">
			<button @click="fetchOrder(totalCost,totalQuantity, isChecked)" class="total__btn-blue">Оформить заказ</button>
			<button class="total__btn-white">Купить в 1 клик</button>
		</div>
	
	</div>
</template>

<script setup>
import { useProductStore } from "~/store/store";
import { computed } from "vue";


const store = useProductStore;

const isChecked = computed(() => store.state.checkbox);
const totalQuantity = computed(() => store.getters.totalQuantity);
const totalCost = computed(() => store.getters.totalCost);

const fetchOrder = (orderAmount, quantity, setup) => {
	const orderData = { orderAmount, quantity, setup };
	
	store.dispatch("submitOrder", orderData);
};
</script>

<style scoped lang="scss">
.total {
  display: flex;
  flex-direction: column;

  background: $gray-btn;
  width: 425px;
  height: 458px;
  padding: 30px 35px;
  border-radius: 5px;

  &__title {
	font-size: 24px;
	line-height: 120%;
	color: $midnight-black;
	font-weight: 600;
  }

  &__content {
	font-size: 16px;
	line-height: 145%;
	color: $midnight-black;
  }

  &__content-end {
	font-family: 'Roboto', 'sans-serif';
	font-weight: 400;
	font-size: 16px;
	line-height: 145%;
	color: $midnight-black;
	text-align: end;
  }

  &__card {
	display: flex;
	justify-content: space-between;
	padding-bottom: 28px;
	margin-top: 31px;
	border-bottom: 1px solid #AEB0B6;
  }

  &__services {
	display: flex;
	flex-direction: column;
	gap: 17px;
  }

  &__quantity {
	display: flex;
	flex-direction: column;
	gap: 17px;
  }

  &__cost {
	margin-top: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
  }

  &__btns {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-top: 30px;
  }


  &__btn-blue {
	background: $spanish-blue;
	color: $white;
	height: 54px;
	border-radius: 4px;
  }

  &__btn-white {
	background: $white;
	color: $spanish-blue;
	height: 54px;
	border: 1px solid $spanish-blue;
	border-radius: 4px;
  }

  &__cost-sum {
	font-family: 'Roboto', 'sans-serif';
	font-weight: 600;
	font-size: 26px;
	line-height: 130%;
  }
}
</style>