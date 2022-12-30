//  basic environment setip
const canvas = document.createElement("canvas");
document.querySelector(".myGame").appendChild(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;
const context = canvas.getContext("2d");


let difficulty = 2;
const form = document.querySelector("form");
const scoreBoard = document.querySelector(".scoreBoard");



// Basic Functions



//   Event listener for Difffculty form 
document.querySelector("input").addEventListener("click", (e) => {
    e.preventDefault();   // to avoid reload


    // making form invisible
    form.style.display = "none";
    // making scoreboard visible
    scoreBoard.style.display = "block";

    // gettting difficulty selected by user
    const userValue = document.getElementById("difficulty").value;
    // alert(userValue);
    if (userValue === "Easy") {
        setInterval(spawnEnemy, 2000);
        return (difficulty = 5);
    }
    if (userValue === "Medium") {
        setInterval(spawnEnemy, 1500);
        return (difficulty = 8);

    }
    if (userValue === "Hard") {
        setInterval(spawnEnemy, 1000);
        return (difficulty = 10);

    }
    if (userValue === "Insane") {
        setInterval(spawnEnemy, 700);
        return (difficulty = 12);

    }
});




// -----------Create Player ,Enemy , Weapon Etc Classes



// setting player position to center
const PlayerPosition = {
    x: canvas.width / 2,
    y: canvas.height / 2,

};


// creating player class
class Player {
    // use of class to avoid define similar object 
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, 0);
        context.fillStyle = this.color;
        //add color to the player
        // context.stroke();

        context.fill();
    }
    // update()
    // {
    //      this.x+=Math.random()*10;
    //      this.y+=Math.random()*10;

    // }
};

// const ankit = new Player(PlayerPosition.x, PlayerPosition.y, 15, "red");
// ankit.draw();






// function animation(){
//     requestAnimationFrame(animation);
//     const ankit=new Player(PlayerPosition.x+Math.random()*100,PlayerPosition.y+Math.random()*100,20,"blue");
//     ankit.draw();
// }
// animation();
// function call using recursion by requestanimationframe every time create new object/ player and print by filled color



// just create and draw colorful players

// function animation() {
//     requestAnimationFrame(animation);
//     const ankit = new Player(PlayerPosition.x + Math.random() * 100, PlayerPosition.y + Math.random() * 200, 20,
//         `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`

//     );
//     ankit.draw();
// }
// animation();








// creating weapon class
// ----------------------for Weapons----------------//
class Weapon {
    // use of class to avoid define similar object 
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, 0);
        context.fillStyle = this.color;
        //add color to the player
        // context.stroke();

        context.fill();
    }
    update() {
        this.draw();
        this.x += this.velocity.x,
            this.y += this.velocity.y
    }
};





//-------------------------for enemy-------------->

// creating enemy class
class Enemy {
    // use of class to avoid define similar object 
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, 0);
        context.fillStyle = this.color;
        //add color to the player
        // context.stroke();

        context.fill();
    }
    update() {
        this.draw();
        this.x += this.velocity.x,
            this.y += this.velocity.y
    }
};


// -----------------Creating particle class
class Particle {
    // use of class to avoid define similar object 
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, 0);
        context.fillStyle = this.color;
        //add color to the player
        // context.stroke();

        context.fill();
    }
    update() {
        this.draw();
        this.x += this.velocity.x,
            this.y += this.velocity.y
    }
};
// ----------------main logic here---------------------------


// Creating Player Object Weapons array and Enemy Array
const ankit = new Player(PlayerPosition.x, PlayerPosition.y, 20, "white");
// ankit.draw();
const weapons = [];
const enemies = [];
const particles=[];


//---------------function to spawn enemies at random location-------------------------------------
const spawnEnemy = () => {

    // -------------- generating  random size for enemy
    const enemySize = Math.random() * (40 - 5) + 5;
    // generating  random color for enemy
    const enemyColor = `hsl(${Math.random()*360},100%,50%)`;
// hsl :higher saturated lighter colors 0->360

    // random is enemy spawn position
    let random;

    // making enemy location random but only from outside of screen
    if (Math.random() < 0.5) {
        // aadhi screen se pehle aur baad mein (screen splitting)
        random = {
            x: Math.random() < 0.5 ? canvas.width + enemySize : 0 - enemySize,   // ya to 0 se thoda sa pehle banega ya to screen ke thoda banega ,,, -ememysize isliye kiya hai ki screen par form na ho screen ke side mein bne
            //    .             .
            //    .             .
            //    .             .
            //    .             .
            //    .             .  
            // abhi inke liye bna hai 

            y: Math.random() * canvas.height,
        };
    }
    else {
        random = {
            x: Math.random() * canvas.width,
            y: Math.random() < 0.5 ? canvas.height
                + enemySize : 0 - enemySize,
            //<0.5 then niche se aayega 
        };
    }



    // finding angle between center (means player position) and enemy position
    const myAngle = Math.atan2(
        canvas.height / 2 - random.y,
        canvas.width / 2 - random.x
        // center tk aana from randome.x same with y
    );




    // making velocity or speed of enemy by multiplying chosen difficulty to radian
    const velocity = {
        x: Math.cos(myAngle) * difficulty,  // multiply more to get more speed ,  used for velocity
        y: Math.sin(myAngle) * difficulty,
    };
    //object hai ye
    // console.log(myAngle);


    // adding enemy to enemies array

    enemies.push(new Enemy(random.x, random.y, enemySize, enemyColor, velocity));
}






//------------------creating animation function
let animationid;
function animation() {
    //making recursion
    animationid = requestAnimationFrame(animation);
    context.fillStyle="rgba(49,49,49,0.2)";
    // using this some path prints is left out when new rect with less obesity is put on another  
    context.fillRect(0, 0, canvas.width, canvas.height);
    


    // clearing canvas on each frames
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // to clear whole screen with size of rect before creating another beam


    //drawing player
    ankit.draw();


    // generating bullets
    weapons.forEach((weapon,weaponIndex) => {
        weapon.update();


        // removing weapons if they are off screen
        if(
            weapon.x+weapon.radius<1 ||
            weapon.y+weapon.radius<1 ||
            weapon.x-weapon.radius>canvas.width ||
            weapon.y-weapon.radius>canvas.height
            )
        {
            // console.log("yes : ",weapons.length);
            weapons.splice(weaponIndex,1);
        }

    });
    // generating enemies
    enemies.forEach((enemy, enemyIndex) => {
        enemy.update();

        // finding distance between player and enemy
        const DistanceBetweenPlayerAndEnemy = Math.hypot
            (
                ankit.x - enemy.x,
                ankit.y - enemy.y
            );
        // stopping game if enemy hit player
        if (DistanceBetweenPlayerAndEnemy - ankit.radius - enemy.radius < 1) {
            // console.log("GameOver");
            cancelAnimationFrame(animationid);
        }

        weapons.forEach((weapon, weaponIndex) => {

            // finding distance between weapon and enemy
            const DistanceBetweenWeaponAndEnemy = Math.hypot
                (
                    weapon.x - enemy.x,
                    weapon.y - enemy.y
                );
            if (DistanceBetweenWeaponAndEnemy - weapon.radius - enemy.radius < 1) {
                // console.log("kill enemy");



                // for(l)






                if(enemy.radius>18)
                {
                    // 18 choosed because of 18-10  that is 8 not very small for next attack
                    gsap.to(enemy,{
                        radius:enemy.radius-10,
                    })
                    //using gsap smooth look to reducing the size of enemies
                }
                //removing enemy on hit their size below <18
                else{
                    setTimeout(() => {
                        enemies.splice(enemyIndex, 1);
                        weapons.splice(weaponIndex, 1);
                    },0);
                }



                

            }
        });
    });
}

// setInterval(spawnEnemy,1000);




//    ------------------adding eventlistener



// event listener for light weapon aka left click
canvas.addEventListener("click", (e) => {



    // console.log(e.clientX,e.clientY);   
    // just show the clicked coordinate on canvas by mouse



    // finding angle between player postion (center) and click co-ordinates
    const myAngle = Math.atan2(e.clientY - canvas.height / 2, e.clientX - canvas.width / 2);


    // making cnst speed for light weapon
    const velocity = {
        x: Math.cos(myAngle) * 6,  // multiply more to get more speed ,  used for velocity
        y: Math.sin(myAngle) * 6
    }; //object
    // console.log(myAngle);






    // adding light weapons array
    weapons.push(
        new Weapon(
            canvas.width / 2, // yaha se create and niklega 
            canvas.height / 2,
            6,
            "white",
            velocity  //x,y large value . . . .  diff badh jayega y/x angle decide karega
        )
        // just created new weapons "golis" using clicked x,y coordinates
    );
});


animation();
