const inputEl = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addtask(){
    console.log('button clicked')
    // let li=""

    if(inputEl.value===''){
        alert('You must write something first');
    }
    else{
        listContainer.innerHTML+=`
            <li>
            <div>
            ${inputEl.value}
            </div>
                <span class="delete"> \u00d7 </span>
            </li>
        `
        inputEl.value=''
    }
    savedata();
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false)

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);    
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem('data');
}

showtask();