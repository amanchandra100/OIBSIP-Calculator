let input = "";
let button = document.querySelectorAll('.b');
Array.from(button).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            input= eval(input);
            document.querySelector('.scr').value = input;
        }
        else if (e.target.innerHTML == 'AC') {
            input= "";
            document.querySelector('.scr').value = input;
        }
        else{
        input =input+e.target.innerHTML;
        document.querySelector('.scr').value = input;
        }
    })
})


// dark mode code
// const body12=document.getElementsByClassName('body1');
let btn = document.getElementById('btndark');
btn.addEventListener('click',(btn1)=>{
    const cssfile=document.getElementById("cssfile");
    const btn12=document.getElementById("btndark")
    if (btn12.innerHTML == 'Dark mode') {
        cssfile.setAttribute('href','./dark_mode.css');
        btn12.innerHTML="Light mode";
    }
     else {
        cssfile.setAttribute('href','./light_mode.css');
        btn12.innerHTML="Dark mode";
    }  

    // const body1=document.getElementById('body22');
    // body1.style.backgroundColor="yellow";
    // document.body.classList.toggle("dark-mode");
    // btn.style.backgroundColor="white";
    // btn.style.color="black";
    // document.getElementById('hhhh').style.color="#69bff8";
    // btn.innerText="Light mode";
    // let j=0
    // while (j<5) {
    //    document.getElementsByClassName("b1")[j].style.backgroundColor="rgb(241, 211, 155)"; 
    //    j++;
    // }
    
    // var i=0;
    // while (i<14) {
    //     btndark=document.getElementsByClassName('c1')[i];
    //     btndark.style.backgroundColor="grey";
    //     btndark.style.color="white";
    //     i=i+1;
    // }
    // let collor = document.querySelectorAll('.b');
    // collor.style.color="white";


    
})

