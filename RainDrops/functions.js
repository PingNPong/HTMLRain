// all external functions will be stored here 
var displayConsole = false; 

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

function SetOpacity(ImageName,SetOpacity,time,delayTime)
{
	$(ImageName).transition({x: -10, opacity: SetOpacity, delay: delayTime},time,"ease");
}

function rainDropTransition(ImageName,xOffset,yTarget,Rotation,time,delayTime)
{
	//$(ImageName).transition({y:-350,scale: 0.45},1);
	$(ImageName).transition({x: xOffset,y:yTarget, rotate:''+Rotation+'deg',scale: 1,delay: delayTime},time,"ease");
}

function outTransition(ImageName,xOffset,yTarget,Rotation,time,delayTime)
{
	$(ImageName).transition({x: xOffset,y:yTarget,rotate:''+Rotation+'deg',scale: 1},1);
	$(ImageName).transition({y:500, delay: delayTime,scale: 0.1},time,"ease");
}

function FadeTransition1(ImageName,xOffset,Rotation,time,delayTime)
{
	$(ImageName).transition({x: xOffset,y:0, rotate:''+Rotation+'deg',opacity: 100},10,"ease");
	$(ImageName).transition({ opacity: 0,delay: delayTime },time,"ease");
}

function setParameters(ImageName,xOffset,yTarget,Rotation,setScale,delayTime)
{
	$(ImageName).transition({x: xOffset,y:yTarget, rotate:''+Rotation+'deg',scale: setScale,delay: delayTime},1,"ease");
}

function returnPreviousInt(index,currentImg,maxImages)
{
	if ((currentImg-index)<0)
	{
	//when the new number will be less than 0 -->
		console.log(currentImg-index+" is now "+(maxImages + (currentImg-index)));
		return maxImages + (currentImg-index);
	}
	else 
	{
		console.log(currentImg-index+" is now ");
		return currentImg-index;
	}
}


// function CheckImage(imageName,image_url)
// {

	// .done(function() { 
		// Do something now you know the image exists.
		// console.log("Sucess in loading "+image_url);
	//  }).fail(function() { 
		// Image doesn't exist - do something else.
		// console.log("Failure in loading "+image_url);
	// // });
// }
