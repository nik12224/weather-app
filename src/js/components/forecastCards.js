import { data } from '../data.js'

export const forecast = document.addEventListener('DOMContentLoaded', e => {
	const weatherData = data

	const cardsBlock = document.querySelector('.forecast')
	const cardBlock = weatherData
		.map(card => {
			return `
							<div class="forecast__block">
							<div class="forecast__header">
								<b class="forecast__title">${card.title}</b>
								<picture>
									<source srcset="${card.iconMedia}" media="(max-width: 640px)" />
									<img class="header__magnifer" src="${card.icon}" alt="Иконка" />
								</picture>
								<p class="forecast__value">${card.value}</p>
							</div>
							<div class="forecast__footer">
							${
								card.range
									? `
							<div class="forecast__input ${card.pressure ? `forecast__input--pressure` : ''}">
							</div>
							${card.range ? `<span class="forecast__circle"></span>` : ''}
								`
									: ''
							}
							${
								card.humidity
									? `
								<div class="forecast__flex">
									<span>0%</span>
									<span>100%</span>
								</div>`
									: `<span>${card.param || ''} ${card.time || ''}</span>`
							}
							</div>
						</div>
		`
		})
		.join('')

	cardsBlock.innerHTML = cardBlock
})
