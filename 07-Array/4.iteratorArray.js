let letters = [..."hello world"]
console.log(letters.entries);
let string = ""
for(let [index, letter] of letters.entries()){
    if(index % 2 == 0) string+= letter
}
console.log(string)

