import { createStore } from "vuex";
import { products, productDetails } from "@/server/api/product.js";

export const useProductStore = createStore(
	{
		state: {
			cardProduct: products,
			footerCards: productDetails,
			checkbox: false,
			counter: 1,
			order: null
		},
		getters: {
			totalCost: state => state.cardProduct.reduce((sum, obj) => sum + (obj.price * obj.quantity), 0),
			totalQuantity: state => state.cardProduct.reduce((quantity, obj) => quantity + obj.quantity, 0),
			productCount: state => state.cardProduct.length,
			productDetailsCount: state => state.footerCards.length,
			count: state => state.counter,
			getOrder: state => state.order
		},
		mutations: {
			setCheckbox(state, value) {
				state.checkbox = value;
			},
			deleteCard(state, cardId) {
				state.cardProduct = state.cardProduct.filter(card => card.id !== cardId);
			},
			incrementProductQuantity(state, productId) {
				const productCard = state.cardProduct.find(product => product.id === productId);
				if(productCard) {
					productCard.quantity++;
				}
			},
			decrementProductQuantity(state, productId) {
				const productCard = state.cardProduct.find(product => product.id === productId);
				if(productCard && productCard.quantity > 0) {
					productCard.quantity--;
				}
				if(!productCard.quantity) {
					this.commit("deleteCard", productId);
				}
			},
			incrementSlider(state) {
				if(state.counter < state.footerCards.length) {
					state.counter++;
				}
			},
			decrementSlider(state) {
				if(state.counter > 1) {
					state.counter--;
				}
			},
			clearCart(state) {
				state.cardProduct = []
			},
			fetchOrder(state, order) {
				state.order = order;
			}
		},
		actions: {
			async submitOrder({ commit }, orderData) {
				try {
					const response = await fetch("url-fake-api", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(orderData)
					});
					
					const order = await response.json();
					
					commit("fetchOrder", order);
				} catch (error) {
					alert("Извините, заказы временно не принимаются");
					console.error("Ошибка отправки заказа", error);
				}
			}
		}
	});
