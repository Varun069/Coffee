// Add the coffee to local storage with key "coffee"

const url="https://masai-mock-api.herokuapp.com/coffee/menu";

append();

async function append(){
   try{
    let data= await fetch(url);
    let res= await data.json();
    getData(res);
  console.log(res)
    
   }
   catch(err){
       console.log(err);
   }
}

function getData(data){

   
    let menu=document.getElementById("menu");
    
     data.menu.data.forEach(function(el){
    
        let h2=document.createElement('h2');
        h2.innerText=el.title
    
        let img= document.createElement('img');
        img.src=el.image;
    
        let h3=document.createElement('h3');
        h3.innerText=el.price;
        
        menu.append(img,h2,h3) 

       

        let btn=document.createElement("button");
        btn.setAttribute("id",'button');
        btn.innerText="Add to bucket";
        btn.addEventListener("click",function(){
           getEle();
        })
        
        menu.append(btn);
       
       
    });
    
    
}

function getEle(){

    
    var Arr=JSON.parse(localStorage.getItem("coffee"))||[];
   
     let submit=document.getElementById("menu");

     let h2=document.createElement('h2');
        h2.innerText=submit.title
    
    let img= document.createElement('img');
        img.src=submit.image;

    let h3=document.createElement('h3');
        h3.innerText=submit.price;
        
        submit.append(h2,img,h3)


        localStorage.setItem("coffee",JSON.stringify(submit))
    
}