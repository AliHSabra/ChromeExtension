const inputBtn = document.getElementById("input-btn");
const inputEL=document.getElementById("input-el");
const ulEL=document.getElementById("ul-el");
const deleteBTN=document.getElementById("delete-btn");
const tabBTN=document.getElementById("tab-btn");
let myLeads=[];


const leadsFromLocalStorage=JSON.parse( localStorage.getItem("myLeads") )
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

tabBTN.addEventListener("click", function(){

    chrome.tabs.query({active : true , currentWindow : true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
})

deleteBTN.addEventListener("dblclick", function(){
localStorage.clear()
myLeads=[];
render(myLeads)


})


inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEL.value);
    inputEL.value="";
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    render(myLeads);

    
})


function render(leads){
    let listItems= "";
    
    for(let i = 0 ; i < leads.length; i++){
        
        listItems+=`
        <li id='li'>
    
        <a href='${leads[i]}' target='_blank' >
    
        ${leads[i]}
        
        </a>

        
        

        </li> 

        
        
        `
    
    }
    
    ulEL.innerHTML=listItems;
    
    } 


    
   


    