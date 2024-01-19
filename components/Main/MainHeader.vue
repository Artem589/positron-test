<template>
	<div class="section__main">
		<div class="main">
			<h1 class="main__title">Ваша корзина</h1>
			<span class="main__text">{{ productCount }} товара</span>
		</div>
		<a @click="clearCart" class="main__link" href="">Очистить корзину</a>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useProductStore } from "~/store/store.js";

const store = useProductStore;

const productCount = computed(() => store.getters.productCount);

const clearCart = (e) => {
	e.preventDefault();
	
	store.commit("clearCart");
};

</script>

<style scoped lang="scss">

.section__main {
  display: flex;
  width: 800px;

  justify-content: space-between;
  align-items: flex-end;
  height: 62px;
}

.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 22px;

  &__title {
	font-family: 'Lato', sans-serif;
	font-size: 44px;
	line-height: 120%;
  }

  &__text {
	font-family: 'Lato', sans-serif;

	font-size: 18px;
	line-height: 145%;
	padding-bottom: 5px;
	color: $gray;
  }

  &__link {
	font-size: 14px;
	line-height: 150%;
	padding-bottom: 5px;
	text-decoration: underline;
	color: $gray;
  }
}
</style>