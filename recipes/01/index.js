// Problema: 
	// Quando usando uma variável, você quer que sua existencial seja tão curta
	// quanto em um escopo funcional. Por exemplo, você gostaria que a vida da 
	// variável exista dentro de um IF 
	
	let a = 4
	{
		let b =2
		console.log(b)
	}
	//console.log(b) haverá um  erro de referência pois a a existência de 'b' estará vinculado 
				//   ao escopo de block.
	
	if ( a === 4 )
	{
		let a =1
		console.log(a)
	}
	
	console.log(a)
	