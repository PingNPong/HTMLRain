var imgPath  = "http://192.168.2.239/RoyalityFree/";
var imgArray = [imgPath+"01.jpg"];
var arraySet=false;
var loadedImages=false;

function SetImageArray(MaxImages)
{
	console.log("Image set");
	arraySet=true;
	for(i = 2; i < maxImages+1; i++)
	{// adding the numbers to the 
		var putImage="";
		if ( i<10 )
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

	loadedImages=true;
	if (!arraySet)
	{
		SetImageArray(MaxImage)
	}
	
	image.addEventListener('load', function() {
		// image exists and is loaded
		console.log("Sucess in loading "+image.src);
		ImageLoaded();
		LoadImages(MaxImage);
	});
	
	image.addEventListener('error', function() {
		// image did not load

		var err = new Image();
		err.src = '/error.png';
			
		console.log("Failure in loading "+image.src);
		
		FailedToLoad();
		loadedImages=false;
	});
		
	
	var putImage="";
		if ( (MaxImage/2)<10 )
		{// if its less than 10 we put 0 before 
			putImage="0"+(MaxImage/2)+".jpg";
		}
		else 
		{
			putImage=(MaxImage/2)+".jpg";
		}
		
	image.src = imgPath+ putImage;
}

function LoadImages(MaxImage)
{
	// preloading the images 
	for(i = 0; i < imgArray.length; i++){
		var url = imgArray[i],
			img = new Image(960, 540);
 
		img.src = url;
	};  
}

