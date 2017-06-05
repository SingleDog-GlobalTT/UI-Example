/**
 * Created by tyouki on 2017/05/20.
 */

//get the user_id session
var user_id = sessionStorage.user_id;

//check user if. user have to login into the system
if(user_id == 0 || user_id == null){
    alert("The session is expire, please login again");
    window.location.replace("/index.html");
}
else{
    console.log("current user_id: ", user_id);
}
