const layar = document.querySelector('.calculator-screen')

const updatescr = (number) => {
	layar.value = number
}

const numbers = document.querySelectorAll('.number')
// console.log(numbers)
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		// console.log('tekan')	
		// console.log(event.target.value)
		inputnum(event.target.value)
		updatescr(num_skrg)
	})
})

let num_sblm = ''
let cal_op = ''
let num_skrg = '0'

const inputnum = (number) => {
	if(num_skrg === '0'){
		num_skrg = number
	} else {
		num_skrg += number	
	}
}

const operators = document.querySelectorAll('.operator')

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		// console.log('operator')
		// console.log(event.target.value)
		inputopt(event.target.value)
	})
}) 

const inputopt = (operator) => {
	if (cal_op === '') {
	num_sblm = num_skrg
	}
	cal_op = operator
	num_skrg = '0'
}

const samadgn = document.querySelector('.equal-sign')

samadgn.addEventListener("click", (event) => {
	// console.log('samadgn')
	hitung()
	updatescr(num_skrg)

})

const hitung = () => {
	let hasil = ''
	switch(cal_op) {
		case '+':
			hasil = parseFloat(num_sblm) + parseFloat(num_skrg)
			break
		case '-':
			hasil = parseFloat(num_sblm) - parseFloat(num_skrg)
			break
		case '*':
			hasil = parseFloat(num_sblm) * parseFloat(num_skrg)
			break
		case '/':
			hasil = parseFloat(num_sblm) / parseFloat(num_skrg)
			break
		default :
			break
	}
	num_skrg = hasil
	cal_op = ''
}

const clearbtn = document.querySelector('.all-clear')

clearbtn.addEventListener("click", (event) => {
	// console.log('hapus')
	hpsall()
	updatescr(num_skrg)
})

const hpsall = () => {
	num_sblm = ''
	cal_op = ''
	num_skrg = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener("click", (event) => {
	// console.log(event.target.value)
	inputdesimal(event.target.value)
	updatescr(num_skrg)
})

inputdesimal = (dot) =>{
	if (num_skrg.includes('.')) {
		return
	}
	num_skrg += dot
}

const percentage = document.querySelector('.persen')

percentage.addEventListener("click", (event) => {
	// console.log("persen")
	num_skrg /= 100
	updatescr(num_skrg)
})