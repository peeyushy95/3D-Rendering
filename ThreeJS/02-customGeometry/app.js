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

        camera.position.z = 10;
        scene.add(camera);

       var triangleGeometry = new THREE.Geometry();

       triangleGeometry.vertices.push(
            new THREE.Vector3( 0,  1, 0 ),
            new THREE.Vector3( -1, -1, 0 ),
            new THREE.Vector3(  1, -1, 0 )
        );
    
        triangleGeometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

        triangleGeometry.faces[0].vertexColors[0] = new THREE.Color(0xFF0000);
        triangleGeometry.faces[0].vertexColors[1] = new THREE.Color(0x00FF00);
        triangleGeometry.faces[0].vertexColors[2] = new THREE.Color(0x0000FF);

        var material = new THREE.MeshBasicMaterial( {
            vertexColors : THREE.VertexColors,
            side : THREE.DoubleSide
        });

        manualGeometry = new THREE.Mesh( triangleGeometry, material );
        scene.add(manualGeometry);


        stats = new Stats();
        stats.showPanel( 1 );
        document.body.appendChild( stats.dom );
        render();
    }


    function render(){
        // cube.rotation.y +=0.09;
        // cube.rotation.x +=0.02;
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