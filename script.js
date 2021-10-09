let result_area = document.getElementById("result-area");
console.log(result_area);
let show_result_btn = document.getElementById("show-result");

let birthdate = document.getElementById("birth-date");
let person_name = document.getElementById("name");
console.log(person_name);

let play_again_btn = document.getElementById("play-again");
console.log(play_again_btn);

let name_already_guess = document.getElementById("name-already-guess");
// console.log(previous_results);

let wrapper = document.getElementById("wrapper");

let previous_results = [];

let people_birthdays = [
    {"Boakai Kamara":"January 15"}, {"Carlos Nah":"October 9"}, {"Nathan Siafa":"April 19"}, {"Blessing Boaslah":"November 17"},
    {"Faith Boslah":"May 16"}, {"James Gaye":"March 30"}, {"Lee Zarwolo":"October 27"}, {"Bendelvia Tulay":"June 22"}, 
    {"Prince Saye":"October 9"}, {"Laura Umuhire":"April 11"}, {"Martin Munezero":"October 1"}, {"Yallah Ndorbor":"June 26"},
    {"Princess Van":"October 7"}, {"Albertlyn Williams":"October 8"},  {"Charles Gardea":"May 25"}
]

function getIndividualBirthdayRandomly(){

    wrapper.style.display = "flex";

    //generate random index
    let random_index = Math.floor(Math.random() * people_birthdays.length) ;
    console.log(random_index);

    //print random individual birthday
    let birthday_of_selected_individual = people_birthdays[random_index];
    console.log(birthday_of_selected_individual);

    //display the data in the page

    

    birthdate.innerHTML = Object.values(birthday_of_selected_individual);
    person_name.innerHTML = Object.keys(birthday_of_selected_individual)+"'s";

    
    let current_result = people_birthdays[random_index];
    console.log(current_result);
    previous_results.push(Object.keys(birthday_of_selected_individual));

    console.log(previous_results);
    // console.log(people_birthdays);

    //display previous results names
    name_already_guess.innerHTML = previous_results;
    
}


function hideWrapper(){
    wrapper.style.display = "none";
}
// getIndividualBirthdayRandomly();
show_result_btn.addEventListener("click", getIndividualBirthdayRandomly);
play_again_btn.addEventListener("click", hideWrapper);