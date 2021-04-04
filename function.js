  let listarr = []; // 목록
  let todoarr = []; // todo All
  // let todoonlyarr = [];
  // let donearr = [];

let listinputbutton = document.querySelector(".input_list_button");
let todoinputbutton = document.querySelector(".input_todo_button");
let modebutton = document.querySelector(".mode_button");
listinputbutton.addEventListener("click", addList);
todoinputbutton.addEventListener("click", addTodo);
modebutton.addEventListener("click", modeChange);

// list 함수 먼저
function addList() {
    let inputlist = document.querySelector(".input_list").value;
    if (inputlist != null) {
        listarr.push(inputlist);
        document.querySelector(".input_list").value = "";
        document.querySelector(".input_list").focus();
    }
    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i <listarr.length; i++) {
        list += "<li>" + listarr[i] + "<span class='list_edit' id=" + i + "><i class='fas fa-pen'>" + "</span></i>" + "<span class='list_close' id=" + i + "><i class='fa fa-trash' aria-hidden='true'>" + "</span></i></li>";
    }
    list += "</ul>";
    document.querySelector(".lists").innerHTML = list;

    // let editlistbuttons = document.querySelector(".list_edit");
    // for(let i = 0; i < editlistbuttons.length; i++) {
    //   editlistbuttons[i].addEventListener("click", editList);
    // }

    let deletelistbuttons = document.querySelectorAll(".list_close");
    for (let i = 0; i < deletelistbuttons.length; i++) {
        deletelistbuttons[i].addEventListener("click", deleteList);
    }
}

function deleteList() {
    let listid = this.getAttribute("id");
    listarr.splice(listid, 1)
    showList();
}

// todo 함수
var c = 1;
function addTodo() {
    let inputtodo = document.querySelector(".input_todo").value;
    if (inputtodo != null) {
        todoarr.push(inputtodo);
        //todoonlyarr.push(inputtodo);
        document.querySelector(".input_todo").value = "";
        document.querySelector(".input_todo").focus();
        c = c+1;
        let order = "";
        for(let i=1; i<c; i++) {
          order += "<option value=" + i + ">" + i + "</option>";
        }
        order += "<option value=" + c + " selected>" + c + "</option>";
        document.querySelector(".priority_box").innerHTML = order;
    }
    showTodo();
}

function showTodo() {
    let todo = "<ul>";
    let mode = document.querySelector('.todo_mode').innerText;
    let sortingField = document.querySelector(".priority_box").value;
    todoarr.sort(function(a, b) {
      return a[sortingField] - b[sortingField];
    });
    for (let i = 0; i <todoarr.length; i++) {
        todo += "<li>" + todoarr[i] + "<span class='todo_edit' id=" + i + "><i class='fas fa-pen'>" + "</span></i>" + "<span class='todo_close' id=" + i + "><i class='fa fa-trash' aria-hidden='true'>" + "</span></i></li>";
    }
    // if(mode === "All") {
    //   for (let i = 0; i <todoarr.length; i++) {
    //       todo += "<li>" + todoarr[i] + "<span class='todo_close' id=" + i + "><i class='fa fa-trash' aria-hidden='true'>" + "</span></i></li>";
    //   }
    // }
    //  else if(mode === "To do") {
    //    for (let i = 0; i <todoonlyarr.length; i++) {
    //        todo += "<li>" + todoonlyarr[i] + "<span class='todo_close' id=" + i + "><i class='fa fa-trash' aria-hidden='true'>" + "</span></i></li>";
    //    }
    //  }
    //  else {
    //    for (let i = 0; i <donearr.length; i++) {
    //        todo += "<li>" + donearr[i] + "<span class='todo_close' id=" + i + "><i class='fa fa-trash' aria-hidden='true'>" + "</span></i></li>";
    //    }
    //  }
    todo += "</ul>";
    document.querySelector(".todos").innerHTML = todo;

    let deletetodobuttons = document.querySelectorAll(".todo_close");
    for (let i = 0; i < deletetodobuttons.length; i++) {
        deletetodobuttons[i].addEventListener("click", deleteTodo);
    }
}

let checkList = document.querySelector('.todos');
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    // let thisid = event.target.id;
    // let thistodo = event.target.value;
    //  if($(this).is(':checked')){
    //    todoarr.push(thistodo);
    //    donearr.splice(thisid, 1);
    //  }
    //  else {
    //    donearr.push(thistodo);
    //    todoarr.splice(thisid, 1);
    // }
    event.target.classList.toggle('checked');
  }
});

function editTodo() {

}

function deleteTodo() {
    let todoid = this.getAttribute("id");
    todoarr.splice(todoid, 1);
     // if($(this).is(':checked')) {
     //   todoarr.splice(todoid, 1);
     //   donearr.splice(todoid, 1);
     // }
     // else {
     //   todoarr.splice(todoid,1);
     //   todoonlyarr.splice(todoid, 1);
     // }

    showTodo();
}

// mode -> 다시 해보기
function modeChange() {
  let mode = document.querySelector('.todo_mode').innerText;
  if(mode === "All") {
    $('todo_mode').text("To do");
  }
  else if(mode === "To do") {
    $('.todo_mode').text("Done");
  }
  else {
    $('.todo_mode').text("All");
  }
  showTodo();
}
