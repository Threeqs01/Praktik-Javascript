function myFirst(){
    myDisplayer("Good bye");
}

function mySecond(callback){
    myDisplayer("Hello");
    callback();
}

function myDisplayer(message){
    console.log(message);
}

mySecond(myFirst);


function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}
  
  setInterval(setTime, 1000);
  console.log("Program Finish");
  

function divideNumbers(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Kesalahan: " + error.message);
        return null;
    }
}

console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));  
console.log(divideNumbers(10, 'a'));
