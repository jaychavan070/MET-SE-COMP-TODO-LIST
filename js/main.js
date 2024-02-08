let addBtn = document.querySelector(".addBtn");
let element = document.querySelector(".todoInputPage");

// console.log(addBtn)

addBtn.addEventListener("click", () => {
  element.style.visibility = "visible";
});

let save = document.querySelector("#save");
console.log(save);
save.addEventListener("click", () => {
  let nameT = document.querySelector("#nameT");
  let descriptionT = document.querySelector("#descriptionT");
  let priorityS = document.querySelector("#priorityS");
  
  /**/ 
  console.log(save)
  console.log(nameT)
  console.log(descriptionT)
  console.log(priorityS)


  /*

let add = document.querySelector("#new_todo");
let pop = document.querySelector(".popup");

console.log(pop);

add.addEventListener("click", function (){
    console.log("click");
    pop.style.display ="flex";
})

*/

////**/


/***/

  let data = [];
  let newData = {
    name: nameT.value,
    desc: descriptionT.value,
    prior: priorityS.value,
  };
  console.log("Hello");
  console.log(data);
  console.log(newData);
  data.push(newData);
  console.log(data);
  let Tododata = localStorage.getItem("data");
  Tododata = Tododata === null ? [] : JSON.parse(Tododata);
  console.log(Tododata);
  Tododata.push(newData);
  localStorage.setItem('data',Tododata)
  console.log(Tododata);
  console.log("This" + Tododata);

/**/ 
  document.write(Tododata);
/* */

  element.style.visibility = "hidden";
  nameT.value = descriptionT.value = priorityS.value = "";
  console.log(element);
});