let box=[
    {
        name:"Depression",
        source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzPuSybYyr1x5rM-wTchIDaUfb6Mb_89tcQ&usqp=CAU",
        link:"Depression.html"
    },
    {
        name:"Cardiac",
        source:"https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/02/27/Photos/Processed/heart-kyjD--621x414@LiveMint.jpg",
        link:"Cardiac.html"
    },
    {
        name:"Cancer",
        source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5471EjTJkRlLoIHjwjvppJoB7xQIcaiGsIaLBIFMoPA6CNdphq9xF5gSE1JLYrLtNUE&usqp=CAU",
        link:"Cancer.html"
    },
    {
        name:"Autism",
        source:"https://autismqld.com.au/wp-content/uploads/2022/08/Autism-Queensland-September-2021-no-logo-1468-x-1574.png",
        link:"autism.html"
    },
];

let i=0;let font_size=10;
let pic=document.getElementById("pic");
let text=document.getElementById("dis");
let button=document.getElementById("button_link");
let tag_p=document.getElementsByTagName("p");
let box1=document.getElementById("box");
    function next(){
      if(i<box.length-1)
      i++;
      else
      i=0;
      pic.src=box[i].source;
      text.innerHTML=box[i].name;
      button.href=box[i].link;
      box1.classList.add("box1")
    }

    function prev(){
        if(i>0)
        i--;
        else
        i=box.length-1;   
        pic.src=box[i].source;
      text.innerHTML=box[i].name;  
      button.href=box[i].link;
    }
function font(f){
    document.getElementById( "con" ).style.fontSize = f+"px";
}