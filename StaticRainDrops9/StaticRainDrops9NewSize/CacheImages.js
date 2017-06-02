// a script dealing with storing images before loading them 
// NVYVE
// Philip Ong   March 17,2017
var defaultArray = [];// image array copy for downloading
var imgArray=[] ;

var imgPath  = "http://192.168.2.209/PhotoBooth32/";
var StaticImgPath  = "http://192.168.2.209/PhotoBooth32/Static/";// Insert simulated static image path here
// Static Image Gallery PhotoBoothStatic/
var StaicImgArray = [StaticImgPath+"00Static.jpg"];

// Dynamic Image Gallery  Static/
var DynamicImgArray = [imgPath+"00.jpg"];// Dynamic Image array  
var dynamicdefaultArray = [imgPath+"00.jpg"];// image array copy for downloading

var arraySet=false;
var loadedImages=false;
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
		dynamicdefaultArray.push(putImage);
	}
	// setting the static image array 
	for(i = 1; i < 10; i++)
	{// adding the numbers to the 
		var putImage="";
		putImage=StaticImgPath+"0"+i+"Static.jpg";
		
		//console.log(putImage+" =put image ");
		StaicImgArray.push(putImage);
	}
	// setting the max image size to proper 
	var TargetSize = 0 ;
	if (MaxImage<10 )
		TargetSize=10;
	else 
		TargetSize=MaxImage;
	
	// merging the 2 arrays together 
	for (i=0; i< TargetSize ; i++)
	{
		if (i<MaxImage)
		{// add dynamic images if there are any to add 
			imgArray.push(DynamicImgArray[i]);
			defaultArray.push(DynamicImgArray[i]);
			//console.log(i+" dynamic i="+DynamicImgArray[i]);
		}

		if (i<10)
		{// add static images if there are any to add 
			imgArray.push(StaicImgArray[i]);
			defaultArray.push(StaicImgArray[i]);
			//console.log(i+" static i="+StaicImgArray[i]);
		}

	}
	
	// for (i=0; i< 19 ; i++)
	// {
		// console.log(i+" d array "+defaultArray[i]);
	// }
}

/* Cache Images with shifted items expected */
function LoadSetImages(MaxImage,maxStatic,StartIndex,Amount,ExtraAddOn)
{
	var image = new Image();
	//setting image location 
	var EndAmount=StartIndex+Amount-1;
	// var imageLocation= (EndAmount)+".jpg";
	
	loadedImages=true;
	if (!arraySet)
	{
		SetImageArray(MaxImage)
	}
	
	image.addEventListener('load', function() {
		// image exists and is loaded
		//console.log("Success set loading "+image.src);
		ImageLoaded();
		SetImages(StartIndex,Amount,ExtraAddOn,maxStatic);
	});
	
	image.addEventListener('error', function() {
		// image did not load

		var err = new Image();
		err.src = '/error.png';
			
		console.log("Failure set loading "+image.src);
		
		FailedToLoad();
		loadedImages=false;
	});
	//imgPath+imageLocation
	//console.log(imgArray[StartIndex]);
	image.src =imgArray[StartIndex];
}
/* Cache Images with standard item location expected */
function SetImages(StartIndex,Amount,ExtraAddOn,maxStatic)
{
	for(i = StartIndex; i < StartIndex+Amount; i++)
	{
		var settingIndex=0;
		if ((i)<maxStatic)
		{//when the new number will be fine
			//console.log(currentImg-index+" is now "+(maxImages + (currentImg-index)));
			settingIndex= i;
		}
		else 
		{//when the new number will be larger than the max = 22 -->
			//console.log(i-22+" reset the index");
			settingIndex = i-maxStatic;
		}
		

		imgArray[settingIndex]=defaultArray[settingIndex]+"?lastmod"+ExtraAddOn;// setting name of loading image 

		var url = imgArray[settingIndex],
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
	if ( (MaxImage-1)<10 )
	{// if its less than 10 we put 0 before 
		putImage="0"+(MaxImage-1)+".jpg";
	}
	else 
	{
		putImage=(MaxImage-1)+".jpg";
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
