<template>
	<Swiper
		:slides-per-view="4"
		:space-between="20"
		:navigation="{
			prevEl: prev,
			nextEl: next
		}"
		:modules="[Navigation]"
	>
		<SwiperSlide class="cards" v-for="footerCard in footerCards">
			<div>
				<img class="cards__img" :src="footerCard.image" alt="">
			</div>
			<div class="cards__product">
				<h3 class="cards__title">{{ footerCard.model }}</h3>
				<p class="cards__description">{{ footerCard.deviceDescription }}</p>
			</div>
			<div class="cards__price">
				<p class="cards__rub">
					{{ footerCard.minPriceRubles.toLocaleString() }} ₽ – {{ footerCard.maxPriceRubles.toLocaleString() }} ₽
				</p>
				<span class="cards__eur">{{ footerCard.minPriceEuros }} € – {{ footerCard.maxPriceEuros }} €</span>
			</div>
			<div>
				<button class="cards__btn">Подробнее</button>
			</div>
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
import { computed } from "vue";
import { useProductStore } from "~/store/store";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const props = defineProps(
	{
		prev: null,
		next: null
	});

const store = useProductStore;

const footerCards = computed(() => store.state.footerCards);
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 60px;
  padding: 25px;
  width: 305px;
  height: 563px;
  background: $gray-btn;
  border-radius: 5px;

  &__product {
	display: flex;
	flex-direction: column;
	gap: 10px;
  }


  &__img {
	width: 245px;
	height: 245px;
  }

  &__title {
	font-size: 22px;
	font-weight: 700;
	line-height: 120%;
	color: $midnight-black;
  }

  &__description {
	font-size: 14px;
	font-weight: 400;
	line-height: 145%;
	color: $midnight-black;
  }

  &__price {
	display: flex;
	flex-direction: column;
	gap: 10px;
  }

  &__rub {
	font-family: 'Roboto', 'sans-serif';
	font-weight: 500;
	font-size: 22px;
	line-height: 130%;
	color: $midnight-black;
  }

  &__eur {
	font-size: 16px;
	font-weight: 400;
	line-height: 145%;
	color: $gray;
  }

  &__btn {
	font-size: 16px;
	font-weight: 600;
	color: $white;
	padding: 15px 85px;
	border-radius: 4px;

	background: $spanish-blue;
  }
}
</style>