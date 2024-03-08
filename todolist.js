
const inputbox = document.getElementById("input-type");
const list = document.getElementById("list-container");

function addTask(){
    if(inputbox.value ===''){
        alert("please write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
};
   list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
  },false);
  function saveData(){
    localStorage.setItem("data",list.innerHTML);
  }
  function show(){
    list.innerHTML= localStorage.getItem("data");
  }
  show();