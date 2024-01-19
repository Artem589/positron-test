<template>
	<div class="footer">
		<div class="footer__header">
			<h2 class="footer__title">Просмотренные товары</h2>
			<div class="footer__btns">
				<img @click="decrement" ref="prev" class="footer__img" src="/img/icons/chevron-left.svg" alt="">
				<p class="footer__text"><span class="footer__current">{{ countSlide }}</span> / {{ productDetailsCount }}</p>
				<img @click="increment" ref="next" class="footer__img" src="/img/icons/chevron-right.svg" alt="">
			</div>
		</div>
		<div class="footer__cards">
			<FooterCard :prev="prev" :next="next"></FooterCard>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import FooterCard from "~/components/Main/FooterCard.vue";
import { useProductStore } from "~/store/store.js";


const store = useProductStore;

const prev = ref(null);
const next = ref(null);

const countSlide = computed(() => store.getters.count);
const productDetailsCount = computed(() => store.getters.productDetailsCount);

const increment = () => store.commit("incrementSlider");
const decrement = () => store.commit("decrementSlider");
</script>

<style scoped lang="scss">
.footer {
  margin-top: 95px;

  &__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
  }

  &__title {
	font-size: 30px;
	line-height: 120%;
	font-weight: 600;
	color: $midnight-black;
  }

  &__btns {
	display: flex;
	align-items: center;
	gap: 20px;
  }

  &__img {
	width: 50px;
	height: 50px;
	cursor: pointer;
  }

  &__text {
	font-size: 18px;
	line-height: 150%;
	font-weight: 400;
	color: $gray;
  }

  &__current {
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
	color: $lead-black;
  }

  &__cards {
	display: flex;
	justify-content: space-between;
	gap: 20px;
	overflow: hidden;
  }
}
</style>