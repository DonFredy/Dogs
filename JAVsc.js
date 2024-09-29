// // document.getElementById("count-el").innerText = 6

// let count = 0 

// console.log (count)

// let Myage = 25

// console.log(Myage)

// let firstRound = 26

// let count  = firstRound

// console.log(count) 

////////////////////////////////////////////////////////
// document.getElementById("count").innerText = 5
/*let firstBatch = 3
let secondBatch = 6
count = firstBatch + secondBatch
console.log(count)*/

// // count = 6 
// count = count + 5

// count = count + 2
/////////////////////////////////////////

// 1. Create two variables, myAge and humanDogRatio

// let BEBEAge = 1
// let humanDogRatio = 7
// let myDogAge = BEBEAge* humanDogRatio

// console.log("Normally BEBE is 1 year old")
// console.log("But in dog years, BEBE is ", myDogAge, "years old.")

// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console


// ///////////////////////////////////////////////////////////////////
// let bonusPoints = 50
// console.log(bonusPoints)

// count = bonusPoints + 100

// console.log(count)

// count = bonusPoints - 25

// console.log(count)

// count = bonusPoints +70

// console.log(count)


//////////////////////////

// let count = 5
// //the following line reassigns the value. it only considers the last assignment
// count = 3
// count = 8

// console.log(count)
////////////////////////////////////
/////////////exercise//////////////
//  function increment(){
//     console.log("button was clicked")
//  }

//  function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
//  }
//  countdown()

//  function logout(){

//     console.log(42)
//  }

//  logout()

//////////////excercise//////////////////

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times

// function TotalLaps(){
//     total = lap1 + lap2 + lap3
//     console.log("total lap is:", total)
// }

// TotalLaps()
// /////////////////excercise//////////////////
// let LapsCompleted = 0

// function incrementLap(){
// LapsCompleted = LapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(LapsCompleted)
////////////////exercise///////////////

let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count  = 0
console.log(saveEl)

function increment(){
    count = count + 1// or count += 1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEL.innerText += countStr
    countEl.textContent = 0
    count = 0

}


