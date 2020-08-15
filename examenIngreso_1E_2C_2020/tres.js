/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let respuesta = "s";
	let respuesta1 = "s";
	let contabar = 0;
	let contacat = 0;
	let contasal = 0;
	let pasamaxf = 0;
	letpasamaxm = 0;

	do {
		sexo = prompt("Ingrese su sexo f/m");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Ingrese un sexo VALIDO f/m");
		}

		lugar = prompt("Ingrese el lugar: bariloche, cataratas o salta");
		while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")) {
			lugar = prompt("Ingrese el lugar VALIDO: bariloche, cataratas o salta");
		}

		temporada = prompt("Ingrese temporada: otoño, invierno, verano, primavera");
		while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")) {
			temporada = prompt("Ingrese una temporada VALIDO: otoño, invierno, verano, primavera");
		}
		cantidad = parseInt(prompt("Ingrese la cantidad de personas "));
		while (!(cantidad >= 1)) {
			cantidad = parseInt(prompt("Ingrese cantidad de personas VALIDA"));
		}

		switch (lugar) {
			case "bariloche":
				contabar++;
				break;
			case "cataratas":
				contacat++
				break;
			case "salta":
				contasal++
				break;

		}
		switch (sexo) {
			case "f":
				pasamaxf = cantidad;
				break;
			case "m":
				pasamaxm = cantidad;
				break;
		}
		respuesta = prompt("Desea ingresar mas datos? s/n");
	} while (respuesta == "s");

	//a)el lugar más elegido
	if (contabar > contacat && contabar > contasal) {
		console.log("El lugar mas elegido es " + contabar);
	}

	if (contacat > contabar && contacat > contasal) {
		console.log("El lugar mas elegido es " + contacat);
	}

	if (contasal > contabar && contasal > contacat) {
		console.log("El lugar mas elegido es " + contasal);
	}
	//b)el sexo de titular que lleva más pasajeros.
	if (pasamaxf > pasamaxm) {
		console.log("La cantidad de pasajeros feneninos es " + pasamaxf);
	}
	if (pasamaxm > pasamaxf) {
		console.log("La cantidad de pasajeros masculinos  es " + pasamaxm);
	}

	//c)el promedio de personas por viaje,  que viajan en invierno

}
