var file = new File(["boringContent"], "http://192.168.2.209/PhotoBooth/Mod.txt");
var reader = new FileReader();
var fileName="http://192.168.2.209/PhotoBooth/Mod.txt";
var currentNumber=0;
var LastNumber=0;

function ReadFiles()
{
	$.ajax({
        url: "http://192.168.2.209/PhotoBooth/LastModified/Mod.txt",//"http://192.168.2.209/PhotoBooth/Mod.txt",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data)
		{
			currentNumber=data;
			//console.log("Success, reading File"+ currentNumber+ " vs "+LastNumber);
			if (currentNumber!=LastNumber)
			{// if the file number is not the same 
				console.log(" Not the same number  "+currentNumber+"!="+LastNumber);
				PreJumpImg = currentImg;
				currentImg = maxImages-3;	// reset the numbers;
				//console.log("Success prejump="+PreJumpImg);
				LastNumber=currentNumber;
				//previous way of fast forwarding 
				// ImgState=2;
				// // changing the timings
				// totalDuration=2000;
				// waitDuration=1000;
				// ExtraLoading=true;
			}
		}
    });

	// if (currentNumber!=LastNumber)
	// {// if the file number is not the same 
		// console.log("Not the same number  "+currentNumber+"!="+LastNumber);
		// PreJumpImg = currentImg;
		// currentImg = 0;	// reset the numbers;
		// console.log("prejump="+PreJumpImg);
		// LastNumber=currentNumber;
		// ImgState=3;
	// }
	
	// $.get('http://192.168.2.209/PhotoBooth/Mod.txt').then(function(data) {
	  // var lines = data.split('\n');
	  // var index = Math.floor(Math.random() * lines.length);
	  // console.log(lines[index]);
	// });
	// reader.readAsText(file);
	// reader.onload = function (e) {
		// console.log("test "+reader.result);
		// //output = e.target.result;
		// //displayContents(output);
	// };//end onload()
}

function OnSuccessLoad(data)
{
	currentNumber=data;
	console.log(currentNumber);
	
}

function readText(filePath) {
	var output = ""; //placeholder for text output
	if(filePath.files && filePath.files[0]) {           
		reader.onload = function (e) {
			output = e.target.result;
			displayContents(output);
		};//end onload()
		reader.readAsText(filePath.files[0]);
	}//end if html5 filelist support
	else if(ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
		try {
			reader = new ActiveXObject("Scripting.FileSystemObject");
			var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
			output = file.ReadAll(); //text contents of file
			file.Close(); //close file "input stream"
			displayContents(output);
		} catch (e) {
			if (e.number == -2146827859) {
				alert('Unable to access local files due to browser security settings. ' + 
				 'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' + 
				 'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"'); 
			}
		}       
	}
	else { //this is where you could fallback to Java Applet, Flash or similar
		return false;
	}       
	return true;
}   
