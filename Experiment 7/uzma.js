
    function validate1() {

    var email = document.forms["login_form"]["email"];
    var password = document.forms["login_form"]["psw"];

    if(email.value== "" && password.value== "")
    {
        document.getElementById("error_msg_email").innerHTML="* Email field must be filled out";
        email.style.border='1px solid #E53935';
        password.style.border='1px solid #E53935';
        document.getElementById("error_msg_psw").innerHTML="* Password field must be filled out";
        return false;
    }

    if (email.value== "") {
       

        email.style.border='1px solid #E53935';
        document.getElementById("error_msg_email").innerHTML="* Email field must be filled out";

        return false;
    }
    if (password.value== "") {
       
 
        password.style.border='1px solid #E53935';
        document.getElementById("error_msg_psw").innerHTML="* Password field must be filled out";

        return false;
    }

    if (password.value.length>10 || password.value.length<3 ) {
       
 
        password.style.border='1px solid #E53935';
        document.getElementById("error_msg_psw").innerHTML="* Password length should be between 4 to 10";

        return false;
    }

    if (email.value!="") {
       
 
       if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))
          {
        email.style.border='1px solid #E53935';
        document.getElementById("error_msg_email").innerHTML="* Invalid email address";
        return false;
          }
    }
            alert("Your form is successfully submitted");
    
    }

    function remove_errror_email()
    {
        var email = document.forms["login_form"]["email"];
        email.style.border='1px solid #ccc';
        document.getElementById("error_msg_email").innerHTML="";
    }
    function remove_errror_psw()
    {


        var password = document.forms["login_form"]["psw"];
        password.style.border='1px solid #ccc';
    
          document.getElementById("error_msg_psw").innerHTML="";
    }


  function remove_errror_uname()
    {var uname = document.forms["details_form"]["uname"];
        uname.style.border='1px solid #ccc';
    
          document.getElementById("error_msg_uname").innerHTML="";
    }
      function remove_errror_no()
    { var no = document.forms["details_form"]["no"];
        no.style.border='1px solid #ccc';
    
          document.getElementById("error_msg_mob").innerHTML="";
    }
      function remove_errror_branch()
    { var branch = document.forms["details_form"]["branch"];
        branch.style.border='1px solid #ccc';
    
          document.getElementById("error_msg_brnch").innerHTML="";
    }


    function validatePhone()
    {
          var no = document.forms["details_form"]["no"];
          var phoneno = /^\d{10}$/;
                if(!no.value.match(phoneno))
                {
                    document.getElementById("error_msg_mob").innerHTML="* Invalid entry";
                    no.style.border='1px solid #E53935';
                    return false;
                }
    }
      function validate2() {
   
        var uname = document.forms["details_form"]["uname"];
         var branch = document.forms["details_form"]["branch"];
          var no = document.forms["details_form"]["no"];


            if(uname.value== "" && branch.value== "" && no.value== "")
            {
                document.getElementById("error_msg_uname").innerHTML="* Name field must be filled out";
                uname.style.border='1px solid #E53935';
                branch.style.border='1px solid #E53935';
                no.style.border='1px solid #E53935';
                document.getElementById("error_msg_mob").innerHTML="* Mobile field must be filled out";
                
                document.getElementById("error_msg_brnch").innerHTML="* Branch field must be filled out";
                return false;
              }
            

              if(uname.value== "" && branch.value== "" )
              {
                document.getElementById("error_msg_uname").innerHTML="* Name field must be filled out";
                document.getElementById("error_msg_brnch").innerHTML="* Branch field must be filled out";
                uname.style.border='1px solid #E53935';
                branch.style.border='1px solid #E53935';
                validatePhone();
                return false;

              }
              if(uname.value== "" && no.value== "" )
              {
                document.getElementById("error_msg_uname").innerHTML="* Name field must be filled out";
                document.getElementById("error_msg_mob").innerHTML="* Mobile field must be filled out";
                uname.style.border='1px solid #E53935';
                no.style.border='1px solid #E53935';
                return false;

              }

              if(uname.value== "")
              {
                document.getElementById("error_msg_uname").innerHTML="* Name field must be filled out";
                uname.style.border='1px solid #E53935';
                validatePhone();
                return false;

              }
               if(branch.value== "")
              {
                document.getElementById("error_msg_brnch").innerHTML="* Branch field must be filled out";
                branch.style.border='1px solid #E53935';
                validatePhone();
                return false;

              }
             var no = document.forms["details_form"]["no"];
            var phoneno = /^\d{10}$/;
                if(!no.value.match(phoneno))
                {
                    document.getElementById("error_msg_mob").innerHTML="* Invalid entry";
                    no.style.border='1px solid #E53935';
                    return false;
                }

              alert("Your form is successfully submitted");
  }

   function validate5() {

     var message = document.forms["feedback_form"]["message"];
      if(message.value== "")
              {
                document.getElementById("error_msg_msg").innerHTML="* Please enter something!";
                message.style.border='1px solid #E53935';
       
                return false;

              }
  alert("Your form is successfully submitted");
   }
   function remove_errror_msg()
    { 
     var message = document.forms["feedback_form"]["message"];

        message.style.border='1px solid #ccc';
    
          document.getElementById("error_msg_msg").innerHTML="";
    }
        function validate3() {
             alert("Your form is successfully submitted");
}


     function validate4() {

    var met_msg = document.forms["survey_form"]["met_msg"];
    var pos_msg = document.forms["survey_form"]["pos_msg"];

    if(met_msg.value== "" && pos_msg.value== "")
    {
        document.getElementById("error_msg_met").innerHTML="* Please enter something!";
        met_msg.style.border='1px solid #E53935';
        pos_msg.style.border='1px solid #E53935';
        document.getElementById("error_msg_pos").innerHTML="* Please enter something!";
        return false;
    }

    if (met_msg.value== "") {
       

        met_msg.style.border='1px solid #E53935';
        document.getElementById("error_msg_met").innerHTML="* Please enter something!";

        return false;
    }
    if (pos_msg.value== "") 
       
 {
        pos_msg.style.border='1px solid #E53935';
        document.getElementById("error_msg_pos").innerHTML="* Please enter something!";

        return false;
    }
     alert("Your form is successfully submitted");
}
  function remove_errror_met()
    { 
     var met_msg = document.forms["survey_form"]["met_msg"];

        met_msg.style.border='1px solid #ccc';
    
          document.getElementById("error_msg_met").innerHTML="";
    }
      function remove_errror_pos()
    { 
     var pos_msg = document.forms["survey_form"]["pos_msg"];

        pos_msg.style.border='1px solid #ccc';
    
          document.getElementById("error_msg_pos").innerHTML="";
    }
