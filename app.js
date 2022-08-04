
let boatArray = new Array();
let lA = 0 , lD = 0 , bflag = 1 , rA = 0 , rD = 0;


function addition(aId){
    let temp = document.getElementById(aId) ;
    console.log( temp.id );

    if(boatArray.length == 0 || boatArray.length == 1 ){
        bflag = 0;
        // console.log((boatArray.length) == 0)
        switch(temp.id){

            //  Angle 1 at position first

            case "angel1":
            {   
                console.log(" case 1 data ==> " ,temp.id);
                
                if( temp.style.transform == 'translateX(10%)'){

                    let pos = (boatArray.length == 0) ? '460%' : '340%' ; 

                  setTimeout(function() {
                    temp.style.transform = `translateX( ${pos} )`;
                  }, 400);
                  boatArray.push(temp);
                  console.log(boatArray.length)

                  
                }
                else{
                    setTimeout(function() {
                        temp.style.transform = 'translateX(10%)';
                      }, 400);
                      boatArray.shift();
                      console.log(boatArray);
                }
               
                break;
            }

             //  Angle 2 at position first
            
             case "angel2":
            {   
                console.log(" case 2 data ==> " ,temp.id);
                if( temp.style.transform == 'translateX(10%)'){

                  let pos = (boatArray.length == 0) ? '370%' : '240%' ; 
                  setTimeout(function() {
                    temp.style.transform = `translateX( ${pos} )`;
                  }, 400);
                  boatArray.push(temp);
                  
                }
                else{
                    setTimeout(function() {
                        temp.style.transform = 'translateX(10%)';
                      }, 400);
                      boatArray.shift();
                      console.log(boatArray);
                }
               
                break;
            }
             //  Angle 3 at position first

            case "angel3":
            {   
                console.log(" case 3 data ==> " ,temp.id);
                if( temp.style.transform == 'translateX(10%)'){
                   
                  let pos = (boatArray.length == 0) ? '260%' : '150%' ; 

                  setTimeout(function() {
                    temp.style.transform = `translateX( ${pos} )`;
                  }, 400);
                  boatArray.push(temp);
                  
                }
                else{
                    setTimeout(function() {
                        temp.style.transform = 'translateX(10%)';
                      }, 400);
                      boatArray.shift();
                      console.log(boatArray);
                }
               
                break;
            }
            //  Devil 1 at position first 
            
            case "devil1":
            {   
                console.log(" case 1 data ==> " ,temp.id);
                if( temp.style.transform == 'translateX(10%)'){

                    let pos = (boatArray.length == 0) ? '750%' : '640%' ; 

                  setTimeout(function() {
                    temp.style.transform = `translateX( ${pos} )`;
                  }, 400);
                  boatArray.push(temp);
                  
                }
                else{
                    setTimeout(function() {
                        temp.style.transform = 'translateX(10%)';
                      }, 400);
                      boatArray.shift();
                      console.log(boatArray);
                }
               
                break;
            }
            //  Devil 2 at position first 

            case "devil2":
            {   
                console.log(" case 1 data ==> " ,temp.id);
                if( temp.style.transform == 'translateX(10%)'){

                    let pos = (boatArray.length == 0) ? '650%' : '540%' ; 

                  setTimeout(function() {
                    temp.style.transform = `translateX( ${pos} )`;
                  }, 400);
                  boatArray.push(temp);
                  
                }
                else{
                    setTimeout(function() {
                        temp.style.transform = 'translateX(10%)';
                      }, 400);
                      boatArray.shift();
                      console.log(boatArray);
                }
               
                break;
            }

            //  Devil 3 at position first 

            case "devil3":
            {   
                console.log(" case 1 data ==> " ,temp.id);
                if( temp.style.transform == 'translateX(10%)'){

                    let pos = (boatArray.length == 0) ? '550%' : '445%' ; 

                  setTimeout(function() {
                    temp.style.transform = `translateX( ${pos} )`;
                  }, 400);
                  boatArray.push(temp);
                  
                }
                else{
                    setTimeout(function() {
                        temp.style.transform = 'translateX(10%)';
                      }, 400);
                      boatArray.shift();
                      console.log(boatArray);
                }
               
                break;
            }
           
            
        }
    }
    
    else if( (boatArray.length > 1) && (bflag == 0) ){
       
        console.log("else if conditin executed ",boatArray.length , boatArray);
        setTimeout(function() {
            temp.style.transform = 'translateX(10%)';
          }, 4);
          boatArray.shift();
        //   console.log("else if conditin executed ",boatArray.length , boatArray);
          alert("else if executed ba > = 2" , boatArray.length);
    }

    else {
            console.log(boatArray.length)
        alert("Only two allow on boat");
        console.log( " else condition executed " ,boatArray.length)
        
        }
    // console.log(boatArray.length);

}

function boatValidation(){
    console.log("boat moved");
    if( boatMove.style.transform == 'translateX(20%)' )
    {   setTimeout(function() {
        boatMove.style.transform = 'translateX(240%)';
      }, 500);
      bflag = 1;
    //   window.alert("Done ")
    }
    else{
        setTimeout(function() {
            boatMove.style.transform = 'translateX(20%)';
          }, 500);
    }
}




let boatMove = document.getElementById("boat");

boatMove.addEventListener("click" , boatValidation)

let imgClass = document.getElementsByClassName("imgClass");

// const devilClass = document.getElementsByClassName("imgClassD");




for (let i = 0; i < imgClass.length; i++) {
    
    imgClass[i].addEventListener('click', () => addition( imgClass[i].id ) );
}

 //     if( aId.style.transform == 'translateX(10%)' )
    //         {   setTimeout(function() {
    //             aId.style.transform = 'translateX(340%)';
    //           }, 30);
    //     }
    //     else{
    //             setTimeout(function() {
    //                 aId.style.transform = 'translateX(10%)';
    //               }, 30);
    //     }
    // }