if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
   }
   
   function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
   }
   form{
    width:100%;
    max-width:600px;
    margin:0 auto;
 }
 input{
    width:100%;
    font-size:32px;
    margin:5px 0;
    float:left;
    border:none;
    padding:10px;
    outline:none;
 }
 .search-bar{
    width:85%;
 }
 .submit-button{
    width:15%;
    background:#000;
    color:#FFF;
 }
 
   