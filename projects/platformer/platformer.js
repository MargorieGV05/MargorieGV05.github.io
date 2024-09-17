$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);
0

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
createCollectable("steve", 200, 170, 6, 0.7);
    // TODO 1
    // Create platforms
    createPlatform(50, 720, 190, 200); 
    createPlatform(350, 670, 80, 50);
    createPlatform(520, 550, 100, 40);
    createPlatform(680, 430, 80, 40);
    createPlatform(780, 330, 80, 40);
    createPlatform(880, 430, 80, 40); 
    createPlatform(990, 250, 190, 40);
    createPlatform(500, 250, 170, 50);
    createPlatform(100,200,200,50);
    createPlatform(730,150,190,40);
    createPlatform(1190, 200,10,700);
    createPlatform(1190, 320, 100, 30); 
    createPlatform(1300, 190, 100, 30); 
    createPlatform(1190, 540, 100, 30); 
    createPlatform(1300, 440, 100, 30); 


    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)



    
    // TODO 2
    // Create collectables
    createCollectable("steve", 600, 400, 10, 0.2); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 40% bounce
    createCollectable("grace", 300, 100); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("diamond", 1000, 100,10,0.1);// You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    createCollectable("kennedi", 1200, 100, 10, 0);//// Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    createCollectable("database", 500, 200);// example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("max", 500, 1000);
    createCollectable("kennedi", 1300, 300,10,0.1);


    
    // TODO 3
    // Create cannons
    createCannon("left", 450, 1000, 20, 20); 
    createCannon("bottom", 990, 1000, 20, 20);
    createCannon("top", 880, 1000, 20, 20 );
    createCannon("right", 790, 1000, 1000, 20 );
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)



    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
})
