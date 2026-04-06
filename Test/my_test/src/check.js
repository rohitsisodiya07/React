let data = "My Name is Rohit" ;
let vowels = 0 ;
let space = 0 ;
let conso = 0 ;
let char = 0 ;

for( let ch of data){
    
    if( ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
        vowels++;
    }
    else if( ch === ' '){
        space++;
    }
    else{
        conso++;
        
    }
    char++;
}
console.log("Vowels = ", vowels);
console.log("Consonant = ", conso);
console.log("Space = ", space);

console.log("Total Words = ", data.split(" ").length)

console.log('Character = ', char);

