/*
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function get_search_id() {


    var search_data=document.getElementById("search_data").value;
    
    $.ajax({ 
        url: "/search", 
        type: 'POST',  
        data: {"search":search_data},
        error:function(error){
            console.log(error);
        }
    
    });


/*
    

        var result='{{ result }}'
        
        $.ajax({
            url: "/search", 
                    type: 'GET', 
                    data: {'value':result}, 
                    
                   success:  function(response) { 
                        document.getElementById('disp_final').innerHTML =  result ; 
                        console.log(result)
                    }, 
                    error: function(error) { 
                        console.log(error); 
                    } 
            
            
          }
          );
          
        
        }


          
        
    
        


    
/*
function data_get(){
    
     var result='##'
     $.ajax({
        contentType:"application/json;charset=uft-8",
        url: "/search", 
                type: 'GET', 
                data: {'value':result}, 
                cache:false,
               success:  function(response) { 
                    document.getElementById('disp_final').innerHTML =  result ; 
                    console.log(result)
                }, 
                error: function(error) { 
                    console.log(error); 
                } 
        
        
      }
      );
      
    
      
}
*/





















