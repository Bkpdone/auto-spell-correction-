// Dataset of correct Indian states and cities
// Dataset of correct Indian states and cities
// const correctData = [

//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//     "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
//     "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
//     "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
//     "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
//     "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", 
//     "Jaipur", "Agra", "Varanasi", "Udaipur", "Kochi", "Darjeeling", "Shimla",
//     "Pune", "Lucknow", "Chandigarh", "Amritsar", "Gangtok", "Mysore", "Ooty",
//     "Pushkar", "Rishikesh", "Haridwar", "Gwalior", "Jodhpur", "Pushkar", "Nainital",
    
// ];

const correctData = [

    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", 
    "Jaipur", "Agra", "Varanasi", "Udaipur", "Kochi", "Darjeeling", "Shimla",
    "Pune", "Lucknow", "Chandigarh", "Amritsar", "Gangtok", "Mysore", "Ooty",
    "Pushkar", "Rishikesh", "Haridwar", "Gwalior", "Jodhpur", "Pushkar", "Nainital",
    "Alleppey", "Manali", "Puducherry", "Lavasa", "Coorg", "Lonavala",
    "Mahabalipuram", "Rishikesh", "Kumarakom", "Kodaikanal", "Auroville", "Mussoorie",
    "Gokarna", "Almora", "Mahabaleshwar", "Ranikhet", "Alibaug", "Kasauli", "Panchgani",
    "Varkala", "Hampi", "Digha", "Munnar", "Gulmarg", "Yercaud",
    "Nashik", "Coimbatore", "Noida", "Rajkot", "Bhopal", "Indore", "Surat", "Navi Mumbai",
    "Faridabad", "Kanpur", "Varca", "Dharamshala", "Panaji", "Ranchi", "Jammu", "Siliguri",
    "Gurgaon", "Dehradun", "Thane", "Allahabad", "Srinagar", "Jalandhar", "Bhubaneswar", "Cuttack","Nagpur"

];


function autoCorrect(input) {
    const words = input.split(/\s+/); 


    function findClosestMatch(word) {
        let closestMatch = '';
        let minDistance = Infinity;
        for (const correctWord of correctData) {
            const distance = levenshteinDistance(word.toLowerCase(), correctWord.toLowerCase());
            if (distance < minDistance) {
               
               
                minDistance = distance;
                closestMatch = correctWord;
            }
        }
        return closestMatch;
    }

    
    const correctedWords = words.map(word => {
        const closestMatch = findClosestMatch(word);
        return closestMatch;
    });

    return correctedWords.join(' ');
}

function levenshteinDistance(s1, s2) {

    const dp = Array(s1.length + 1).fill(null).map(() => Array(s2.length + 1).fill(null));

    for (let i = 0; i <= s1.length; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= s2.length; j++) {
        dp[0][j] = j;
    }



    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            const cost = s1[i - 1] == s2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1, 


                dp[i][j - 1] + 1, 
                dp[i - 1][j - 1] + cost 
            );
        }
    }

    return dp[s1.length][s2.length];
}

//note: 
const userInput = "gao";
const correctedInput = autoCorrect(userInput);
console.log(correctedInput); 
