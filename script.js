// Function to preprocess the names
function preprocess(str) {
    return str.replace(/\s+/g, '').toLowerCase();  // Remove spaces and convert to lowercase
}

// Function to count unmatched characters
function countUnmatchedChars(name1, name2) {
    let count = 0;
    for (let i = 0; i < name1.length; i++) {
        let char = name1[i];
        let index = name2.indexOf(char);
        if (index !== -1) {
            name2 = name2.slice(0, index) + name2.slice(index + 1);  // Remove the character from name2
        } else {
            count++;
        }
    }
    return count + name2.length; // Add remaining characters from name2
}

// Function to calculate FLAMES result
function calculateFLAMES() {
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    
    // Preprocess the names
    name1 = preprocess(name1);
    name2 = preprocess(name2);

    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Count unmatched characters
    let unmatchedCount = countUnmatchedChars(name1, name2);

    // FLAMES result calculation
    let flames = "FLAMES";
    let resultIndex = unmatchedCount % flames.length;
    if (resultIndex === 0) resultIndex = flames.length;  // Handle the case when it divides exactly

    let result = flames[resultIndex - 1];
    let flameMeaning = {
        F: "Friendship",
        L: "Love",
        A: "Affection",
        M: "Marriage",
        E: "Enemy",
        S: "Siblings"
    };

    // Display the result
    document.getElementById('result').innerHTML = `FLAMES Result: ${flameMeaning[result]}`;
}
