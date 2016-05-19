//Current Date Function
function getCurrentDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0
	var yyyy = today.getFullYear();
	if(dd<10){dd='0'+dd} 
	if(mm<10){mm='0'+mm} 
	today = (mm+'/'+dd+'/'+yyyy);
	return today;
}

//Testing Function
function test(){
	alert("Testing, testing!");
}
		
//Get URL Function
function getFormUrl(){
	var formUrl=window.location.href;
	return formUrl;
}

//Find and Replace Function
function findAndReplace(str, findVal, changeTo){
	do{
		var findC = str.indexOf(findVal);
		str = str.replace(findVal, changeTo);
	}while(findC != -1);
	return str;
}

//UTF-8 Search and Replace Function
function replaceUtf(str){
	str = findAndReplace(str, "+", " ");
	str = findAndReplace(str, "%20", " ");
	str = findAndReplace(str, "%21", "!");
	str = findAndReplace(str, '%22', '"');
	str = findAndReplace(str, "%23", "#");
	str = findAndReplace(str, "%24", "$");
	str = findAndReplace(str, "%25", "%");
	str = findAndReplace(str, "%26", "&");
	str = findAndReplace(str, "%27", "'");
	str = findAndReplace(str, "%28", "(");
	str = findAndReplace(str, "%29", ")");
	str = findAndReplace(str, "%2A", "*");
	str = findAndReplace(str, "%2B", "+");
	str = findAndReplace(str, "%2C", ",");
	str = findAndReplace(str, "%2D", "-");
	str = findAndReplace(str, "%2E", ".");
	str = findAndReplace(str, "%2F", "/");
	str = findAndReplace(str, "%3A", ":");
	str = findAndReplace(str, "%3B", ";");
	str = findAndReplace(str, "%3C", "<");
	str = findAndReplace(str, "%3D", "=");
	str = findAndReplace(str, "%3E", ">");
	str = findAndReplace(str, "%3F", "?");
	str = findAndReplace(str, "%40", "@");
	str = findAndReplace(str, "%5B", "[");
	str = findAndReplace(str, "%5C", "\\");//Escaped backslash
	str = findAndReplace(str, "%5D", "]");
	str = findAndReplace(str, "%5E", "^");
	str = findAndReplace(str, "%5F", "_");
	str = findAndReplace(str, "%60", "`");
	str = findAndReplace(str, "%7B", "{");
	str = findAndReplace(str, "%7C", "|");
	str = findAndReplace(str, "%7D", "}");
	str = findAndReplace(str, "%7E", "~");
	return str;
}

//URL Info Split Function
function getFormInfo(url){
	var info=url.split("?");
	var pairs=info[1].split("&");
	var nameVal=new Object();
	for(var i=0;i<pairs.length;i++){
		var map=pairs[i].split("=");
		var name=map[0];
		name = replaceUtf(name);//Clears the UTF-8 encoding from the field names
		var val=map[1];
		val = replaceUtf(val);	//Clears the UTF-8 encoding from the field values
		nameVal[name]=val;
	}
	return nameVal;
}

//Write the Object Contents as a String Function
function writeObjToStr(obj){
	var str="";
	for(var prop in obj){
		str+=("<p>"+prop+": "+obj[prop]+"</p>");
	}
	return str;
}

//Grab a value from the object
function grabValue(obj, srch){
	var objVal=obj[""+srch+""];
	return objVal;
}


//Name/Value Retrieval Function
	//Retrieve a form field record from the nameVal object
	//created by the getFormInfo function above:
		//This function returns an array, where:
			//the 0 index contains the field name
			//the 1 index contains the field value
function grabRecord(obj, srch){
	var objRec=[];
		objRec[0]=srch;
		objRec[1]=obj[""+srch+""];
	return objRec;
}

//Below are my storage functions:

//Object Stringify Function
function stringifyObject(obj){
	var str=JSON.stringify(obj);
	return str;
}

//Stringified Object Parse Function
function parseToObject(str){
	var obj=JSON.parse(str);
	return obj;
}

//Unique ID Function
	//Creates a unique ID from values stored in an object by returning the 
	//concatenation of the first letters of ltr1 and ltr2 and the value of srch.
function getUserId(obj, ltr1, ltr2, srch){
	var val1=obj[""+ltr1+""];
		val1=val1.charAt(2);
	var val2=obj[""+ltr2+""];
		val2=val2.charAt(0);
	var val3=obj[""+srch+""];
	var userId=(val1+val2+val3);
	return userId;
}
