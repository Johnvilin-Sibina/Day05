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

//for of loop
for(var i of Object.keys(resume)){
    console.log(i+" :",resume[i]);
}