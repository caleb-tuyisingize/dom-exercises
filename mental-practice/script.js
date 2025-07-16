function myFunction(){
const selection = document.getElementById("colorSelect");
const index = selection.selectedIndex;
if(index !== -1){
    selection.remove(index);
}else{
    alert("No item to remove");
}
}




