function ajax(){
   
    // Creating an XHR Object
    
    xhttp.onreadystatechange = function()     //event listener
    {
        if(this.readyState==4 && this.status==200){
        
            var response = JSON.parse(this.responseText);

            $(document).ready(function () {
                $.getJSON("https://jsonplaceholder.typicode.com/todos",
                function (response) {
                    var tr;
                    for (var i = 0; i < response.length; i++) {
                        tr = $('<tr/>');
                        tr.append("<td>" + response[i].id + "</td>");
                        tr.append("<td>" + response[i].title + "</td>");
                        if(response[i].completed==true){
                            tr.append("<td>" + '<input type="checkbox">'+"</td>");
                        }
                        else{
                            tr.append("<td>" + '<input type="checkbox" checked disabled>'+ "</td>");
                        }
                        $('table').append(tr);
                    }
                });
            });
        }
    }

    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}