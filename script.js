//Step01 Add data function set item button

let handleClick=()=>{
    let myinp=document.querySelector('input').value


    let data=JSON.parse(localStorage.getItem("data"));

    // console.log(`${data}"<-----"`)

    if (!data) {
        localStorage.setItem("data",JSON.stringify([myinp]))
    }
    else {
        data.push(myinp)
        localStorage.setItem("data",JSON.stringify(data))
    }
    document.querySelector('input').value=""
    
    handleDisplay()
    }

    //Step03 delete function

    let dlt=(i)=>{
        let data=JSON.parse(localStorage.getItem("data"))
        data.splice(i,-1)
        localStorage.setItem("data",JSON.stringify(data))
    }

//Step02 display function that display input text

let handleDisplay=()=>{
    let myinp=document.querySelector('input').value
    let data=JSON.parse(localStorage.getItem("data"))
    let print=document.getElementById('print')
    print.innerHTML="";

    data.map((e,i)=>{

        print.innerHTML+=`<div><span>${i+1} :</span>
        <h3 id="test"> ${e.myinp}</h3> <button class="innerbtn" onclick="dlt(${i})">Delete</button><button class="innerbtn inner2"  onclick="handleEdit()">Edit</button></div>`
        console.log(i+1,e.myinp);
    })
}



// edit text function

// let handleEdit=()=>{
    
//     let test=document.getElementById('test')
    
//     myinp.value=test.innerText

// }

// // clear local storage function

// let AC=()=>{
//     localStorage.clear()
//     handleDisplay()
//     }