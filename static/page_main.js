var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);
function generate(){
    let x = Math.random() * (9934 - 1011) + 1011;
    y=Math.floor(x)
    console.log(y)
    document.getElementById("token_display").value = y
    var text=document.getElementById("textinput").value
    $.ajax({ 
        url: '{{url_for('/')}}', 
        type: 'POST',  
        data: {"id":y,"value":text},
        error:function(error){
            console.log(error);
        }
    
    });
}

function send_data(){
id=id
id=des
id=formFile

//



}

function clipboard(){

    var copyText = document.getElementById("token_display");

    
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);
  
    
  }


