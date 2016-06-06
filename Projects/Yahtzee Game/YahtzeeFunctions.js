//constructor for score card, possibly add functions to the score section??
function scoreObj(name,isUsed,score){
	this.name=name;
	this.isUsed=isUsed;
	this.score=score;
}

//re-rolls unselected dice
function rollDice(){
	//If die 1 is not checked, re roll
    if(document.getElementById("d1").checked==false){
	    var die1 = document.getElementById("die1");
	    var d1 = Math.floor(Math.random() * 6) + 1;
	    die1.innerHTML = d1;
	}
	//If die 2 is not checked, re roll
	if(document.getElementById("d2").checked==false){
	    var die2 = document.getElementById("die2");
	    var d2 = Math.floor(Math.random() * 6) + 1;
	    die2.innerHTML = d2;
	}
	//If die 3 is not checked, re roll
	if(document.getElementById("d3").checked==false){
	    var die3 = document.getElementById("die3");
	    var d3 = Math.floor(Math.random() * 6) + 1;
	    die3.innerHTML = d3;
	}
	//If die 4 is not checked, re roll
	if(document.getElementById("d4").checked==false){
	    var die4 = document.getElementById("die4");
	    var d4 = Math.floor(Math.random() * 6) + 1;
	    die4.innerHTML = d4;
	}
	//If die 5 is not checked, re roll
	if(document.getElementById("d5").checked==false){
	    var die5 = document.getElementById("die5");
	    var d5 = Math.floor(Math.random() * 6) + 1;
	    die5.innerHTML = d5;
	}
	rollCnt++;

	if(rollCnt==3){
		document.getElementById("rollButton").style.visibility = 'hidden';
		document.getElementById("goToGrading").innerHTML = "Grade Hand";
	}

	//update the view with correct turn numbers and roll numbers
	document.getElementById("turnCounter").innerHTML=("Turn #: "+turnNum);
	document.getElementById("rollCounter").innerHTML=("Roll #: "+rollCnt);
}

//gets the elements the parses them to numbers
function setHand(){

	//get elements
	var inhand=[document.getElementById("die1").innerHTML,
				document.getElementById("die2").innerHTML,
				document.getElementById("die3").innerHTML,
				document.getElementById("die4").innerHTML,
				document.getElementById("die5").innerHTML];

	//parse the array
	for (var j=0;j<5;j++){
		inhand[j]=parseInt(inhand[j]);
		console.log("The "+inhand[j]+" element of the array has been set and parsed in setHand");
	}
	return inhand;
}

//allows the player to see their choices 
function choiceView(){
	var str=" ";
	var hand=new Array(5);

	//get the user's hand
	hand=setHand();

	mrkSort(hand, 5);

	//Aces View
	if((SCORE_CARD["ACES"].isUsed==false)&&(getSumNum(hand,1)==0)){
		str+="<p class='Scratch'>1) Scratch Aces";
		str+="<input type='radio' name='radioScore' id='rAces'><br></p>";
		console.log("Aces can be scratched");
	}
	else if(SCORE_CARD["ACES"].isUsed==false){
		str+="<p class='radioOptions'>1) The Sum of Aces: "+getSumNum(hand,1);
		str+="<input type='radio' name='radioScore' id='rAces'><br></p>";
		console.log("Aces have not been scored");
	}
	else{
		str+="<p class='Used'>1) Aces Have been used";
		str+="<input type='radio' name='radioScore' id='rAces' style='display:none'><br></p>";
		console.log("Aces have been scored");
	}

	//Twos View
	if((SCORE_CARD["TWOS"].isUsed==false)&&(getSumNum(hand,2)==0)){
		str+="<p class='Scratch'>2) Scratch Twos";
		str+="<input type='radio' name='radioScore' id='rTwos' ><br></p>";
		console.log("Twos can be scratched");
	}
	else if(SCORE_CARD["TWOS"].isUsed==false){
		str+="<p class='radioOptions'>2) The Sum of Twos: "+getSumNum(hand,2);
		str+="<input type='radio' name='radioScore' id='rTwos'><br></p>";
		console.log("Twos have not been scored");
	}
	else{
		str+="<p class='Used'>2) Twos have been used";
		str+="<input type='radio' name='radioScore' id='rTwos' style='display:none'><br></p>";
		console.log("Twos have been scored");
	}

	//threes view
	if((SCORE_CARD["THREES"].isUsed==false)&&(getSumNum(hand,3)==0)){
		str+="<p class='Scratch'>3) Scratch Threes";
		str+="<input type='radio' name='radioScore' id='rThrees'><br></p>";
		console.log("Threes can be scratched");
	}
	else if(SCORE_CARD["THREES"].isUsed==false){
		str+="<p class='radioOptions'>3) The Sum of Threes: "+getSumNum(hand,3);
		str+="<input type='radio' name='radioScore' id='rThrees'><br></p>";
		console.log("Threes have not been scored");
	}
	else{
		str+="<p class='Used'>3) Threes have been used";
		str+="<input type='radio' name='radioScore' id='rThrees' style='display:none'><br></p>";
		console.log("Threes have been scored");
	}

	//Fours view
	if((SCORE_CARD["FOURS"].isUsed==false)&&(getSumNum(hand,4)==0)){
		str+="<p class='Scratch'>4) Scratch Fours";
		str+="<input type='radio' name='radioScore' id='rFours'><br></p>";
		console.log("Fours can be scratched");
	}
	else if(SCORE_CARD["FOURS"].isUsed==false){
		str+="<p class='radioOptions'>4) The Sum of Fours: "+getSumNum(hand,4);
		str+="<input type='radio' name='radioScore' id='rFours'><br></p>";
		console.log("Fours have not been scored");
	}
	else{
		str+="<p class='Used'>4) Fours have been used";
		str+="<input type='radio' name='radioScore' id='rFours' style='display:none'><br></p>";
		console.log("Fours have been scored");
	}

	//Five view
	if((SCORE_CARD["FIVES"].isUsed==false)&&(getSumNum(hand,5)==0)){
		str+="<p class='Scratch'>5) Scratch Fives";
		str+="<input type='radio' name='radioScore' id='rFives'><br></p>";
		console.log("Fives can be scratched");
	}
	else if(SCORE_CARD["FIVES"].isUsed==false){
		str+="<p class='radioOptions'>5) The Sum of Fives: "+getSumNum(hand,5);
		str+="<input type='radio' name='radioScore' id='rFives'><br></p>";
		console.log("Fives have not been scored");
	}
	else{
		str+="<p class='Used'>5) Fives have been used";
		str+="<input type='radio' name='radioScore' id='rFives' style='display:none'><br></p>";
		console.log("Fives have been scored");
	}

	//Sixes view
	if((SCORE_CARD["SIXES"].isUsed==false)&&(getSumNum(hand,6)==0)){
		str+="<p class='Scratch'>6) Scratch Sixes";
		str+="<input type='radio' name='radioScore' id='rSixes'><br></p>";
		console.log("A Sixes can be scratched");
	}
	else if(SCORE_CARD["SIXES"].isUsed==false){
		str+="<p class='radioOptions'>6) The Sum of Sixes: "+getSumNum(hand,6);
		str+="<input type='radio' name='radioScore' id='rSixes'><br></p>";
		console.log("Sixes have not been scored");
	}
	else{
		str+="<p class='Used'>6) Sixes have been used";
		str+="<input type='radio' name='radioScore' id='rSixes' style='display:none'><br></p>";
		console.log("Sixes have been scored");
	}

	//3 of a Kind view
	if((SCORE_CARD["KIND3"].isUsed==false)&&(is3Kind(hand)==true)){
		str+="<p class='radioOptions'>7) 3 of a Kind: "+getSum(hand);
		str+="<input type='radio' name='radioScore' id='rKind3'><br></p>";
		console.log("3 of a Kind can be scored");
	}
	else if(SCORE_CARD["KIND3"].isUsed==false){
		str+="<p class='Scratch'>7) Scratch 3 of a Kind";
		str+="<input type='radio' name='radioScore' id='rKind3'><br></p>";
		console.log("3 of a Kind can be scratched");
	}
	else{
		str+="<p class='Used'>7) 3 of a Kind has been used";
		str+="<input type='radio' name='radioScore' id='rKind3' style='display:none'><br></p>";
		console.log("3 of a Kind has been scored");
	}

	//4 of a Kind view
	if((SCORE_CARD["KIND4"].isUsed==false)&&(is4Kind(hand)==true)){
		str+="<p class='radioOptions'>8) 4 of a Kind: "+getSum(hand);
		str+="<input type='radio' name='radioScore' id='rKind4'><br></p>";
		console.log("4 of a Kind can be scored");
	}
	else if(SCORE_CARD["KIND3"].isUsed==false){
		str+="<p class='Scratch'>8) Scratch 4 of a Kind";
		str+="<input type='radio' name='radioScore' id='rKind4'><br></p>";
		console.log("4 of a Kind can be scratched");
	}
	else{
		str+="<p class='Used'>8) 4 of a Kind has been used";
		str+="<input type='radio' name='radioScore' id='rKind4' style='display:none'><br></p>";
		console.log("4 of a Kind has been scored");
	}

	//Full House view
	if((SCORE_CARD["FHOUSE"].isUsed==false)&&(isFull(hand)==true)){
		str+="<p class='radioOptions'>9) Full House: 25";
		str+="<input type='radio' name='radioScore' id='rFhouse'><br></p>";
		console.log("Full House can be scored");
	}
	else if(SCORE_CARD["FHOUSE"].isUsed==false){
		str+="<p class='Scratch'>9) Scratch Full House";
		str+="<input type='radio' name='radioScore' id='rFhouse'><br></p>";
		console.log("Full House can be scratched");
	}
	else{
		str+="<p class='Used'>9) Full House has been used";
		str+="<input type='radio' name='radioScore' id='rFhouse' style='display:none'><br></p>";
		console.log("Full House has been scored");
	}

	//Small Straight view
	if((SCORE_CARD["SS"].isUsed==false)&&(isSS(hand)==true)){
		str+="<p class='radioOptions'>10) Small Straight: 30";
		str+="<input type='radio' name='radioScore' id='rSS'><br></p>";
		console.log("Small Straight can be scored");
	}
	else if(SCORE_CARD["SS"].isUsed==false){
		str+="<p class='Scratch'>10) Scratch Small Straight";
		str+="<input type='radio' name='radioScore' id='rSS'><br></p>";
		console.log("Small Straight can be scratched");
	}
	else{
		str+="<p class='Used'>10) Small Straight has been used";
		str+="<input type='radio' name='radioScore' id='rSS' style='display:none'><br></p>";
		console.log("Small Straight has been scored");
	}

	//Large Straight view
	if((SCORE_CARD["LS"].isUsed==false)&&(isLS(hand)==true)){
		str+="<p class='radioOptions'>11) Large Straight: 40";
		str+="<input type='radio' name='radioScore' id='rLS'><br></p>";
		console.log("Large Straight can be scored");
	}
	else if(SCORE_CARD["LS"].isUsed==false){
		str+="<p class='Scratch'>11) Scratch Large Straight";
		str+="<input type='radio' name='radioScore' id='rLS'><br></p>";
		console.log("Large Straight can be scratched");
	}
	else{
		str+="<p class='Used'>11) Large Straight has been used";
		str+="<input type='radio' name='radioScore' id='rLS' style='display:none'><br></p>";
		console.log("Large Straight has been scored");
	}

	//Yahtzee view
	if((SCORE_CARD["YAHTZEE"].isUsed==false)&&(isY(hand)==true)){
		str+="<p class='radioOptions'>12) Yahtzee: 50";
		str+="<input type='radio' name='radioScore' id='rYahtzee'><br></p>";
		console.log("Yahtzee can be scored");
	}
	else if(SCORE_CARD["YAHTZEE"].isUsed==false){
		str+="<p class='Scratch'>12) Scratch Yahtzee";
		str+="<input type='radio' name='radioScore' id='rYahtzee'><br></p>";
		console.log("Yahtzee can be scratched");
	}
	else{
		str+="<p class='Used'>12) Yahtzee has been used";
		str+="<input type='radio' name='radioScore' id='rYahtzee' style='display:none'><br></p>";
		console.log("Yahtzee has been scored");
	}

	//Chance view
	if(SCORE_CARD["CHANCE"].isUsed==false){
		str+="<p class='radioOptions'>13) Chance: "+getSum(hand);
		str+="<input name='radioScore' id='rChance' type='radio'><br></p>";
		console.log("Chance can be scored");
	}
	else{
		str+="<p class='Used'>13) Chance has been used";
		str+="<input type='radio' name='radioScore' id='rChance' style='display:none'><br></p>";
		console.log("Chance has been scored");
	}

	document.getElementById("gradingForm").innerHTML=str;
	document.getElementById("resetToggle").innerHTML="<button type='button' id='gradeButton' onclick='scoreModel()'>Score Hand</button>";

	return str;
}

//resets entire view after player finishs grading turn
function resetView(){

	//get the view to be returned with a new button to start new turn
	var resetStr=choiceView();

	//reset the radio buttons to false
	resetRadio();

	//reset checkboxes in roll feature
	resetCheckBoxes();

	//resests all of the dice to zero
	resetDice();

	//output to DOM
	document.getElementById("gradingForm").innerHTML=resetStr;

	//get new button
	document.getElementById('resetToggle').innerHTML="<button type='button' id='resetButton' onclick='newTurn()'>Next Turn</button>";
}

//resets the radio buttons
function resetRadio(){
	console.log("Entered resetRadio()");

 	var radioButtonArray = document.getElementsByName('radioScore');

 	for (var i=0; i<radioButtonArray.length; i++){
  		var radioButton = radioButtonArray[i];
  		radioButton.checked = false;
 	}
	//$('input[name="radioScore"]').prop('checked', false);
}

function resetCheckBoxes(){
	console.log("Entered resetCheckBoxes()");

	var checkBoxArray = document.getElementsByName('rr1');

	for (var i=0; i<checkBoxArray.length; i++){
  		var checkBox = checkBoxArray[i];
  		checkBox.checked = false;
 	}
}

//resets all of the dice to zero after each turn
function resetDice(){
	console.log("Entered resetDice()");
	document.getElementById("die1").innerHTML=0;
	document.getElementById("die2").innerHTML=0;
	document.getElementById("die3").innerHTML=0;
	document.getElementById("die4").innerHTML=0;
	document.getElementById("die5").innerHTML=0;
}

function finishGameView(){
	console.log("Entered finishGameView()");

	var finishStr=" ";

	//get the totals from the game and store in TOTALS object
	TOTALS.upper=(SCORE_CARD["ACES"].score+SCORE_CARD["TWOS"].score+SCORE_CARD["THREES"].score+SCORE_CARD["THREES"].score+SCORE_CARD["FOURS"].score+SCORE_CARD["FIVES"].score+SCORE_CARD["SIXES"].score);
	TOTALS.lower=(SCORE_CARD["KIND3"].score+SCORE_CARD["KIND4"].score+SCORE_CARD["FHOUSE"].score+SCORE_CARD["SS"].score+SCORE_CARD["LS"].score+SCORE_CARD["YAHTZEE"].score+SCORE_CARD["CHANCE"].score);
	TOTALS.overall=(TOTALS.upper+TOTALS.lower);

	//see if user qualifies for upper bonus
	if(TOTALS.upper>=63){
		TOTALS.upper+=36;
	}

	console.log("The Upper Total "+TOTALS.upper);
	console.log("The Lower Total "+TOTALS.upper);
	console.log("The Overall Total "+TOTALS.overall);

	//set up new view
	finishStr+="<p>Congratulations<br />You Finished the Game<p>";
	finishStr+="<form action='YahtzeeFinished.html'><button type='submit' id='resetButton'>See Score</button></form>";

	//output the view
	document.getElementById("mechRoll").innerHTML=finishStr;
}

function scoreModel(){
	console.log("Entered scoreModel");

	//create new array so user can select
	var scHand= new Array(5);
	var isRChecked=false;

	//get the array
	scHand=setHand();

	//user options

	//if user selected aces
	if(document.getElementById('rAces').checked==true){
		//set the correct values
		SCORE_CARD["ACES"].score=getSumNum(scHand,1);
		SCORE_CARD["ACES"].isUsed=true;

		//make sure the console is updated
		console.log("Aces were scored at: "+SCORE_CARD["ACES"].score);
		console.log("Aces isUSed: "+SCORE_CARD["ACES"].isUsed);
		isRChecked=true;
	}

	//if user selects twos
	if(document.getElementById('rTwos').checked==true){
		//set the correct values
		SCORE_CARD["TWOS"].score=getSumNum(scHand,2);
		SCORE_CARD["TWOS"].isUsed=true;

		//make sure the console is updated
		console.log("Twos were scored at: "+SCORE_CARD["TWOS"].score);
		console.log("Twos isUSed: "+SCORE_CARD["TWOS"].isUsed);
		isRChecked=true;
	}

	//if user selects Threes
	if(document.getElementById('rThrees').checked==true){
		//set the correct values
		SCORE_CARD["THREES"].score=getSumNum(scHand,3);
		SCORE_CARD["THREES"].isUsed=true;

		//make sure the console is updated
		console.log("Threes were scored at: "+SCORE_CARD["THREES"].score);
		console.log("Threes isUSed: "+SCORE_CARD["THREES"].isUsed);
		isRChecked=true;
	}

	//if user selects Fours
	if(document.getElementById('rFours').checked==true){
		//set the correct values
		SCORE_CARD["FOURS"].score=getSumNum(scHand,4);
		SCORE_CARD["FOURS"].isUsed=true;

		//make sure the console is updated
		console.log("Fours were scored at: "+SCORE_CARD["FOURS"].score);
		console.log("Fours isUSed: "+SCORE_CARD["FOURS"].isUsed);
		isRChecked=true;
	}

	//if user selects Fives
	if(document.getElementById('rFives').checked==true){
		//set the correct values
		SCORE_CARD["FIVES"].score=getSumNum(scHand,5);
		SCORE_CARD["FIVES"].isUsed=true;

		//make sure the console is updated
		console.log("Fives were scored at: "+SCORE_CARD["FIVES"].score);
		console.log("Fives isUSed: "+SCORE_CARD["FIVES"].isUsed);
		isRChecked=true;
	}

	//if user selects Sixes
	if(document.getElementById('rSixes').checked==true){
		//set the correct values
		SCORE_CARD["SIXES"].score=getSum(scHand,6);
		SCORE_CARD["SIXES"].isUsed=true;

		//make sure the console is updated
		console.log("Sixes were scored at: "+SCORE_CARD["SIXES"].score);
		console.log("Sixes isUSed: "+SCORE_CARD["SIXES"].isUsed);
		isRChecked=true;
	}

	//if user selects 3 of a kind
	if(document.getElementById('rKind3').checked==true){
		//set the correct values
		if(is3Kind(scHand)==true){
			SCORE_CARD["KIND3"].score=getSum(scHand);
		}
		else{
			SCORE_CARD["KIND3"].score=0;
		}
		SCORE_CARD["KIND3"].isUsed=true;

		//make sure the console is updated
		console.log("3 of a kind was scored at: "+SCORE_CARD["KIND3"].score);
		console.log("3 kind isUSed: "+SCORE_CARD["KIND3"].isUsed);
		isRChecked=true;
	}

	//if user selects 4 of a kind
	if(document.getElementById('rKind4').checked==true){
		//set the correct values
		if(is4Kind(scHand)==true){
			SCORE_CARD["KIND4"].score=getSum(scHand);
		}
		else{
			SCORE_CARD["KIND4"].score=0;
		}
		SCORE_CARD["KIND4"].isUsed=true;

		//make sure the console is updated
		console.log("3 of a kind was scored at: "+SCORE_CARD["KIND4"].score);
		console.log("3 kind isUSed: "+SCORE_CARD["KIND4"].isUsed);
		isRChecked=true;
	}

	//if user selects Full House
	if(document.getElementById('rFhouse').checked==true){
		//set the correct values
		if(isFull(scHand)==true){
			SCORE_CARD["FHOUSE"].score=25;
		}
		else{
			SCORE_CARD["FHOUSE"].score=0;
		}
		SCORE_CARD["FHOUSE"].isUsed=true;

		//make sure the console is updated
		console.log("Full House was scored at: "+SCORE_CARD["FHOUSE"].score);
		console.log("Full House isUSed: "+SCORE_CARD["FHOUSE"].isUsed);
		isRChecked=true;
	}

	//if user selects Small Straight
	if(document.getElementById('rSS').checked==true){
		//set the correct values
		if(isSS(scHand)==true){
			SCORE_CARD["SS"].score=30;
		}
		else{
			SCORE_CARD["SS"].score=0;
		}
		SCORE_CARD["SS"].isUsed=true;

		//make sure the console is updated
		console.log("Small Straight was scored at: "+SCORE_CARD["SS"].score);
		console.log("Small Straight isUSed: "+SCORE_CARD["SS"].isUsed);
		isRChecked=true;
	}

	//if user selects Large Straight
	if(document.getElementById('rLS').checked==true){
		//set the correct values
		if(isLS(scHand)==true){
			SCORE_CARD["LS"].score=40;
		}
		else{
			SCORE_CARD["LS"].score=0;
		}
		SCORE_CARD["LS"].isUsed=true;

		//make sure the console is updated
		console.log("Large Straight was scored at: "+SCORE_CARD["LS"].score);
		console.log("Large Straight isUSed: "+SCORE_CARD["LS"].isUsed);
		isRChecked=true;
	}

	//if user selects Yahtzee
	if(document.getElementById('rYahtzee').checked==true){
		//set the correct values
		if(isY(scHand)==true){
			SCORE_CARD["YAHTZEE"].score=50;
		}
		else{
			SCORE_CARD["YAHTZEE"].score=0;
		}
		SCORE_CARD["YAHTZEE"].isUsed=true;

		//make sure the console is updated
		console.log("Yahtzee was scored at: "+SCORE_CARD["YAHTZEE"].score);
		console.log("Yahtzee isUSed: "+SCORE_CARD["YAHTZEE"].isUsed);
		isRChecked=true;
	}

	//if user selects Chance
	if(document.getElementById('rChance').checked==true){
		//set the correct values
		SCORE_CARD["CHANCE"].score=getSum(scHand);
		SCORE_CARD["CHANCE"].isUsed=true;

		//make sure the console is updated
		console.log("Chance was scored at: "+SCORE_CARD["CHANCE"].score);
		console.log("Chance isUSed: "+SCORE_CARD["CHANCE"].isUsed);
		isRChecked=true;
	}

	//make sure that the user got through grading ok
	if(isRChecked!=true){
		window.alert("You did not choose an option!");
		console.log("Failure to launch... I mean grade!");
	}
	else{
		resetView();
		turnNum++;
		if(turnNum<14){
			resetView();
		}
		else {
			finishGameView();
		}
	}
}

//returns the sum of all numbers
function getSum(H){
	var sum=0;

	for(var i=0;i<5;i++){
		sum+=H[i];
	}
	//output result to the console
	console.log("The Sum of your hand is: "+sum);

	//return the value
	return sum;
}

//returns the sum of all the numbers that are Num
function getSumNum(H,Num){
	var sum=0;

	for(var i=0;i<5;i++){
		if(H[i]==Num)sum+=H[i];
	}
	//output result to the console
	console.log("The Sum of "+Num+" are: "+sum);

	//return the value
	return sum;
}

//resets the page for a new turn
function newTurn(){
	console.log("Entered newTurn()");
	var resetStr=" ";

	//reset the number of rolls
	rollCnt=0;

	//re-output the button
	resetStr+="<button id='rollButton' type='button' onclick='rollDice()'>Roll Dice</button><br/>";
	resetStr+="<button id='goToGrading' type='button' onclick='choiceView()'>Keep All</button>";

	document.getElementById("rollMechButtons").innerHTML=resetStr;
}

//mark sort function
function mrkSort(a, n){
    //nested for loop 
    for(var i=0;i<n;i++){
        for (var j=0;j<n;j++){
            if(a[i]<a[j]){
                a[i]=a[i]^a[j];
                a[j]=a[i]^a[j];
                a[i]=a[i]^a[j];
            }
        }
    }
}
function is3Kind(Arry){
    if ((Arry[0]==Arry[1]&&Arry[1]==Arry[2])||
            (Arry[2]==Arry[3]&&Arry[3]==Arry[4])){
        return true;
    }
    else{
        return false;
    }
}
function is4Kind(Arry){
    if ((Arry[0]==Arry[1]&&Arry[1]==Arry[2]&&Arry[2]==Arry[3])||
            (Arry[1]==Arry[2]&&Arry[2]==Arry[3]&&Arry[3]==Arry[4])){
        return true;
    }
    else{
        return false;
    }
}
function isFull(Arry){
    if (((Arry[0]==Arry[1]&&Arry[1]==Arry[2])&&(Arry[3]==Arry[4]))||
            ((Arry[2]==Arry[3]&&Arry[3]==Arry[4])&&(Arry[0]==Arry[1]))){
        return true;
    }
    else{
        return false;
    }
}
function isSS(Arry){
    var temp=new Array(5);
    var isOk=false;
    
    //create temp array
    for(var i=0;i<5;i++){
        temp[i]=Arry[i];
    }
    
    //move any doubles to the back of the array
    for(var j=0;j<(4);j++){
        if(temp[j]==Arry[j+1]){
            temp[j]=0;
        }
    }
    
    //sort the array
    mrkSort(temp, 5);
    
    //see if it fits into the small straight catagory
    if((temp[1]==(temp[2]-1))&&(temp[1]==(temp[3]-2))&&(temp[1]==(temp[4]-3))){
        isOk=true;
    }
    return isOk;
}
function isLS(Arry){
    if(((Arry[0]+1)==Arry[1])&&((Arry[0]+2)==Arry[2])&&
            ((Arry[0]+3)==Arry[3])&&((Arry[0]+4)==Arry[4])||
            (((Arry[1]+1)==Arry[2])&&((Arry[1]+2)==Arry[3])&&
            ((Arry[1]+3)==Arry[3])&&((Arry[1]+4)==Arry[4]))){
        return true;
    }
    else{
    	return false;
    }
}
function isY(Arry){
    if(Arry[0]==Arry[1]&&Arry[1]==Arry[2]&&Arry[2]==Arry[3]&&Arry[3]==Arry[4]){
        return true;
    }
    else {
    	return false;
    }
}