// stop erase animations from firing on load

var nam=Math.random().toString(36).substring(7);

function nm() {
    
    nam = document.getElementById('name').value;
    $('#myModal').modal('hide');
    console.log(nam);
}

var config = {
    apiKey: "AIzaSyAOpBv6fvhwyE9LBDtf4SnQD9Dg4q9Nwr0",
    authDomain: "test-e8fcf.firebaseapp.com",
    databaseURL: "https://test-e8fcf.firebaseio.com",
    projectId: "test-e8fcf",
    storageBucket: "test-e8fcf.appspot.com",
    messagingSenderId: "1096436282534",
    appId: "1:1096436282534:web:dbac3cff24ee1b5d287067"
};
firebase.initializeApp(config);

const dbRef = firebase.database().ref();
const user = dbRef.child('comments');

function display() {

    var com = document.getElementById('feedback').value;
    const names = dbRef.child(nam);
    names.update({ 'comment': com });

    var checkedValue=[]; 
    var inputElements = document.getElementsByClassName('messageCheckbox');
    for(var i=0; inputElements[i]; ++i){
          if(inputElements[i].checked){
               checkedValue[i] = inputElements[i].value;
               console.log(checkedValue);
          }
    }

    names.update({ 'check': checkedValue });
    
    console.log("done");

}
document.addEventListener("DOMContentLoaded", function() {
    $("#myModal").modal('show');
    document.querySelector("form").addEventListener("click", e => {
        let checkboxCL = e.target.classList,
            pState = "pristine";

        if (checkboxCL.contains(pState))
            checkboxCL.remove(pState);
    });
      var count= Math.random().toString(36).substring(7);
    const names = dbRef.child(count);
   names.update({ 'count': count });
    document.getElementById('name').addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
         event.preventDefault();
         nm();
        }
      });
});
