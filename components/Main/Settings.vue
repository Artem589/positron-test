<template>
	<div class="settings">
		<input class="settings__checkbox" type="checkbox" @change="isCheckbox">
		<div class="settings__icons">
			<img class="settings__img" src="/img/icons/setting.svg" alt="setting">
		</div>
		<div class="settings__content">
			<h3 class="settings__title">Установка</h3>
			<p class="settings__text">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useProductStore } from "~/store/store";


const store = useProductStore;

const isChecked = computed(() => store.state.checkbox);
const isCheckbox = () => store.commit("setCheckbox", !isChecked.value);
</script>

<style scoped lang="scss">
.settings {
  max-width: 800px;
  display: flex;
  align-items: center;
  background: $gray-btn;
  padding: 17px;
  height: 95px;
  gap: 20px;
  border-radius: 5px;

  &__checkbox {
	width: 20px;
	height: 20px;
	outline: 1px auto #797B86;
  }

  &__icons {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background: $white;
	border-radius: 4px;
  }

  &__img {
	width: 30px;
	height: 30px;
  }

  &__content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2px;
  }

  &__title {
	font-size: 16px;
	line-height: 145%;
	font-weight: 600;
	color: $midnight-black;
  }

  &__text {
	font-size: 14px;
	line-height: 150%;
	font-weight: 400;
	color: $gray;
  }
}
</style>