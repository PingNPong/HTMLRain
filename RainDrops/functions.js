// all external functions will be stored here 
// functions can relate to element changing and returning of values 
// NVYVE
// Philip Ong   March 17,2017
var displayConsole = false; 

//===== Changing Images =======

// change the continer background 
function ChangeContainer(containerName,pictureName) {
		$(containerName).css('background', 'url('+pictureName+')');
}

//change a targeted image 
function ChangeImg(imageName,pictureName) {
	if (displayConsole)
	{
		console.log("Picture name "+pictureName);
	}
	
	try {
		$(imageName).attr('src', pictureName); // trying to set 
	}
	catch(err) {
		console.log("ChangeImg-Error: "+err.name);
	}
	
}

//===== Video functions =======
function ChangeVideo(vidName,VideoName)
{
	$(vidName).attr('src', VideoName); // trying to set 
}

function playPause() {
	var myVideo = document.getElementById("video_container");
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function playPauseBool(toPlay) {
	var myVideo = document.getElementById("video_container");
    if (toPlay)
        myVideo.play();
    else
        myVideo.pause();
}

function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

//===== Unused transitions atm =======

// sliding function to animate a container left to right 
function slideTransitionFromLeft(LeftName, CentreName,time,delayTime)
{
	$(LeftName).attr('disabled', false);
	$(CentreName).attr('disabled', false);
	// console.log("slideTransition");
	$(CentreName).transition({x: 1920},10);
	$(LeftName).transition({x: -5},10);
	//use this transition rather than animate, better for brightsign 
	$(LeftName).transition({x: -1930,delay: delayTime},time,"linear");
	$(CentreName).transition({x: -10,delay: delayTime},time,"linear");
}	

//setting the out transition of the items NOT used 
function outTransition(ImageName,xOffset,yTarget,Rotation,time,delayTime)
{
	$(ImageName).transition({x: xOffset,y:yTarget,rotate:''+Rotation+'deg',scale: 1},1);
	$(ImageName).transition({y:500, delay: delayTime,scale: 0.1},time,"ease");
}

//setting the in transition of the items NOT used 
function FadeTransition1(ImageName,xOffset,Rotation,time,delayTime)
{
	$(ImageName).transition({x: xOffset,y:0, rotate:''+Rotation+'deg',opacity: 100},10,"ease");
	$(ImageName).transition({ opacity: 0,delay: delayTime },time,"ease");
}

//===== Used transitions  =======

function SetOpacity(ImageName,SetOpacity,time,delayTime)
{
	$(ImageName).transition({x: -10, opacity: SetOpacity, delay: delayTime},time,"ease");
}

function rainDropTransition(ImageName,yTarget,Rotation,time)
{
	$(ImageName).transition({y:yTarget, rotate:''+Rotation+'deg'},time,"ease");
}

function rainDropTransitionX(ImageName,XTarget,yTarget,Rotation,time)
{
	$(ImageName).transition({X:XTarget,y:yTarget, rotate:''+Rotation+'deg'},time,"ease");
}

//setting the position, rotations and scales quickly
function SetValues(ImageName,xOffset,yTarget,Rotation,SettingScale,delayTime)
{
	$(ImageName).transition({x: xOffset,y:yTarget, rotate:''+Rotation+'deg',scale: SettingScale,delay: delayTime},5);
}

//setting the position, rotations and scales quickly
function SetValuesX(ImageName,xOffset,yTarget,Rotation)
{
	$(ImageName).transition({x: xOffset,y:yTarget, rotate:''+Rotation+'deg'},3);
}

function SetValuesMin(ImageName,yTarget,Rotation)
{
	$(ImageName).transition({y:yTarget, rotate:''+Rotation+'deg',duration:10});// ({y:yTarget, rotate:''+Rotation+'deg'},1)
}

function SetValuesNT(ImageName,yTarget,Rotation)
{
	//var Location = yTarget+'px';
	//document.getElementById(ImageName).style.top=yTarget + "px"; 
	var rotate = 'rotate(' + Rotation + 'deg)';
    $("#"+ImageName).css({ 
        '-webkit-transform': rotate
	});
}

function SetValuesNT2(ImageName,yTarget,Rotation,time)
{
	//var Location = yTarget+'px';
	//document.getElementById(ImageName).style.top=yTarget + "px"; 
	var rotate = 'rotate(' + Rotation + 'deg)';
    $("#"+ImageName).css({ 
		'-webkit-transition-duration': time,
        '-webkit-transform': rotate
	});
}


// === return functions ====

function returnPreviousInt(index,currentImg,maxImages)
{
	if ((currentImg-index)<0)
	{//when the new number will be less than 0 -->
		//console.log(currentImg-index+" is now "+(maxImages + (currentImg-index)));
		return maxImages + (currentImg-index);
	}
	else 
	{
		//console.log(currentImg-index+" is now ");
		return currentImg-index;
	}
}

function RandomNumber(minInt,maxInt,minusInt)
{
	var returnNumber = 0;
	returnNumber=Math.random()* maxInt + minInt;
	return (returnNumber-minusInt);
}

function ReturnArrayPosition(EnterNumber)
{
	var returningImage; 
	if (CurrentAngleSet==0)
	{
		returningImage=angleArray[CurrentAngleSet*3+EnterNumber];
	}	
	else 
	{
		var ReturningIndex=CurrentAngleSet*3+EnterNumber;
		if (3+EnterNumber<6)
		{
			//console.log("EN="+EnterNumber+" Less than 7 ="+ReturningIndex+" = "+angleArray[ReturningIndex]);
			returningImage=angleArray[ReturningIndex];
		}
		else 
		{
			ReturningIndex=ReturningIndex-6;
			//console.log("EN="+EnterNumber+" More than 7 ="+ReturningIndex+" = "+angleArray[ReturningIndex]);
			returningImage=angleArray[ReturningIndex];
		}
	}	
	
	return returningImage;
}
