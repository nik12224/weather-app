const search = document.querySelector('.header__filed')
const searchMagnifier = document.querySelector('.header__magnifer')
const searchClear = document.querySelector('.header__search--clear')

search.addEventListener('keyup', function (e) {
	console.log(e.target.value)
	if (e.target.value.trim() === '') {
		searchMagnifier.classList.remove('hidden')
		searchClear.classList.remove('active')
	} else {
		searchMagnifier.classList.add('hidden')
		searchClear.classList.add('active')
	}
})

searchClear.addEventListener('click', () => {
	search.value = ''
	searchMagnifier.classList.remove('hidden')
	searchClear.classList.remove('active')
})
