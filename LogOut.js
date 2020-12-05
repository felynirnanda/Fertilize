function logOut(){
    var choice = confirm("Are You Sure?");
    if (choice == true){
        window.location.href="index.html" 
    }
    if (choice == false){
        return false
    }
}