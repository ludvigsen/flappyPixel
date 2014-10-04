/*global THREE, Utils, requestAnimationFrame*/
var keys = {
    left:false, 
    up: false,
    right: false,
    down: false
};

var state = {
    cubes: [],
    width: 22,
    height: 7,
    right: -11,
    top: 7,
    ay: 0.02
};

Utils.keyStateProperty(37).onValue(function(key){keys.left=key==="DOWN";});
Utils.keyStateProperty(38).onValue(function(key){keys.up=key==="DOWN";});
Utils.keyStateProperty(39).onValue(function(key){keys.right=key==="DOWN";});
Utils.keyStateProperty(40).onValue(function(key){keys.down=key==="DOWN";});

var width = 22;
var height = 7;

var grid = [];

function initGrid(scene, state){
    var x = -11;
    var y = 3;
}

var renderer, scene, camera, cube;
function updateGrid(){
    if(Math.random()*1000 > 970){
        var xPos = Math.floor(Math.random() * 22 ) - 11;
        var geometry = new THREE.BoxGeometry(1,1,0.5);
        var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
        var c = new THREE.Mesh( geometry, material ); 
        scene.add(c);
        c.position.x = xPos;
        c.position.y = cube.position.y+4;
    }
}

function init(){
    scene = new THREE.Scene(); 
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer(); 
    renderer.setSize( window.innerWidth - 20, window.innerHeight -20 );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry(1,1,0.5); 
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material ); 
    scene.add( cube );
    //renderGrid(scene);
    camera.position.z = 5;
}
init();

function updatePlayer(cube, keys){
    if(keys.up){
        //cube.position.y += 0.1;
    }
    if(keys.down){
        //cube.position.y -= 0.1;
    }
    if(keys.right){
        cube.position.x += 0.1;
    }
    if(keys.left){
        cube.position.x -= 0.1;
    }
}
function render() { 
    requestAnimationFrame(render); 
    updateGrid();//scene, state);
    updatePlayer(cube, keys);
    state.ay += 0.0001;
    //console.log('updatePosition');
    camera.position.y+=state.ay;
    cube.position.y+=state.ay;
    //cube.rotation.x += 0.1; cube.rotation.y += 0.1;
    // keys.up.flatMap(function(v){
    //     if(v=="DOWN"){
    //         console.log("opp");
    //     }
    // })();
    renderer.render(scene, camera);
} 
render();
