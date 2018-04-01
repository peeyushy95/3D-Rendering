var cube = ( ()=>{
    //"use strict";

    var scene = new THREE.Scene(),
    renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
    light = new THREE.AmbientLight(0xffffff),
    camera,
    box;

    function initScene(){
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('webgl-container').appendChild(renderer.domElement);
        scene.add(light);

        camera = new THREE.PerspectiveCamera(
                    35,
                    window.innerWidth/window.innerHeight,
                    1,
                    1000
                );

        camera.position.z = 100;
        scene.add(camera);

        var geometry = new THREE.BoxGeometry( 20, 20, 20 );
        var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
        cube = new THREE.Mesh( geometry, material );
        scene.add(cube);

        stats = new Stats();
        stats.showPanel( 1 );
        document.body.appendChild( stats.dom );
        render();
    }


    function render(){
        cube.rotation.y +=0.09;
        cube.rotation.x +=0.02;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        stats.update();
    }

    window.onload = initScene;

    return {
        scene : scene
    }
}
)();