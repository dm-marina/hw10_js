//1
// let x = prompt('Enter something');
// let y = prompt('Enter something');
// let xOrY = x>y ? 'x больше, чем y':'x не больше, чем y';
// alert(xOrY);

// 2
// const num=prompt('Введите число')
// const floatNum = parseFloat(num)
// if(num%2===0){
//     alert(`Число ${num} четное`)
// }else{
//     alert(`Число ${num} нечетное`)
// }


// 3
// const num=prompt('enter a number');
// const floatNum = parseFloat(num)
// const intNum = parseInt(floatNum);
// console.log(intNum);
// const absIntNum = Math.abs(intNum)
// const strNum = absIntNum.toString()

// if(strNum.length==1){
//     lengthNum = 'однозначное'
//     console.log(lengthNum)
// }else if(strNum.length==2){
//     lengthNum = 'двозначное'
//     console.log(lengthNum)
// }else if(strNum.length==3){
//     lengthNum = 'трехзначное'
//     console.log(lengthNum)
// }else{
//     lengthNum='более чем трехзначное'
// }
// const signNum = Math.sign(intNum);
// console.log(signNum);
// if(signNum===1){
//     alert(`Число ${intNum} ${lengthNum} положительное`)
// }else{
//     alert(`Число ${intNum} ${lengthNum} отрицательное`)
// }


// 4
// const a= prompt('Enter first number')
// const b= prompt('Enter second number')
// const c= prompt('Enter third number')
// const floatA = parseFloat(a)
// const floatB = parseFloat(b)
// const floatC = parseFloat(c)
// if(floatA>=floatB && floatA>floatC ||floatA>floatB && floatA>=floatC){
//     alert(`number ${floatA} is greater than ${floatB} and ${floatC}`)
// } else if(floatB>=floatA && floatB>floatC || floatB>floatA && floatB>=floatC ){
//     alert(`number ${floatB} is greater than ${floatA} and ${floatC}`)
// } else if(floatC>=floatA && floatC>floatB ||floatC>floatA && floatC>=floatB){
//     alert(`number ${floatC} is greater than ${floatB} and ${floatC}`)
// }else{
//     alert(`number ${floatA}, ${floatB} and ${floatC} are equal`)
// }

// 5
// const a= +prompt('Enter first side')
// const b= +prompt('Enter second side')
// const c= +prompt('Enter third side')
// if( a+b>c && a+b!=c){
//     alert('exist')
// }else if(a+c>b && a+c!=b){
//     alert('exist')
// }else if(b+a>c && b+a!=c){
//     alert('exist')
// } else if(b+c>a && b+c!=a){
//     alert('exist')
// }else if(c+a>b && c+a!=b){
//     alert('exist')
// }else if(c+b>a && c+b!=a){
//     alert('exist')
// } else{
//     alert("don't exists" )
// }