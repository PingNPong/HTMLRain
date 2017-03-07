// all external functions will be stored here 
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

function rainDropTransition(ImageName,xOffset,yTarget,Rotation,time,delayTime)
{
	$(ImageName).transition({delay: delayTime,x: xOffset,y:yTarget, rotate:''+Rotation+'deg',scale: 1},time,"ease");
}

//setting the position, rotations and scales quickly
function SetValues(ImageName,xOffset,yTarget,Rotation,SettingScale,delayTime)
{
	$(ImageName).transition({x: xOffset,y:yTarget, rotate:''+Rotation+'deg',scale: SettingScale,delay: delayTime},5);
}

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
