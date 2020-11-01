
 var list=document.getElementById('list');
//GetDataInFirebase
firebase.database().ref('todos').on('child_added',function(data){
      // Create Li tag with textnode
     var li=document.createElement('li')
     var textt=document.createTextNode(data.val().value)
     li.appendChild(textt)
    
//     //delete button
     var delBtn=document.createElement('button')
     var deltext=document.createTextNode(" Delete")
    
     delBtn.appendChild(deltext)
     delBtn.setAttribute('class','btn')
     delBtn.setAttribute('id',data.val().key)
     delBtn.setAttribute('onclick','delItem(this)')
     li.appendChild(delBtn)
    
     // EDIT BUTTON
     var EditBtn=document.createElement('button')
     var Etext=document.createTextNode("EDIT")
     EditBtn.setAttribute('class','btn')
     EditBtn.setAttribute('id',data.val().key)

     EditBtn.setAttribute('onclick','EditItem(this)')
     EditBtn.appendChild(Etext)
     li.appendChild(EditBtn)
     list.appendChild(li)
    


}
)


 function clickk()
{
    var val=document.getElementById('val');
    var database=firebase.database().ref('todos')
    var key=database.push().key;
    var todo={
        value:val.value,
        key:key
    }
    database.child(key).set(todo)




//   
//     val.value=''


 }
 function delItem(e)
 {
     firebase.database().ref('todos').child(e.id).remove()
     e.parentNode.remove()  
 }

 function EditItem(e)
 {
    
     var val=prompt('Enter Edit value',e.parentNode.firstChild.nodeValue)
     var editTodo={
         value:val,
         key:e.id

        }
        firebase.database().ref('todos').child(e.id).set('editTodo')
     e.parentNode.firstChild.nodeValue=val;



 }
 function delAll()
 {
     list.innerHTML=''
 }