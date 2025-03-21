document.addEventListener("DOMContentLoaded", function () {
    let ammo = 0;
    let animationCount = 1;

  

    function load() {
        if (ammo < 6) {
            ammo += 1;
            console.log("Liczba amunicji " + ammo);
        }
    }

    function shoot() {
        if (ammo == 0) {
            console.log("Załaduj");
        } else {
            let mag = [0, 0, 0, 0, 0, 0];
            for (let i = 0; i < ammo; i++) {
                mag[i] = 1;
            }
            let luck = Math.floor(Math.random() * 5 + 1);
            console.log("Wartość magazynka(0 - wygrales, 1 - przegrales) " + mag[luck]);
            console.log("Index wylosowanego magazynka " + luck);
            let root = document.documentElement;
            let div = document.getElementById("big-circle");
            root.style.setProperty('--count', luck * 60 + "deg");

            // Trigger the animation
            triggerAnimation(div, 'spin-animation');

            if (mag[luck] == 1) {
                console.log("Loose");
            } else {
                console.log("Win");
            }
            ammo = 0;
        }
    }

    function myEndFunction() {
        document.querySelectorAll(".slot").forEach(b => b.style.backgroundColor = "");
        let div = document.getElementById("big-circle");
        // div.style.animationPlayState = "paused";
        // div.style.animationIterationCount = 2;
        console.log("cods");
        document.documentElement.style.setProperty('--count', 0 + "deg");
    }

    function triggerAnimation(element, animationClass) {
        // Remove the animation class if it exists to re-trigger the animation
        element.classList.remove(animationClass);

        // Force reflow to restart the animation
        void element.offsetWidth;

        // Add the animation class to start the animation
        element.classList.add(animationClass);

        // Set up the onanimationend event handler
        element.onanimationend = function() {
            element.classList.remove(animationClass);
            myEndFunction();
        };
    }

    document.querySelectorAll(".slot").forEach(box => {
        box.addEventListener("click", function () {
            if (this.style.backgroundColor != "blue") {
                load();
                this.style.backgroundColor = "blue";
            }
        });
    });

    // Add event listener to the shoot button
    document.getElementById("shoot-button").addEventListener("click", shoot);
});