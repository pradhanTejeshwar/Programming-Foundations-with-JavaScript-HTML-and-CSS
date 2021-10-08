// In the first line it sets the variable input to the canvas. Then in the second line it assigns to the variable newTask the task the user has typed in, if they typed something in (there is nothing to add otherwise). Then the variable  item is set to a  new li item. In the next several lines, item.innerHTML is set to a huge string of the list item which includes the two buttons and the phrase of the task. There is the first button surrounded by single quotes, followed by a + since we are adding (or concatenating ) strings, followed by the second button surrounded by single quotes and a + and then newTask, the string the user entered. The next line uses the appendChild method with item to make this new list item appear.
/*<ul id="tasks">
   <li>
       <input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" />
       <input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" />
   make todo list
   </li>
</ul>*/
function addTask () {
  var input = document.getElementById("input");
  // get current text from input field
  var newTask = input.value;
  // only add new item to list if some text was entered
  if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
    '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" class="important" onclick="important(this.parentNode)" value="!" />' +
    newTask;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);  
    
     /* Step 4 below here */
    input.value = '';
    input.placeholder = 'enter new task';
  }
}



// change styling used for given item
function markDone (item) { 
    item.className = 'finished';
}

/* Step 7 below here */
function remove (item) {
  // remove item completely from document
  if(item.className=='finished'){
    item.remove();
  }
}

// highlight item from document
function important(item) {
  item.className = 'important';
}

/* Step 11 below here */
function doAbout() {
  var value = document.getElementById("divabout");
  value.innerHTML = "Author is Tejeshwar Pradhan";
  value.classList.add("yellowbackground");
}

/* Step 14 below here */
function clearAbout() {
  var value = document.getElementById("divabout");
  value.innerHTML = "";
}
