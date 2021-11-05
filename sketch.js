// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Plinko
// Video 1: https://youtu.be/KakpnfDv_f0
// Video 2: https://youtu.be/6s4MJcUyaUE
// Video 3: https://youtu.be/jN-sW-SxNzk
// Video 4: https://youtu.be/CdBXmsrkaPs

// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var plinkos = [];
var bounds = [];
var cols = 11;
var rows = 8;

function setup() {
    margin_size = 400;
    rectMode(CENTER);
    createCanvas(600 + margin_size, 700 + margin_size);
    offset_x = width / 2;
    offset_y = height / 2;
    colorMode(HSB);
    engine = Engine.create();
    world = engine.world;
    gravity_direction = 0.0;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('angle')) {
        gravity_direction = float(urlParams.get('angle')) * Math.PI / 180;
    }
    world.gravity.x = Math.sin(gravity_direction);
    world.gravity.y = Math.cos(gravity_direction);

    newParticle();
    box_width = width - margin_size;
    box_height = height - margin_size;
    var spacing = box_width / cols;
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var x = i * spacing + (margin_size/2);
            if (j % 2 == 0) {
                x += spacing / 2;
            }
            var y = spacing + j * spacing + (margin_size/2);
            var p = new Plinko(x - offset_x, y-offset_y, 16);
            plinkos.push(p);
        }
    }

    var b = new Boundary((margin_size/2) + (box_width / 2)- offset_x, box_height+ (margin_size/2) - offset_y, box_width + 5 , 30);
    bounds.push(b);

    for (var i = 0; i < cols + 1; i++) {
        var x = i * spacing + (margin_size/2);
        var h = 190;
        var w = 5;
        var y = box_height - (h / 2) + (margin_size/2);
        var b = new Boundary(x - offset_x, y-offset_y, w, h);
        bounds.push(b);
    }

    document.getElementById('stop-button').addEventListener('click', noLoop);

    document.getElementById('go-button').addEventListener('click', loop);
}

function newParticle() {
    var p = new Particle(300+(margin_size/2) - offset_x,  (margin_size/2) - offset_y, 8);
    particles.push(p);
}

function draw() {
    background(255);
    rectMode(CENTER);
    translate(width / 2, height / 2);
    rotate(gravity_direction);
    if (frameCount % 10 == 0) {
        newParticle();
    }
    Engine.update(engine, 1000 / 30);
    for (var i = 0; i < particles.length; i++) {
        particles[i].show();
        if (particles[i].isOffScreen()) {
            World.remove(world, particles[i].body);
            particles.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].show();
    }
    for (var i = 0; i < bounds.length; i++) {
        bounds[i].show();
    }

    fill(color('yellow'));
    triangle(width/2 - offset_x,box_height+ (margin_size/2) - offset_y - 15,
        width/2 - 10 - offset_x,box_height+ (margin_size/2) - offset_y + 15,
        width/2 + 10 - offset_x ,box_height+ (margin_size/2) - offset_y + 15);
}
