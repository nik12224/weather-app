import { dataForecast } from '../data.js'

document.addEventListener('DOMContentLoaded', e => {
	const weatherData = dataForecast

	const slideBlock = document.querySelector('.slider__list--for24')
	let cardBlock = ''

	cardBlock = weatherData
		.map(card => {
			return ` ${
				card.for24
					? `<li class="slider__item">
								<p class="slider__time">${card.time}</p>
								<picture>
									<source srcset="${card.icon}" media="(min-width: 768px)" />
									<img class="header__magnifer" src="../public/icons/media/clouds_slide--media.svg" alt="Найти" />
								</picture>
								<p class="slider__temp">${card.temp}</p>
							</li>`
					: ''
			} `
		})
		.join('')

	slideBlock.innerHTML = cardBlock
})

document.addEventListener('DOMContentLoaded', e => {
	const weatherData = dataForecast

	const slideBlock = document.querySelector('.slider__list--for5')
	const cardBlock = weatherData
		.map(card => {
			return `${
				card.for5
					? `<li class="slider__item">
								<p class="slider__time">${card.time}</p>
								<picture>
									<source srcset="${card.icon}" media="(min-width: 768px)" />
									<img class="header__magnifer" src="${card.iconMedia}" alt="Найти" />
								</picture>
								<p class="slider__temp">${card.temp}</p>
							</li>`
					: ''
			} `
		})
		.join('')

	slideBlock.innerHTML = cardBlock
})

const views = document.querySelector('.slider__forecast-block')
const for24 = document.querySelector('.slider__nav--for24')
const for5 = document.querySelector('.slider__nav--for5')
const slideFor24 = document.querySelector('.slider__list--for24')
const slideFor5 = document.querySelector('.slider__list--for5')
slideFor24.style.display = 'flex'
for24.classList.add('active')
slideFor5.style.display = 'none'

views.addEventListener('click', e => {
	if (e.target == for24) {
		slideFor24.style.display = 'flex'
		slideFor5.style.display = 'none'
		for24.classList.add('active')
		for5.classList.remove('active')
	} else {
		slideFor5.style.display = 'flex'
		slideFor24.style.display = 'none'
		for5.classList.add('active')
		for24.classList.remove('active')
	}
})
