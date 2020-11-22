var flipAndInvertImage = function(A) {
    return A.map(eachRow => {
        return eachRow.reverse() 
		.map(eachValue => { 
		return eachValue === 0 ? 1 : 0
        })   
    })
};