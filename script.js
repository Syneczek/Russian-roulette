// --->Zrobić animację w JavaScrip<---
    

let ammo = 0;
let animationCount = 0;




function load() {
    if(ammo < 6){
    ammo += 1;
    console.log(ammo);
    }
    
}
function shoot(){
    if(ammo == 0){
        console.log("Załaduj");
    }else{
    let mag = [0,0,0,0,0,0];
    for(i = 0; i<ammo;i++){
        mag[i] = 1;
        }
        let luck = Math.floor(Math.random()* 5);
        console.log(mag[luck]);
        console.log(luck);
        let root = document.documentElement;
        let div = document.getElementById("big-circle");
        root.style.setProperty('--count',luck*60 + "deg");
        div.style.animationPlayState = "running"
        if(mag[luck] == 1){
            console.log("Loose");
        }else{
            console.log("Win");
        }
        ammo = 0;
        div.addEventListener("animationend", myEndFunction);

        
        
          
    }
    
    function myEndFunction(){
        document.querySelectorAll(".slot").forEach(b => b.style.backgroundColor = "");
        document.getElementById("big-circle").style.animationPlayState = "paused"
        document.getElementById("big-circle").style.animationIterationCount = 2;
        console.log("cods");
        document.documentElement.style.setProperty('--count',0 + "deg");
    }
}
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".slot").forEach(box => {
            box.addEventListener("click", function () {
                // Reset all boxes to default color
                // document.querySelectorAll(".slot").forEach(b => b.style.backgroundColor = "");
                if(this.style.backgroundColor != "blue"){
                    load();
                    // Change color of clicked box
                    this.style.backgroundColor = "blue"; // Change to any color you prefer
                }
                
            });
        });
    });
    
   

