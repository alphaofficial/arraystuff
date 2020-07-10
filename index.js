let A = [1,3,4,5]
let B = [1,2,5,6,7]

/**
 * Array Intersection
 * elements shared in common
 */

let intersection = A.filter(x => B.includes(x))
console.log("Intersection: ", intersection)

/**
 * Array Difference
 * elements from A that are not in B
 */

let difference = A.filter(x => !B.includes(x))
console.log("Difference: ", difference)


/**
 * Symmetrical Array Difference
 * elements from A that are not in B and vice versa
 */

let sym_difference = A.filter(x => !B.includes(x)).concat(B.filter(x => !A.includes(x)))
console.log("Symmetrical Difference: ", sym_difference)


/**
 * Array Union
 * elements from Both A and B
 */

//Sets in javascript contains only distinct elements
let union = [...new Set([...A, ...B])] //spread operator
console.log("union: ", union)