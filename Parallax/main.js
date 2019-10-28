
var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

var loadCounter = 0;

//Layers
var background = new Image();
var cloudsShadow = new Image();
var clouds = new Image();
var innerStars = new Image();
var maskShadow = new Image();
var mask = new Image();
var humans = new Image();
var outerStars = new Image();

var layers = [
	{
		"image": background,
		"src": "./img/layer_0.png",
		"z_index": -2,
		"position": {x: 0, y:0},
		"blend": null,
		"opacity": 1
	},
	{
		"image": cloudsShadow,
		"src": "./img/layer_1.png",
		"z_index": -2,
		"position": {x: 0, y:0},
		"blend": "multiply",
		"opacity": 0.3
	},
	{
		"image": clouds,
		"src": "./img/layer_2.png",
		"z_index": -1.25,
		"position": {x: 0, y:0},
		"blend": null,
		"opacity": 1
	},
	{
		"image": innerStars,
		"src": "./img/layer_3.png",
		"z_index": -0.5,
		"position": {x: 0, y:0},
		"blend": null,
		"opacity": 1
	},
	{
		"image": maskShadow,
		"src": "./img/layer_4.png",
		"z_index": -1.5,
		"position": {x: 0, y:0},
		"blend": "multiply",
		"opacity": 1
	},
	{
		"image": mask,
		"src": "./img/layer_5.png",
		"z_index": 0,
		"position": {x: 0, y:0},
		"blend": null,
		"opacity": 1
	},
	{
		"image": humans,
		"src": "./img/layer_6.png",
		"z_index": 0.8,
		"position": {x: 0, y:0},
		"blend": null,
		"opacity": 1
	},
	{
		"image": outerStars,
		"src": "./img/layer_7.png",
		"z_index": 2,
		"position": {x: 0, y:0},
		"blend": null,
		"opacity": 0.9
	}
]

layers.forEach ((layer, index) => {
	layer.image.onload = () => {
		loadCounter ++;
		if (loadCounter >= layers.length) {
			requestAnimationFrame(drawCanvas);
		}
	}
	layer.image.src = layer.src
});

function drawCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	layers.forEach ((layer, index) => {

		layer.position = getOffset(layer);

		context.globalCompositeOperation = (layer.blend) ? layer.blend : "normal";
		context.globalAlpha = layer.opacity
		context.drawImage(layer.image, layer.position.x, layer.position.y)
	})

	requestAnimationFrame(drawCanvas);
}

function getOffset(layer) {
	var touchMultiplyer = 0.2
	var touchOffesetX = pointer.x * layer.z_index * touchMultiplyer;
	var touchOffesetY = pointer.y * layer.z_index * touchMultiplyer;

	var motionMultiplayer = 2.5
	var motionOffsetX = motion.x * layer.z_index * motionMultiplayer
	var motionOffsetY = motion.y * layer.z_index * motionMultiplayer

	return offset = {
		x: touchOffesetX + motionOffsetX,
		y: touchOffesetY + motionOffsetY
	}
}

var moving = false;
var initialPointer = {
	x: 0,
	y: 0
}

var pointer = {
	x: 0,
	y: 0
}

canvas.addEventListener("touchstart", pointerStart)
canvas.addEventListener("mousedown", pointerStart)

function pointerStart(e) {
	moving = true
	if (e.type === "touchstart") {
		initialPointer.x = e.touches[0].clientX;
		initialPointer.y = e.touches[0].clientY;
	} else if (e.type === "mousedown") {
		initialPointer.x = e.clientX;
		initialPointer.y = e.clientY;
	}
}

window.addEventListener("touchmove", pointerMove)
window.addEventListener("mousemove", pointerMove)

function pointerMove(e) {
	e.preventDefault();
	
	if (moving) {
		var currenX = 0;
		var currentY = 0;
		if (e.type == "touchmove") {
			currentX = e.touches[0].clientX;
			currentY = e.touches[0].clientY;
		} else if (e.type == "mousemove") {
			currentX = e.clientX;
			currentY = e.clientY;
		}

		pointer.x = currentX - initialPointer.x
		pointer.y = currentY - initialPointer.y
	}
}

canvas.addEventListener("touchmove", (e) => {
	e.preventDefault();
});

canvas.addEventListener("mousemove", (e) => {
	e.preventDefault();
});

window.addEventListener("touchend", () => {
	endGesture();
})

window.addEventListener("mouseup", () => {
	endGesture();
})

function endGesture() {
	moving = false
	pointer.x = 0
	pointer.y = 0
}

var initialMotion = {
	x: null,
	y: null
}

var motion = {
	x: 0,
	y: 0
}

var button = document.getElementById("permission-button")

button.addEventListener('click', () => {
	DeviceMotionEvent.requestPermission()
	.then(response => {
	  if (response == 'granted') {
	  	alert("Permission granted!")
	    
	    window.addEventListener('devicemotion', (e) => {
			if (!initialMotion.x && !initialMotion.y) {
				initialMotion.x = e.beta;
				initialMotion.y = e.gamma;
			}

			if (window.orientation == 0) {
			
				//portrait	
				motion.x = event.gamma - initialMotion.y;
				motion.y = event.beta - initialMotion.x;
			
			} else if (window.orientation == 90) {
			
				//landscape left
				motion.x = event.beta - initialMotion.x;
				motion.y = -event.gamma + initialMotion.y;
			
			} else if (window.orientation == -90) {
				
				//landspace right
				motion.x = event.beta + initialMotion.x;
				motion.y = -event.gamma - initialMotion.y;

			} else {
				
				//upside down
				motion.x = -event.gamma + initialMotion.y;
				motion.y = -event.beta + initialMotion.x;
				
			}
	    })
	  }
	})
	.catch(console.error)
})
