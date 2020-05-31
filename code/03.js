var arr = [12, 34, 32, 89, 4]

var min = arr[0]
for (const i of arr) {
    min = arr[i] < min ? arr[i] : min
} 

console.log(min)