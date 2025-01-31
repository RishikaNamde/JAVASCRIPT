let sub=()=>{
    let inpname=document.querySelector("#name").value;
    let inpnum=document.querySelector("#number").value;
    let inpemail=document.querySelector("#email").value;
    let inppass=document.querySelector("#password").value;

    let inpcpass=document.querySelector("#cnpass").value;


    let errorname=document.querySelector("#errorname")
    let errornum=document.querySelector("#errornum")
    let erroremail=document.querySelector("#erroremail")
    let errorpass=document.querySelector("#errorpass")
    let errorcnpass=document.querySelector("#errorcnpass") 


    if(inpname=="")
    { 
        errorname.innerHTML="please fill the name field";
        errorname.style.color="red"
      return false;
    }
    if(inpnum=="")
        { 
            errornum.innerHTML="please fill the contact no. field";
            errornum.style.color="blue"
          return false;
        }
        if(inpemail=="")
            { 
                erroremail.innerHTML="please enter the email";
                erroremail.style.color="green"
              return false;
            }
            if(inppass=="")
                { 
                    errorpass.innerHTML="please enter the password";
                    errorpass.style.color="purplej"
                  return false;
                }
                if(inpcpass=="")
                    { 
                        errorcnpass.innerHTML="please confirm the password";
                        errorcnpass.style.color="brown"
                      return false;
                    }
                    if(inppass!=inpcpass)
                    {
                      errorcnpass.innerHTML="confrim password is wrong";
                      errorcnpass.style.color="brown"
                      return false;

                    }
                    else if(isNaN(inpnum))   //IF NUMBER THAN ANSWER WILL BE FALSE
                    {
                      errornum.innerHTML="please enter number only";
                       errornum.style.color="darkblue";
                      return false;
                     
                    }
                    else if(inpnum.length!==10)
                    {
                      errornum.innerHTML="please enter 10-digt only ";
                      errornum.style.color="red"
                      return false;
                    }
                    else if(!(inpemail.includes("@" && inpemail.includes(".com")))){    //includes:=is a method
                      erroremail.innerHTML="pls enter valid email";
                       erroremail.style.color="red"
                      return false
                    }

}