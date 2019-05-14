function Siguiente()
    {
        var data = 0;
        var id = "";
        for (i=1; i <= cantidad_imagenes; i++)
        {
            var display = $('#view_'+i).css('display');
            if (display != 'none')
            {
                data =  parseFloat($('#view_'+i).attr('data'));
                id = "view_"+i;
                break;                                      
            }
            
        }
        var new_data = 0;
        if (data >= cantidad_imagenes)
        {
            new_data = 1;   
        }else{
            new_data = data + 1; 
        }
        $('#'+id).css('display', 'none');
        $('#view_'+new_data).css('display', 'block');
    }
    
function Anterior()
{
    $(document).ready(function() { 
        var data = 0;
        var id = "";
        for (i=1; i <= cantidad_imagenes; i++)
        {
            var display = $('#view_'+i).css('display');
            if (display != 'none')
            {
                data =  parseFloat($('#view_'+i).attr('data'));
                id = "view_"+i;
                break;                                      
            }
        }
        calculo_data = data - 1;
        var new_data = 0;
        if (calculo_data < 1)
        {
            new_data = cantidad_imagenes;   
        }else{
            new_data = data - 1; 
        }
        $('#'+id).css('display', 'none');
        $('#view_'+new_data).css('display', 'block');
    }); 
}

window.onload = function() {
    var intevalo = setInterval('Siguiente()',10000);
}