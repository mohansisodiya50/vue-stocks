import Vue from 'vue';
import axios from 'axios';

export const loadData = ({ commit }) => {
	axios.get('https://vue-stock-trader-702d1.firebaseio.com/data.json')
		.then(data => {
			if(data) {
				const stocks = data.data.stocks;
				const funds = data.data.funds;
				const stockPortfolio = data.data.stockPortfolio;
			

			const portfolio = {
				stockPortfolio,
				funds
			}

			commit('SET_STOCKS', stocks);
			commit('SET_PORTFOLIO', portfolio);
		}
		})
}