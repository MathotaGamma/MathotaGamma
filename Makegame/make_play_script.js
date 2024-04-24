const w = window.innerWidth;
const h = window.innerHeight;

let l = [];

l = JSON.parse(localStorage.getItem('MakeGame:BlockList'));

const n_h = l.length;
const n_w = l[0].length;
let r = 30;
let left = 0;

if(n_h/n_w > h/w){
  //hがぴったり
  r = h/n_h;
  left = parseInt((w-r*n_w)/2);
} else {
  //wがぴったり
  r = w/n_w;
}

let me_x = 2.5;
let me_y = 1.5;





function setup(){
  createCanvas(w,h)
}

function draw(){
  background(255);

  fill(255);
  for (let k = 0; k < n_h; k++){
    for (let k0 = 0; k0 < n_w; k0++){
      fill(255-100*l[k][k0]);
      rect(left+k0*r,k*r,r,r);
    }
  }

  fill(0,0,255);
  rect(r*(me_x-0.5),(n_h-me_y-0.5)*r,r,r);
}

