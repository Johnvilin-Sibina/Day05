//1. Create your own resume in JSON format.
//Solution:
let resume = {"Name":"Johnvilin Sibina J","DOB":"04/11/1998","Gender":"Female",
            "Qualification":"M.A. English Literature (2022)","Percentage":81.9,
            "Certificates":"PGDCA, English Typewriting Junior",
            "Skills":"MS Office, C, C++, Tally, HTML, PHP, 1500 strokes in 10 minutes",
            "Languages_Known":"Tamil, English",
            "Experience": "Fresher",
            "Git_Hub":"https://github.com/Johnvilin-Sibina",
            "Religion":"Christianity","Nationality":"Indian","State":"Tamil Nadu",
            "District":"Kanniyakumari","Email":"johnvilinsibina@gmail.com","Mobile":8754928115,
            "Address":"7-74 A, Nagakuzhivilai, Mylacode, Alencode Post, 629802"};

//2. From the above JSON, iterate over all for loop(for, for in, for of, for each).
//Solution:

let arr=[];
for(let [key,value] of Object.entries(resume))   //This for_of loop stores the key and value in the object resume
{                                                //in an array named arr.
arr.push(`${key}: ${value}`);
}
for (let i=0;i<arr.length;i++){                 //This for loop iterates every element in the array arr and prints it.
    console.log(arr[i]);
}