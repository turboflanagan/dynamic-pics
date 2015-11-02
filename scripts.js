
// var imageInfo = $('.home-image-wrapper');
var imageH = [];
var imageW = [];
var currH = [];
var currW = [];


$(window).load(function() {
		var imageDiv = [];
		$(".home-image-wrapper").each(function() {
			imageDiv.push($(this).html());
		})

		for(i=0; i < imageDiv.length; i++) {
		
		
		imageH.push($(this).height());
		imageW.push($(this).width());
		
		}
		console.log(imageW[0]);
		console.log(imageDiv[1]);
		// console.log(imageW[2]);
		// console.log(imageW[3]);
		// console.log(imageW[4]);
		// console.log(imageW[5]); 
	

});





//  pseudo code for putting this project together.

// wait for window to load
//     get all elements that hold information

//

//     took that list of elements grabbed the images inside of them
//     loop through all of the images in this array{

//         get image height
//         get image width
        
//         check if height is greater than width

//         if true {
//             //scale everything based on height
//             set image height to max height

//             check new image width
//             make sure image is centered by adding margin 
//            that is half the difference of the image width 
//             to the div width
// }



//  Will's function:

// $(document).ready(function() {
// 	function scaleSize(maxW, maxH, currW, currH) {
// 		var ratio = currH /currW;

// 		if (currW >= maxW && ratio <= 1) {
// 			currW = maxW;
// 			currH = currH * ratio;
// 		} else if (currH >= maxH) {
// 			currH = maxH;
// 			currW = currH / ratio;
// 		}

// 		return [currW, currH];
// 	}

// 	var maxWidth = $('.home-image-wrapper').width()
// 	// $('.home-image-wrapper img').height(maxWidth, 200, $(this).width(), $(this).height())[0]);
// 	$('.home-image-wrapper img').width(maxWidth, 200, $(this).width(), $(this).height())[1]);
// });













