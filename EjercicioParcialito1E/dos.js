/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let nombre;
	let categoria;
	let precio;
	let max = 1;
	let respuesta = "si";
	let respuesta2 = "si";
	let bebida1;
	let lacteos1;
	let lacteos2;
	let limpieza1;
	let almacen1;
	let contabe = 0;
	let acumulacteo = 0;


	while (respuesta == "si") {

		while (respuesta2 == "si") {
		nombre=prompt("Ingrese un producto");
		alert("El producto ingresado es: "+nombre);
		respuesta2 = prompt("Desea continuar si/no");}

		

		categoria = prompt("Categora: almacen, lácteos, limpieza y bebidas");
		switch (categoria) {
			case "bebidas":
				contabe++;
				break;
			case "lácteos":
				break;

		}
		precio = prompt("Precio");
		while (precio >= 0 || precio <= 1000) {

			if (precio > max) {
				max = precio;
			}

		}

		respuesta = prompt("Desea continuar si/no");



		document.write("El articulo con el precio mas alto es  " + max + "<br>");
		document.write("Cantidad de bebidas  " + contabe + "<br>");
		document.write("Cantidad de bebidas  " + contabe + "<br>")

	}
}