function check() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct=0;

	 if(question1 =="Providence") {
	 	correct++;
	 }
	  if(question2 =="Hartford") {
	 	correct++;
	 }
	  if(question3 =="Albany") {
	 	correct++;
	 }

	var messages = ["Great job", "That's just okayy", "You really need to do better"]; 
	var pictures = ["img/giphy.gif", "img/meh.gif", "img/lose.gif"];
	var range ;

	 if(correct < 1) {
	 	range = 2;
	 }
	 else if(correct > 0 && correct < 3) {
	 	range = 1;
	 }
	 else if(correct > 2) {
	 	range = 0;
	 }


	document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("picture").src = pictures[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct."; // innerHTML is used to change whatever is inside that element id in html file.
 }