let company = prompt(What company?, '');

if (company == 'csma') {
	alert('Good!');
} else {
	alert('NO')
}



result  = (a+b < 4) ? 'Malo' : 'Mnogo'



message = (login == 'Сотрудник')  ?'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина':
'';


if (age >= 14 && age <= 90) {


}

let userName = prompt("Who there?", '');

if (userName == 'admin') {

	let pass = prompt('Password?', '');

	if (pass == 'I glavn'){
		alert('Hello');
	} else if (pass == '' || pass == null) {
		alert('otmena');
	} else {
		alert('nevernuy password');
	}
}  else if (userName == '' || userName == null) {
	alert('otmena');
} else {
	alert(" i don't know you")
}


let sum 

function checkAge(age) {
	if (age > 18) {
		return true;
	}

	//
	return confirm('GGG');
}

function checkAge (age) {
return	(age > 18) || true : confirm
}

function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

function min(a, b) {
	return a < b ? a : b;




	function pow (x, n) {
		let result = x;

		for (let i = 1; i < n; i++) {
			result *= x;
		}

		return result;
	}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
	alert('')
} else {
	alert (pow(x, n));
}