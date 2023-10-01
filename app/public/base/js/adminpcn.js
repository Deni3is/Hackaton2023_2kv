PCN_table(function() {});
    function create_listTable(data,callback)
    {
        var table = $('#startTable');
        for(var x in data){
            var tr = $('<tr>');
            tr.append($('<td>').text(data[x].name));
            tr.append($("<td><button type=\"button\" class=\"button_1677514707552\" data-bs-toggle=\"modal\"  id='pcn_"+data[x].id+"' data-bs-target=\"#pcnmod_"+data[x].id+"\" >Информация</button></td>"));
            table.append(tr);
            var modal1=$('<div class="modal fade" id="pcnmod_'+data[x].id+'" tabindex="-1" aria-labelledby="exampleModalLabel'+data[x].id+'" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-xl" ><div class="modal-content" style ="background-color:white"><div class="modal-header" ><h5 class="modal-title" id="exampleModalLabel'+data[x].id+'">Информация о ПЦН</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button></div><div class="modal-body"><div class="row" ><ul class="nav nav-tabs" id="myTab'+data[x].id+'" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="home-tab'+data[x].id+'" data-bs-toggle="tab" data-bs-target="#home'+data[x].id+'" type="button" role="tab" aria-controls="home'+data[x].id+'" aria-selected="true">Информация</button></li><li class="nav-item" role="presentation"><button class="nav-link" id="profile-tab'+data[x].id+'" data-bs-toggle="tab" data-bs-target="#profile'+data[x].id+'" type="button" role="tab" aria-controls="profile'+data[x].id+'" aria-selected="false">Работники</button></li></ul><div class="tab-content" id="myTabContent'+data[x].id+'" style="height:400px"><div class="tab-pane fade show active" id="home'+data[x].id+'" role="tabpanel" aria-labelledby="home-tab'+data[x].id+'"><div class="row"><div class ="col"><div class="col"><div class="row" ><div class="col"><div class="row"><div class="col"><div class="row"><h5>Название <input type="text" class="registrpole" value="'+data[x].name+'" readonly/></div></div></div></div><div class="row" style="margin-top: 250px;"><button type="button" class="registerred" data-bs-target="#red_'+data[x].id+'"  data-bs-toggle="modal" data-bs-dismiss="modal"  >Редактировать</button><button type="button" class="registerdel" data-bs-target="#deltoogle'+data[x].id+'" data-bs-toggle="modal"data-bs-dismiss="modal">Удалить</button></div></div></div></div></div></div><div class="tab-pane fade" id="profile'+data[x].id+'" role="tabpanel" aria-labelledby="profile-tab'+data[x].id+'"><button class="btn btn-light" type="button" data-bs-toggle="modal" data-bs-target="#adddejmod_'+data[x].id+'" style="margin-top:10px" >Добавить</button><div class="col" style="height:350px"> <table id="DutyTable'+data[x].id+'" class="tablenew" cellspacing="0" width="100%" style="margin-top:10px"></table></div></div></div></div></div></div></div></div>'); 
            table.append(modal1);   
            var modal1del=$('<div class="modal fade" id="deltoogle'+data[x].id+'" aria-hidden="true" aria-labelledby="deltoogle'+data[x].id+'" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="deltoogle'+data[x].id+'">Внимание</h5></div><div class="modal-body">Вы уверены что хотите удалить ПЦН?</div><div class="modal-footer"><button type="button" class="registerdel" onclick="deletePCN('+data[x].id+')" data-bs-dismiss="modal">Ок</button><button class="registerred" data-bs-target="#pcnmod_'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Отмена</button></div></div></div></div>');
            table.append(modal1del);   
            Duty_PCN_table(data[x].id);
            var modaldej=$('<div class="modal fade" id="adddejmod_'+data[x].id+'" tabindex="-1" role="dialog" aria-labelledby="adddejModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content" style ="background-color:white"><div class="modal-header"><h5 class="modal-title" id="adddejModalLabel">Добавление нового дежурного</h5><button type="button" class="btn-close" data-bs-target="#pcnmod_'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Закрыть"></button></div><div class="modal-body"><div class="col" ><div class="row"><h5>Логин<input type="text" id ="login_'+data[x].id+'" class="registrpole"/></h5></div><div class="row"><h5>Пароль<input type="text" id ="passw_'+data[x].id+'" class="registrpole"/></h5></div><div class="row"><div class="col"><div class="row"><h5>Фамилия<input type="text" id ="sur_'+data[x].id+'" class="registrpole"/></h5></div><div class="row"><h5>Имя<input type="text" id ="name_'+data[x].id+'" class="registrpole"/></h5></div><div class="row"><h5>Отчество<input type="text" id ="otch_'+data[x].id+'" class="registrpole"/></h5></div><div class="row"><h5>Дата рождения<input type="text" id ="dayrojd_'+data[x].id+'" class="registrpole"/></h5></div><div class="row"><h5>Серия<input type="text " id ="passer_'+data[x].id+'" class="registrpole"/></h5></div><div class="row"><h5>Номер<input type="text" id ="pasnum_'+data[x].id+'" class="registrpole"/></h5></div><div class="row"><h5>Дата выдачи<input type="text" class="registrpole"/></h5></div></div></div></div></div><div class="modal-footer"><button type="button" onclick="addDuty(document.getElementById(\'login_'+data[x].id+'\' ).value,document.getElementById(\'passw_'+data[x].id+'\' ).value,document.getElementById(\'sur_'+data[x].id+'\' ).value,document.getElementById(\'name_'+data[x].id+'\' ).value,document.getElementById(\'otch_'+data[x].id+'\' ).value,document.getElementById(\'dayrojd_'+data[x].id+'\' ).value,document.getElementById(\'passer_'+data[x].id+'\' ).value,document.getElementById(\'pasnum_'+data[x].id+'\' ).value,'+data[x].id+')" class="registerbtn" data-bs-target=\"#pcnmod_'+data[x].id+'\" data-dismiss="modal"> Добавить</button></div></div></div></div>');
            table.append(modaldej);
            var redpcn=$('<div class="modal fade" id="red_'+data[x].id+'" tabindex="-1" role="dialog" aria-labelledby="redmodal_'+data[x].id+'" aria-hidden="true"> <div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="redmodal_'+data[x].id+'" >Редактирование ПЦН</h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button> </div> <div class="modal-body"> <div class="col" > <div class="row"> <div class="col"> <div class="row"> <h5>Название <input type="text" id="named_'+data[x].id+'" value="'+data[x].name+'" class="registrpole" /> </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="registerbtn"  onclick="updatePCN('+data[x].id+',document.getElementById(\'named_'+data[x].id+'\').value,'+data[x].id+')" data-bs-dismiss="modal" style="width:50%" >Сохранить</button> <button type="button" class="registerred" data-bs-target="#pcnmod_'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Отмена</button> </div> </div> </div> </div>');
            table.append(redpcn);
        };

        var tabledop=$('<table id="T" class="tablenew" style="height:1px"></table>');
        table.append(tabledop);
        callback();        

        $('#startTable').DataTable();

    }
function PCN_table(callback)
{
        $.ajax({
            type: "POST",
                url: '/adminpcn/PCNInfo',
            success: function(data){
                if(data != "")
                {
                    Table = JSON.parse(data);
                    create_listTable(Table,callback);
                }
                else
                {
                    create_listTable(null,callback);
                }
            }
        }); 
}

function updatePCN(pcn,name,x)
{
    console.log(name);
    $.ajax({
        type: "POST",
        url: '/adminpcn/updatePCN',
        data:{pcn_id:pcn,
          PCNname:name},
        success: function(data){
            if(data!="")
            {
                console.log(x);

                PCN_table( function() {$('#pcnmod_'+x+'').modal('show');});


            }
        }
      });

}

function addPCN(name)
{
    $("#startTable tr").remove();
    $.ajax({
        type: "POST",
        url: '/adminpcn/addPCN',
        data:{PCNname: name},
        success: function(data){
            if(data!="")
            {
                PCN_table(function() {});


            }
        } 
    }); 
    
}

function deletePCN(pcn)
{
    $("#startTable tr").remove();
    $.ajax({
        type: "POST",
        url: '/adminpcn/deletePCN',
        data:{pcn_id:pcn},
        success: function(data){
            if(data!="")
            {
                PCN_table(function() {});


            }
        } 
    }); 
}




function create_Duty_PCN_listTable(data,id)
{

        var table = $('#DutyTable'+id+'');

        var table2 = $('#T');

        table.html('');
        var table_head = $('<tr>');
        table_head.append($('<th>').text('Наименование'));
        table_head.append($('<th style="width:25%">').text(''));

        table.append(table_head);
        for(var x in data){
            var tr = $('<tr>');
            tr.append($('<td>').text(data[x].fio));
            tr.append($("<td><button class = \"button_1677514707552\" type=\"button\" data-bs-toggle=\"modal\" id='duty_"+data[x].id+"' data-bs-target=\"#infodej"+data[x].id+"\" >Информация</button></td>"));
            table.append(tr);

            var sp=data[x].fio.split(' ');
            var s=sp[0];
            var n=sp[1];
            var o=sp[2];
            console.log(s,n,o);
            var infomod=$('<div class="modal fade" id="infodej'+data[x].id+'"  role="dialog" aria-labelledby="infodejlabel'+data[x].id+'" aria-hidden="true" tabindex="-1"> <div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="infodejlabel'+data[x].id+'">Информация о дежурном</h5> <button type="button" class="btn-close" data-bs-target="#pcnmod_'+id+'" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Закрыть"></button> </div> <div class="modal-body"> <div class="col"> <div class="row"> <div class="col"> <div class="row"> <h5>Фамилия <input type="text" value="'+s+'" class="registrpole" readonly /></h5> </div> <div class="row"> <h5>Имя <input type="text" value="'+n+'" class="registrpole"readonly/></h5> </div> <div class="row"> <h5>Отчество <input type="text" value="'+o+'" class="registrpole"readonly/></h5> </div> <div class="row"> <h5>Дата рождения <input type="text" value="'+data[x].birthday+'" class="registrpole"readonly/></h5> </div> <div class="row"> <h5>Серия <input type="text " value="'+data[x].pseries+'" class="registrpole"readonly/></h5> </div> <div class="row"> <h5>Номер <input type="text" value="'+data[x].pnumber+'" class="registrpole"readonly/></h5> </div> <div class="row"> <h5>Дата выдачи <input type="text" value="'+data[x].birthday+'" class="registrpole"readonly/></h5> </div> <div class="row"> <h5>ПЦН <input type="text" value="'+data[x].pcn_id+'" class="registrpole"readonly/></h5> </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="registerred" data-bs-target="#reddej'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Редактировать</button> <button type="button" class="registerdel" data-bs-target="#deldej'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Удалить</button> </div> </div> </div> </div>')
            table2.append(infomod);
            var red = $('<div class="modal fade" id="reddej'+data[x].id+'"  role="dialog" aria-labelledby="reddejlabel'+data[x].id+'" aria-hidden="true" tabindex="-1" > <div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="reddejlabel'+data[x].id+'">Информация о дежурном</h5>  </div> <div class="modal-body"> <div class="col" > <div class="row"> <div class="col"> <div class="row"> <h5>Фамилия <input type="text" id="surr_'+data[x].id+'" class="registrpole" value="'+s+'" /></h5> </div> <div class="row"> <h5>Имя <input type="text" id="namer_'+data[x].id+'" value="'+n+'" class="registrpole"/></h5> </div> <div class="row"> <h5>Отчество <input type="text" value="'+o+'" id="othr_'+data[x].id+'" class="registrpole"/></h5> </div> <div class="row"> <h5>Дата рождения <input type="text" id="dater_'+data[x].id+'" value="'+data[x].birthday+'" class="registrpole"/></h5> </div> <div class="row"> <h5>Серия <input type="text" value="'+data[x].pseries+'" id="passerr_'+data[x].id+'" class="registrpole"/></h5> </div> <div class="row"> <h5>Номер <input type="text" value="'+data[x].pnumber+'" id="pasnumr_'+data[x].id+'" class="registrpole"/></h5> </div> <div class="row"> <h5>Дата выдачи <input type="text" value="'+data[x].birthday+'" id="pasdater_'+data[x].id+'" class="registrpole"/></h5> </div> <div class="row"> <h5>ПЦН <input type="text" value="'+data[x].pcn_id+'" id="pcnr_'+data[x].id+'" class="registrpole"/> </h5> </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="registerbtn" style="width:50%" onclick="updateDuty(document.getElementById(\'surr_'+data[x].id+'\').value,document.getElementById(\'namer_'+data[x].id+'\').value,document.getElementById(\'othr_'+data[x].id+'\').value, '+data[x].id+', document.getElementById(\'pcnr_'+data[x].id+'\').value, document.getElementById(\'dater_'+data[x].id+'\').value, document.getElementById(\'passerr_'+data[x].id+'\').value, document.getElementById(\'pasnumr_'+data[x].id+'\').value )" data-dismiss="modal">Сохранить</button> <button type="button" class="registerred" data-bs-target="#infodej'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Отмена</button> </div> </div> </div> </div>');
            table2.append(red);
            var del=$('<div class="modal fade" id="deldej'+data[x].id+'" aria-hidden="true" aria-labelledby="dej'+data[x].id+'" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="dej'+data[x].id+'">Внимание</h5></div><div class="modal-body">Вы уверены что хотите Дежурного?</div><div class="modal-footer"><button type="button" class="registerdel" onclick="deleteDuty('+data[x].id+')" data-dismiss="modal">Ок</button><button class="registerred" data-bs-target="#infodej'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Отмена</button></div></div></div></div>');
            table2.append(del);


        };
}

function Duty_PCN_table(id)
{
        $.ajax({
            type: "POST",
            url: '/adminpcn/DutysList',
            data:{pcn_id: id},
            success: function(data){
                if(data != "")
                {
                    console.log(data);
                    Table = JSON.parse(data);

                    create_Duty_PCN_listTable(Table,id);
                }
                else
                {
                    create_Duty_PCN_listTable(null,id);
                }
            }
        }); 
}

function updateDuty(f,i,o,duty,pcn,bitr,pseries,pnum)
{
    fio=f+" "+i+" "+o;
    console.log(fio,duty,pcn,bitr,pseries,pnum);
        $.ajax({
            type: "POST",
            url: '/adminpcn/updateDuty',
            data:{
                duty_id:duty,
                pcn_id:pcn,
                dutyFIO:fio,
                dutyBirthday:bitr,
                dutyPseries:pseries,
                dutyPnumber:pnum
                }
        }); 
    location.reload();
}
function addDuty(login,password,f,i,o,bitr,pseries,pnum,pcn)
{       
        fio=f+" "+i+" "+o;

        //Дата в формате ГГГГ-ММ-ДД
        $.ajax({
            type: "POST",
            url: '/adminpcn/addDuty',
            data:{
                dutyLogin: login,
                dutyPassword:password,
                dutyFIO:fio,
                dutyBirthday:bitr,
                dutyPseries:pseries,
                dutyPnumber:pnum,
                pcn_id:pcn}
        });
    location.reload();


}
function deleteDuty(duty)
{
        $.ajax({
            type: "POST",
            url: '/adminpcn/deleteDuty',
            data:{duty_id:duty}
        }); 
    location.reload();
}

