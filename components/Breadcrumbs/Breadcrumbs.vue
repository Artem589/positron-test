<template>
	<div class="breadcrumbs">
		<div class="breadcrumbs__inner">
			<a href="/" class="breadcrumbs__menu-active">Главная</a>
			<img class="breadcrumbs__img" src="/img/icons/breadcrumbs-arrow.png" alt="arrow">
			<span class="breadcrumbs__menu">Корзина</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  padding-top: 7px;
  height: 80px;
  &__inner {
	display: flex;
	align-items: center;
	gap: 8px;
  }
  
  &__img {
	width: 5px;
	height: 8px;
  }

  &__menu{
	color: $gray
  }
  
  &__menu-active {
	color: $dark-gray
  }
}
</style>