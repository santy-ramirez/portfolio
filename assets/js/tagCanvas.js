window.onload = function() {

        try {
          TagCanvas.Start('myCanvas','tags',options);
        } catch(e) {
          // something went wrong, hide the canvas container
          document.getElementById('myCanvasContainer').style.display = 'none';
        }
      
      };
    var options = { 
    textColour : '#7384BC',

    outlineThickness : 0.5,
    outlineColour : '#fe0853',
    maxSpeed : 0.06,
    freezeActive:true,
    shuffleTags:true,
    shape:'sphere',
    zoom:1,
    noSelect:true,
    textFont:'arial',
    textHeight:'20',

    pinchZoom:true,
    freezeDecel:true,
    fadeIn:3000,
    initial: [0.3,-0.1],
    depth : 0.8
  }


  



 








