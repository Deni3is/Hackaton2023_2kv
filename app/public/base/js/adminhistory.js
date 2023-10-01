    history_table();
    function create_listTable(data){
        var table = $('#startTable');
        for(var x in data){
            var tr = $('<tr>');
            tr.append($('<td >').text(data[x].fio));
            tr.append($('<td >').text(data[x].divisionId));
            tr.append($('<td>').text(data[x].role));
            table.append(tr);
        };
        $('#startTable').DataTable();

    }

    function history_table()
    {
        $.ajax({
            type: "POST",
            url: '/adminhistory/DateInit',
            success: function(data){
                console.log(data)

                if(data != "")
                {

                    Table = JSON.parse(data);
                    create_listTable(Table);
                }
                else
                {
                    create_listTable(null);
                }
            }
        }); 
    }
