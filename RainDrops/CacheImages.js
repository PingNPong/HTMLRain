var imgPath  = "http://192.168.2.239/PhotoBooth/";// Dynamic Image Gallery 
var DynamicImgArray = [imgPath+"00.jpg"];// Dynamic Image array  

var defaultArray = [imgPath+"00.jpg"];// image array copy for downloading
var imgArray=[] ;

var StaticImgPath  = "PhotoBoothStatic/";// Static Image Gallery
var StaicImgArray = [StaticImgPath+"00.jpg"];

var arraySet=false;
var loadedImages=false;
var TwoDynamicsPics=false;// variable to indicate if the current state is on 2 

// test
function SetImageArray(MaxImage)
{// pre setting the array based on the max number of images 
	var usingDynamic=false;// are we taking from the dynamic array, if not then we take from static 
	arraySet=true;
	for(i = 1; i < MaxImage; i++)
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
		//console.log(putImage+" =put image ");
		DynamicImgArray.push(putImage);
		defaultArray.push(putImage);
	}
	// setting the static image array 
	for(i = 1; i < 10; i++)
	{// adding the numbers to the 
		var putImage="";
		putImage=StaticImgPath+"0"+i+".jpg";
		
		//console.log(putImage+" =put image ");
		StaicImgArray.push(putImage);
	}
	
	// merging the 2 arrays together 
	for (i=0; i< MaxImage ; i++)
	{
		var putImage="";
		
		imgArray.push(DynamicImgArray[i]);
		//console.log(i+" dynamic i="+DynamicImgArray[i]);
		if (i<10)
		{
			imgArray.push(StaicImgArray[i]);
			//console.log(i+" static i="+StaicImgArray[i]);
		}

	}
	
	// for (i=0; i< imgArray.length ; i++)
	// {
		//console.log(i+" img array i="+imgArray[i]);
	// }
}

/* Cache Images with shifted items expected */
function LoadSetImages(MaxImage,StartIndex,Amount,ExtraAddOn)
{
	var image = new Image();
	//setting image location 
	var EndAmount=StartIndex+Amount-1;
	var imageLocation= (EndAmount)+".jpg";

	if ( (EndAmount)<10 )
	{// if its less than 10 we put 0 before 
		imageLocation="0"+(EndAmount)+".jpg";
	}
	else 
	{
		imageLocation=(EndAmount)+".jpg";
	}
	
	loadedImages=true;
	if (!arraySet)
	{
		SetImageArray(MaxImage)
	}
	
	image.addEventListener('load', function() {
		// image exists and is loaded
		//console.log("Success set loading "+image.src);
		ImageLoaded();
		SetImages(StartIndex,Amount,ExtraAddOn);
	});
	
	image.addEventListener('error', function() {
		// image did not load

		var err = new Image();
		err.src = '/error.png';
			
		console.log("Failure set loading "+image.src);
		
		FailedToLoad();
		loadedImages=false;
	});
	image.src =imgPath+imageLocation;
}
/* Cache Images with standard item location expected */
function SetImages(StartIndex,Amount,ExtraAddOn)
{
	for(i = StartIndex; i < StartIndex+Amount; i++){
		DynamicImgArray[i]=defaultArray[i]+"?lastmod"+ExtraAddOn;
		var url = DynamicImgArray[i],
			img = new Image(960, 540);
 
		img.src = url;
	};  
	//console.log("setting the images "+DynamicImgArray[i]);
}

// called at the initalize function and checking loop 
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
		LoadStaticImages();// loading all static images 
		LoadImages(MaxImage);// loading all images 
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

// loading all static images set at the beginning 
function LoadStaticImages()
{
	new Date();
	// preloading the images 
	for(i = 0; i < 10; i++){
		var url = StaicImgArray[i],
			img = new Image(960, 540);
 
		img.src = url;
	};  
}

// old 
function LoadImages(MaxImage)
{
	new Date();
	// preloading the images 
	for(i = 0; i < DynamicImgArray.length; i++){
		var url = DynamicImgArray[i],
			img = new Image(960, 540);
 
		img.src = url;
	};  
}

// $('#leftTopMiddle').removeClass('LeftMiddle'); 
// $('#middleTopMiddle').removeClass('Middle'); 
// $('#rightTopMiddle').removeClass('RightMiddle'); 
// $('#leftTopMiddle').addClass('LeftMiddleNoShadow'); 
// $('#middleTopMiddle').addClass('MiddleNoShadow'); 
// $('#rightTopMiddle').addClass('RightMiddleNoShadow'); 

// $('#leftTopMiddle').removeClass('LeftMiddleNoShadow'); 
// $('#middleTopMiddle').removeClass('MiddleNoShadow'); 
// $('#rightTopMiddle').removeClass('RightMiddleNoShadow'); 
// $('#leftTopMiddle').addClass('LeftMiddle'); 
// $('#middleTopMiddle').addClass('Middle'); 
// $('#rightTopMiddle').addClass('RightMiddle'); 

