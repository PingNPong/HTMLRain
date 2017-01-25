var imgPath  = "http://192.168.2.239/RoyalityFree/";
var imgArray = [imgPath+"01.jpg"];
var arraySet=false;

function SetImageArray(MaxImages)
{
	console.log("ImageArray set");
	arraySet=true;
	for(i = 2; i < maxImages+1; i++)
	{// adding the numbers to the 
		var putImage="";
		if (i<10 )
		{// if its less than 10 we put 0 before 
			putImage=imgPath+"0"+i+".jpg";
		}
		else 
		{
			putImage=imgPath+i+".jpg";
		}
		imgArray.push(putImage);
	}
}

function PreLoadImages(MaxImage)
{
	var image = new Image();

	image.onload = function() {
		// image exists and is loaded
		console.log("Sucess in loading "+imgArray[0]);
		if (!arraySet)
		{
			SetImageArray(MaxImage)
		}
		LoadImages(MaxImage);
	}
	image.onerror = function() {
		// image did not load

		var err = new Image();
		err.src = '/error.png';

		console.log("Failure in loading "+imgArray[0]);
		
	}
	
	image.src=imgArray[0];
}

function LoadImages(MaxImage)
{
	// preloading the images 
	console.log("pre loading "+imgArray[0]);
	for(i = 0; i < imgArray.length; i++){
		var url = imgArray[i],
			img = new Image(960, 540);
 
		img.src = url;
	};  
}

