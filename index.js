const canvas = document.createElement("canvas");
document.querySelector(".myGame").appendChild(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;
const context = canvas.getContext("2d");
const PlayerPosition = {
    x: canvas.width / 2,
    y: canvas.height / 2,

};
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


const weapons = [];
const enemies = [];


//----------------making enemies
const spawnEnemy = () => {


    const enemySize = Math.random() * (40 - 5) + 5;
    const enemyColor = `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`;

    enemies.push(new Enemy(random.x, random.y, enemySize, velocity))
}





const ankit = new Player(
    PlayerPosition.x,
    PlayerPosition.y,
    20,
    `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`
);
ankit.draw();

function animation() {
    requestAnimationFrame(animation);
    context.clearRect(0, 0, canvas.width, canvas.height);
    // to clear whole screen with size of rect before creating another beam
    ankit.draw();
    weapons.forEach(weapon => {
        weapon.update();
    })
}






canvas.addEventListener("click", (e) => {



    // console.log(e.clientX,e.clientY);   
    // just show the clicked coordinate on canvas by mouse

    const myAngle = Math.atan2(e.clientY - canvas.height / 2, e.clientX - canvas.width / 2);
    const velocity = {
        x: Math.cos(myAngle) * 10,  // multiply more to get more speed ,  used for velocity
        y: Math.sin(myAngle) * 10
    }; //object
    // console.log(myAngle);







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