function superScary() {
    // Step 1: Get user Input
    
    let k = Number(document.getElementById("userInput").value);      // Get the user Input
    let searchLen = Math.floor(Math.random() * (20 - 5 + 1)) + 5;      // Gathering Numbers to search thru (Min of 5 elements with max of 20). Determines ele. to put thru array
    let arr = [];                                                      // Array creation to search thru with loop 

    //Result Variables
    let result = false;                                             // default of false to fall back on if no numbers match up
    let resultText = "";

    //Step 2: Generating random array 
    for (let i = 0; i < searchLen; i++) {                        // i stars at 0; I < var searchLen; i + 1
        arr.push(Math.floor(Math.random() * 101))               // returns a random integer from 0 to 100 
    }  
    // Step 3: Check if 2 nums add up
    for (let i = 0; i < arr.length - 1; i++) {                  // Outer loop - checks first element
        for (let j = i + 1; j < arr.length - 1; j++) {                 // inner loop - checks every other element against 1st
            if (arr[i] + arr[j] == k) {
                result = true                                  // true if numbers match up
                resultText += arr[i] + " + " + arr[j] + "<br>";
            }
        }
    }

    //Step 4: Result Output
    document.getElementById("result").innerHTML = result + "<br>" + resultText;
};