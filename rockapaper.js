let userscore = 0;
let compscore = 0;
 const msg =  document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
 const drawgame = () =>
    {
        console.log("Game was draw :(")
        msg.innerText = "Game was draw! Play Again"
        msg.style.backgroundColor = "Grey";
    }

 const gencompchoice = () =>
    {
        let optns = ["rock","paper","scissors"];
      const randidx =  Math.floor(Math.random()*3); 
      return optns[randidx];
    }
const showwinner = (userwin,userchoice,compchoice) =>
    {
        if(userwin)
            {
               userscore++;
               userscorepara.innerText  = userscore;
                msg.innerText = `You Won :) your ${userchoice} beats ${compchoice}`;
                msg.style.backgroundColor = "green";
            }
            else{
                compscore++;
                compscorepara.innerText = compscore;
                console.log("You Lost ");
                msg.innerText = `You Lost :( ${compchoice} beats your ${userchoice}`;
                msg.style.backgroundColor = "red";
            }
    }

 const playgame = (userchoice) =>
    {
        console.log("user-choice  = ",userchoice)
        const compchoice  = gencompchoice();
        console.log("comp-choice ",compchoice);

        if(userchoice === compchoice)
            {
                   drawgame();
            }
            else{
                let userwin = true;
                if(userchoice ==="rock") 
                    {
                       userwin =  compchoice === "paper" ? false: true;
                    }
                    else if(userchoice ==="paper")
                        {
                            compchoice ==="scissors"? false:true;
                        }
                        else{
                               compchoice ===  "rock" ?true:false;
                        }
                   showwinner(userwin , userchoice,compchoice);
            }
    }

choices.forEach((choice)=>
{  console.log(choice);
    choice.addEventListener("click",()=>
    {
           const userchoice = choice.getAttribute("id");
           playgame(userchoice);   
    })
})