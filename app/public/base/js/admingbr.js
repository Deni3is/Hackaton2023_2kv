    create_table();
    function create_listTableFond(data){
        var table = $('#fond');
        for(var x in data){
            var tr = $('<tr>');
            tr.append($('<td>').text(data[x].name));
            tr.append($('<td>').text(data[x].description));
            tr.append($('<td>').text(data[x].bankaccount));
            tr.append($("<td><button type=\"button\" class=\"button_1677514707552\" data-bs-toggle=\"modal\" data-bs-target=\"#infogbr_"+data[x].id+"\">Информация</button>"));
            table.append(tr);
            // table.append(modalinfogbr(data,x));
            // table.append(addperson(data,x));
            // table.append(redgbrmodal(data,x));
            // table.append(delgbrmodal(data,x));
           
        };
        // var tabledop=$('<table id="T" class="tablenew" style="height:1px"></table>');
        // table.append(tabledop);
        $('#fond').DataTable();

    }
    function create_listTableCompany(data){
        var table = $('#company');
        for(var x in data){
            var tr = $('<tr>');
            tr.append($('<td>').text(data[x].name));
            tr.append($('<td>').text(data[x].city));
            tr.append($("<td><button type=\"button\" class=\"button_1677514707552\" data-bs-toggle=\"modal\" data-bs-target=\"#infogbr_"+data[x].id+"\">Информация</button>"));
            table.append(tr);
            // table.append(modalinfogbr(data,x));
            // table.append(addperson(data,x));
            // table.append(redgbrmodal(data,x));
            // table.append(delgbrmodal(data,x));
           
        };
        // var tabledop=$('<table id="T" class="tablenew" style="height:1px"></table>');
        // table.append(tabledop);
        $('#company').DataTable();

    }

    function modalinfogbr(data,x){
        var mod=$('<div class="modal fade" id="infogbr_'+data[x].id+'" tabindex="-1" aria-labelledby="infogbrlabel'+data[x].id+'" aria-hidden="true">'          
        +'    <div class="modal-dialog modal-dialog-centered modal-xl">                                                                                                                                                          '
        +'        <div class="modal-content">                                                                                                                                                                                    '
        +'            <div class="modal-header">                                                                                                                                                                                 '
        +'                <h5 class="modal-title" id="infogbrlabel'+data[x].id+'">Информация о Группе реагирования</h5>                                                                                                          '
        +'                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>                                                                                                         '
        +'           </div>                                                                                                                                                                                                      '
        +'            <div class="modal-body">                                                                                                                                                                                   '
        +'                <div class="row">                                                                                                                                                                                      '
        +'                    <ul class="nav nav-tabs" id="myTab" role="tablist">                                                                                                                                                '
        +'                        <li class="nav-item" role="presentation">                                                                                                                                                      '
        +'                            <button class="nav-link active" id="home-tab'+data[x].id+'" data-bs-toggle="tab" data-bs-target="#home'+data[x].id+'" type="button" role="tab" aria-controls="home" aria-selected="true">Информация о объекте</button> '
        +'                        </li>                                                                                                                                                                                          '
        +'                        <li class="nav-item" role="presentation">                                                                                                                                                      '
        +'                            <button class="nav-link" id="profile-tab'+data[x].id+'" data-bs-toggle="tab" data-bs-target="#profile'+data[x].id+'" type="button" role="tab" aria-controls="profile" aria-selected="false">Происшествия</button>      '
        +'                        </li>                                                                                                                                                                                          '
        +'                    </ul>                                                                                                                                                                                              '
        +'                    <div class="tab-content" id="myTabContent'+data[x].id+'">                                                                                                                                                        '
        +'                        <div class="tab-pane fade show active" id="home'+data[x].id+'" role="tabpanel" aria-labelledby="home-tab'+data[x].id+'">                                                                                                   '
        +'                            <div class="row">                                                                                                                                                                          '
        +'                                <div class="col">                                                                                                                                                                      '
        +'                                    <div class="col">                                                                                                                                                                  '
        +'                                        <div class="row" style="height: 80px;margin-top:10px ">                                                                                                                        '
        +'                                            <div class="row">                                                                                                                                                          '
        +'                                                <div class="col">                                                                                                                                                      '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">Гос номер</div>                                                                                                                               '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">                                                                                                                                              '
        +'                                                            <input type="text" class="registrpole" value='+data[x].number+' readonly />                                                                                '
        +'                                                        </div>                                                                                                                                                         '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                </div>                                                                                                                                                                 '
        +'                                            </div>                                                                                                                                                                     '
        +'                                            <div class="row">                                                                                                                                                          '
        +'                                                <div class="col">                                                                                                                                                      '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">ПЦН</div>                                                                                                                                '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">                                                                                                                                              '
        +'                                                            <input type="text" class="registrpole" value='+data[x].pcn_id+'  readonly />                                                                        '
        +'                                                        </div>                                                                                                                                                         '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                </div>                                                                                                                                                                 '
        +'                                            </div>                                                                                                                                                                     '
 
        +'                                            <div class="row">                                                                                                                                                          '
        +'                                                <div class="col">                                                                                                                                                      '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">Ответственное лицо</div>                                                                                                                                '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">                                                                                                                                              '
        +'                                                            <input type="text" class="registrpole" value='+data[x].car_resp_pers+'  readonly />                                                                        '
        +'                                                        </div>                                                                                                                                                         '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                </div>                                                                                                                                                                 '
        +'                                            </div>                                                                                                                                                                     '
        +'                                            <div class="row">                                                                                                                                                          '
        +'                                                <div class="col">                                                                                                                                                      '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">Состояние</div>                                                                                                                               '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">                                                                                                                                              '
        +'                                                            <input type="text" class="registrpole" value='+data[x].status+' readonly />                                                                                '
        +'                                                        </div>                                                                                                                                                         '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                </div>                                                                                                                                                                 '
        +'                                            </div>                                                                                                                                                                     '
        +'                                            <div class="row">                                                                                                                                                          '
        +'                                                                                                                                                                                                                       '
        +'                                                <div class="col">                                                                                                                                                      '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">Цвет</div>                                                                                                                                    '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                    <div class="row">                                                                                                                                                  '
        +'                                                        <div class="col">                                                                                                                                              '
        +'                                                            <input type="text" class="registrpole" value='+data[x].color+' readonly />                                                                                 '
        +'                                                        </div>                                                                                                                                                         '
        +'                                                    </div>                                                                                                                                                             '
        +'                                                </div>                                                                                                                                                                 '
        +'                                                                                                                                                                                                                       '
        +'                                            </div>                                                                                                                                                                     '
        +'                                            <div class="row" style="margin-top:5px">                                                                                                                                 '
        +'                                                <button type="button" class="registerred" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#redgbr'+data[x].id+'">Редактировать</button>                                         '
        +'                                                <button type="button" class="registerdel" data-bs-target="#delgbr'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Удалить</button>                        '
        +'                                            </div>                                                                                                                                                                     '
        +'                                        </div>                                                                                                                                                                         '
        +'                                    </div>                                                                                                                                                                             '
        +'                                </div>                                                                                                                                                                                 '
        +'                                <div class="col" style="height: 530px;">                                                                                                                                               '
        +'                                    <div class="row">                                                                                                                                                                  '
        +'                                        <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#addperson'+data[x].id+'" type="button" style="margin-top:10px;margin-left: 10px; width: 100px;">Добавить</button>      '
        +'                                    </div>                                                                                                                                                                             '
        +'                                    <table id="team_table'+data[x].id+'" class="table table-striped table-bordered" cellspacing="0" width="100%" style="margin-top: 10px;">                                                          '
        +'                                    </table>                                                                                                                                                                           '
        +'                                </div>                                                                                                                                                                                 '
        +'                            </div>                                                                                                                                                                                     '
        +'                        </div>                                                                                                                                                                                         '
        +'                        <div class="tab-pane fade" id="profile'+data[x].id+'" role="tabpanel" aria-labelledby="profile-tab'+data[x].id+'">                                                                                                         '
        +'                            <div class="row">                                                                                                                                                                          '
        +'                                <div class="col">                                                                                                                                                                      '
        +'                                    <div class="accordion" id="accordionExample'+data[x].id+'" style="margin-top:10px">                                                                                                              '
        +'                                        <div class="accordion-item">                                                                                                                                                   '
        +'                                            <h2 class="accordion-header" id="headingOne">                                                                                                                              '
        +'                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+data[x].id+'" aria-expanded="true" aria-controls="collapse'+data[x].id+'">               '
        +'                                                Дата?Время                                                                                                                                                             '
        +'                                                </button>                                                                                                                                                              '
        +'                                            </h2>                                                                                                                                                                      '
        +'                                            <div id="collapse'+data[x].id+'" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample'+data[x].id+'">                                            '
        +'                                                <div class="accordion-body">                                                                                                                                           '
        +'                                                    Событие                                                                                                                                                            '
        +'                                                </div>                                                                                                                                                                 '
        +'                                            </div>                                                                                                                                                                     '
        +'                                        </div>                                                                                                                                                                         '
        +'                                    </div>                                                                                                                                                                             '
        +'                                </div>                                                                                                                                                                                 '
        +'                                <div class="col" style="height: 520px;margin-top:10px">                                                                                                                                '
        +'                                    <iframe allowfullscreen frameborder="0" src="" width="100%" height="460"></iframe>                                             '
        +'                                </div>                                                                                                                                                                                 '
        +'                            </div>                                                                                                                                                                                     '
        +'                        </div>                                                                                                                                                                                         '
        +'                    </div>                                                                                                                                                                                             '
        +'                </div>                                                                                                                                                                                                 '
        +'            </div>                                                                                                                                                                                                     '
        +'        </div>                                                                                                                                                                                                         '
        +'    </div>                                                                                                                                                                                                             '
        +'</div>                                                                                                                                                                                                                 ');
        Team_member_table(data[x].id);
        return mod;
    }

    function addperson(data,x)
    {
        var mod =$('<div class="modal fade" id="addperson'+data[x].id+'" tabindex="-1" role="dialog" aria-labelledby="addModalLabel'+data[x].id+'" aria-hidden="true">      '      
                    +'    <div class="modal-dialog modal-dialog-centered" role="document">                                                          '      
                    +'        <div class="modal-content">                                                                                           '      
                    +'            <div class="modal-header">                                                                                        '      
                    +'                <h5 class="modal-title" id="addModalLabel'+data[x].id+'">Новый член команды</h5>                                        '      
                    +'                <button type="button" class="btn-close" data-bs-target="#infogbr_'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Закрыть"></button>                '      
                    +'            </div>                                                                                                            '      
                    +'            <div class="modal-body">                                                                                          '      
                    +'                <div class="col">                                                                     '      
                    +'                    <div class="row">                                                                                         '      
                    +'                        <div class="col">                                                                                     '      
                    +'                            <div class="row">                                                                                 '      
                    +'                                <h5>Фамилия                                                                                   '      
                    +'                            <input type="text"class="registrpole" id= "addsur'+data[x].id+'"   />                                                        '      
                    +'                        </h5>                                                                                                 '      
                    +'                            </div>                                                                                            '      
                    +'                            <div class="row">                                                                                 '      
                    +'                                <h5>Имя                                                                                       '      
                    +'                            <input type="text"class="registrpole" id= "addname'+data[x].id+'"   />                                                        '      
                    +'                        </h5>                                                                                                 '      
                    +'                            </div>                                                                                            '      
                    +'                            <div class="row">                                                                                 '      
                    +'                                <h5>Отчество                                                                                  '      
                    +'                            <input type="text"class="registrpole" id= "addoth'+data[x].id+'"   />                                                        '      
                    +'                        </h5>                                                                                                 '      
                    +'                            </div>                                                                                            '      
                    +'                            <div class="row">                                                                                 '      
                    +'                                <h5>Роль                                                                                      '      
                    +'                            <input type="text"class="registrpole" id= "addrole'+data[x].id+'"   />                                                        '      
                    +'                        </h5>                                                                                                 '      
                    +'                            </div>                                                                                            '      
                    +'                        </div>                                                                                                '      
                    +'                    </div>                                                                                                    '      
                    +'                </div>                                                                                                        '      
                    +'            </div>                                                                                                            '      
                    +'            <div class="modal-footer">                                                                                        '      
                    +'                <button type="button" class="registerbtn" onclick="addPatrol(document.getElementById(\'addsur'+data[x].id+'\').value,document.getElementById(\'addname'+data[x].id+'\').value,document.getElementById(\'addoth'+data[x].id+'\').value, '      
                    +'            '+data[x].id+',document.getElementById(\'addrole'+data[x].id+'\').value)">Добавить</button>     </div>                                                                                                            '      
                    +'        </div>                                                                                                                '      
                    +'    </div>                                                                                                                    '      
                    +'</div>                                                                                                                        ');
        return mod;
    }

    function infoperson(data,x)
    {

        var sp=data[x].fio.split(' ');
        var s=sp[0];
        var n=sp[1];
        var o=sp[2];
        console.log(sp,data[x].id);
        var mod =$('<div class="modal fade" id="infoperson'+data[x].id+'" tabindex="-1" role="dialog" aria-labelledby="infoModalLabel'+data[x].id+'" aria-hidden="true">                                                      '
        +'    <div class="modal-dialog modal-dialog-centered" role="document">                                                                                                                       '
        +'        <div class="modal-content">                                                                                                                                                        '
        +'            <div class="modal-header">                                                                                                                                                     '
        +'               <h5 class="modal-title" id="infoModalLabel'+data[x].id+'">Информация о члене команды</h5>                                                                                   '
        +'                <button type="button" class="btn-close" data-bs-target="#infogbr_'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Закрыть"></button>                '      
        +'            </div>                                                                                                                                                                         '
        +'            <div class="modal-body">                                                                                                                                                       '
        +'                <div class="col">                                                                                                                                                          '
        +'                    <div class="row">                                                                                                                                                      '
        +'                        <div class="col">                                                                                                                                                  '
        +'                            <div class="row">                                                                                                                                              '
        +'                                <h5>Фамилия                                                                                                                                                '
        +'                       <input type="text"class="registrpole" value="'+s+'" readonly />                                                                                                   '
        +'                    </h5>                                                                                                                                                                  '
        +'                            </div>                                                                                                                                                         '
        +'                            <div class="row">                                                                                                                                              '
        +'                                <h5>Имя                                                                                                                                                    '
        +'                       <input type="text"class="registrpole" value="'+n+'" readonly />                                                                                                  '
        +'                    </h5>                                                                                                                                                                  '
        +'                            </div>                                                                                                                                                         '
        +'                            <div class="row">                                                                                                                                              '
        +'                                <h5>Отчество                                                                                                                                               '
        +'                       <input type="text"class="registrpole" value="'+o+'" readonly />                                                                                                  '
        +'                    </h5>                                                                                                                                                                  '
        +'                            </div>                                                                                                                                                         '
        +'                            <div class="row">                                                                                                                                              '
        +'                                <h5>Роль                                                                                                                                                   '
        +'                       <input type="text"class="registrpole" value="'+data[x].role+'" readonly/>                                                                                                   '
        +'                    </h5>                                                                                                                                                                  '
        +'                            </div>                                                                                                                                                         '
        +'                        </div>                                                                                                                                                             '
        +'                    </div>                                                                                                                                                                 '
        +'                </div>                                                                                                                                                                     '
        +'            </div>                                                                                                                                                                         '
        +'            <div class="modal-footer">                                                                                                                                                     '
        +'               <button type="button" class="registerred" data-bs-toggle="modal" data-bs-target="#redperson'+data[x].id+'">Редактировать</button>                                          '
        +'               <button type="button" class="registerdel" data-bs-target="#delperson'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Удалить</button>                          '
        +'            </div>                                                                                                                                                                         '
        +'        </div>                                                                                                                                                                             '
        +'    </div>                                                                                                                                                                                 '
        +'</div>                                                                                                                                                                                     ');
        return mod;
    }

    function redperson(data,x)
    {
            var sp=data[x].fio.split(' ');
            var s=sp[0];
            var n=sp[1];
            var o=sp[2];
            var mod =$('<div class="modal fade" id="redperson'+data[x].id+'" tabindex="-1" role="dialog" aria-labelledby="redpersonm'+data[x].id+'" aria-hidden="true">                                                      '
        +'    <div class="modal-dialog modal-dialog-centered" role="document">                                                                                                                       '
        +'        <div class="modal-content">                                                                                                                                                        '
        +'            <div class="modal-header">                                                                                                                                                     '
        +'               <h5 class="modal-title" id="redpersonm'+data[x].id+'">Информация о члене команды</h5>                                                                                   '
        +'                <button type="button" class="btn-close" data-bs-target="#infoperson'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Закрыть"></button>                '      
        +'            </div>                                                                                                                                                                         '
        +'            <div class="modal-body">                                                                                                                                                       '
        +'                <div class="col">                                                                                                                                                          '
        +'                    <div class="row">                                                                                                                                                      '
        +'                        <div class="col">                                                                                                                                                  '
        +'                            <div class="row">                                                                                                                                              '
        +'                                <h5>Фамилия                                                                                                                                                '
        +'                       <input type="text"class="registrpole" value="'+s+'" id ="surrp'+data[x].id+'"  />                                                                                                   '
        +'                    </h5>                                                                                                                                                                  '
        +'                            </div>                                                                                                                                                         '
        +'                            <div class="row">                                                                                                                                              '
        +'                                <h5>Имя                                                                                                                                                    '
        +'                       <input type="text"class="registrpole" value="'+n+'" id ="namerp'+data[x].id+'"  />                                                                                                  '
        +'                    </h5>                                                                                                                                                                  '
        +'                            </div>                                                                                                                                                         '
        +'                            <div class="row">                                                                                                                                              '
        +'                                <h5>Отчество                                                                                                                                               '
        +'                       <input type="text"class="registrpole" value="'+o+'" id ="othrp'+data[x].id+'" />                                                                                                  '
        +'                    </h5>                                                                                                                                                                  '
        +'                            </div>                                                                                                                                                         '
        +'                            <div class="row">                                                                                                                                              '
        +'                                <h5>Роль                                                                                                                                                   '
        +'                       <input type="text"class="registrpole" value="'+data[x].role+'" id ="rolerp'+data[x].id+'" />                                                                                                   '
        +'                    </h5>                                                                                                                                                                  '
        +'                            </div>                                                                                                                                                         '
        +'                        </div>                                                                                                                                                             '
        +'                    </div>                                                                                                                                                                 '
        +'                </div>                                                                                                                                                                     '
        +'            </div>                                                                                                                                                                         '
        +'            <div class="modal-footer">                                                                                                                                                     '
        +'               <button type="button" style="width:50%" class="registerbtn" data-bs-toggle="modal" onclick="updatepatrol('+data[x].id+',document.getElementById(\'surrp'+data[x].id+'\').value,document.getElementById(\'namerp'+data[x].id+'\').value, '
        +'                   document.getElementById(\'othrp'+data[x].id+'\').value,document.getElementById(\'rolerp'+data[x].id+'\').value)">Сохранить</button>                                    '
        +'               <button type="button" class="registerdel" data-bs-target="#infoperson'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Отмена</button>                          '
        +'            </div>                                                                                                                                                                         '
        +'        </div>                                                                                                                                                                             '
        +'    </div>                                                                                                                                                                                 '
        +'</div>                                                                                                                                                                                     ');
        return mod;
    }


    function redgbrmodal(data,x)
    {

        var sp=data[x].car_resp_pers.split(' ');
        var f=sp[0];
        var i=sp[1];
        var o=sp[2];

      var mod=$('<div class="modal fade" id="redgbr'+data[x].id+'" tabindex="-1" role="dialog" aria-labelledby="redmodalgbr'+data[x].id+'" aria-hidden="true">                         '+ 
        '     <div class="modal-dialog modal-dialog-centered" role="document">                                                                                                      '+ 
        '         <div class="modal-content">                                                                                                                                       '+ 
        '             <div class="modal-header">                                                                                                                                    '+ 
        '                <h5 class="modal-title" id="redmodalgbr'+data[x].id+'">Редактирование ГБР</h5>                                                                             '+ 
        '                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>                                                            '+ 
        '             </div>                                                                                                                                                        '+ 
        '             <div class="modal-body">                                                                                                                                      '+ 
        '                 <div class="col" >                                                                                                                                        '+ 
        '                     <div class="row">                                                                                                                                     '+ 
        '                         <div class="col">                                                                                                                                 '+ 
        '                             <div class="row">                                                                                                                             '+ 
        '                                 <h5>ПЦН                                                                                                                                   '+ 
        '                                 <input type="text" id="pcn'+data[x].id+'" class="registrpole" value='+data[x].pcn_id+'  />                                                                                       '+ 
        '                             </h5>                                                                                                                                         '+ 
        '                             </div>                                                                                                                                        '+ 
        '                             <div class="row">                                                                                                                             '+ 
        '                                 <h5>Гос номер                                                                                                                             '+ 
        '                                 <input type="text" id="number'+data[x].id+'"class="registrpole" value='+data[x].number+'   />                                                                                    '+ 
        '                             </h5>                                                                                                                                         '+ 
        '                             </div>                                                                                                                                        '+ 
        '                             <div class="row">                                                                                                                             '+ 
        '                                 <h5>Цвет                                                                                                                                  '+ 
        '                                 <input type="text" id="color'+data[x].id+'" class="registrpole" value='+data[x].color+' />                                                                                      '+ 
        '                             </h5>                                                                                                                                         '+ 
        '                             </div>                                                                                                                                        '+ 
        '                             <div class="row">                                                                                                                             '+ 
        '                                 <h5>Фамилия капитана                                                                                                                      '+ 
        '                                <input type="text" id="surname'+data[x].id+'" class="registrpole" value='+f+' />                                                                                     '+ 
        '                             </h5>                                                                                                                                         '+ 
        '                             </div>                                                                                                                                        '+ 
        '                             <div class="row">                                                                                                                             '+ 
        '                                 <h5>Имя                                                                                                                                   '+ 
        '                                <input type="text" id="name'+data[x].id+'" class="registrpole" value='+i+' />                                                                                        '+ 
        '                             </h5>                                                                                                                                         '+ 
        '                             </div>                                                                                                                                        '+ 
        '                             <div class="row">                                                                                                                             '+ 
        '                                 <h5>Отчество                                                                                                                              '+ 
        '                                <input type="text" id="oth'+data[x].id+'" class="registrpole" value='+o+' />                                                                                         '+ 
        '                             </h5>                                                                                                                                         '+ 
        '                             </div>                                                                                                                                        '+ 
        '                     </div>                                                                                                                                                '+ 
        '                 </div>                                                                                                                                                    '+ 
        '             </div>                                                                                                                                                        '+ 
        '             <div class="modal-footer">                                                                                                                                    '+ 
        '                 <button type="button" class="registerbtn" data-dismiss="modal" onclick="updateGBR('+data[x].id+','+data[x].car_id+',document.getElementById(\'pcn'+data[x].id+'\').value,   '+ 
        '                   document.getElementById(\'number'+data[x].id+'\').value,document.getElementById(\'color'+data[x].id+'\').value,'+
        '                   document.getElementById(\'surname'+data[x].id+'\').value,document.getElementById(\'name'+data[x].id+'\').value,document.getElementById(\'oth'+data[x].id+'\').value)" style="width:50%">Сохранить</button>                                                                                 '+                                        
        '                <button type="button" class="registerred" data-bs-target="#infogbr_'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Отмена</button>          '+ 
        '             </div>                                                                                                                                                        '+ 
        '         </div>                                                                                                                                                            '+ 
        '     </div>                                                                                                                                                                '+ 
        ' </div>                                                                                                                                                                    ');  
        return mod;
    }


    function delgbrmodal(data,x)
    {
        var mod=$('<div class="modal fade" id="delgbr'+data[x].id+'" aria-hidden="true" aria-labelledby="delgbrm'+data[x].id+'" tabindex="-1">   '+   
            '     <div class="modal-dialog modal-dialog-centered">                                                                                                '+   
            '         <div class="modal-content">                                                                                                                 '+   
            '             <div class="modal-header">                                                                                                              '+   
            '                <h5 class="modal-title" id="delgbrm'+data[x].id+'">Внимание                                                                        '+   
            '                 </h5>                                                                                                                               '+   
            '             </div>                                                                                                                                  '+   
            '            <div class="modal-body">Вы уверены что хотите удалить ГБР ?                                                               '+   
            '             </div>                                                                                                                                  '+   
            '             <div class="modal-footer">                                                                                                              '+   
            '                <button type="button" class="registerdel" onclick="deleteGBR('+data[x].id+')" data-dismiss="modal">Ок                                '+   
            '                 </button>                                                                                                                           '+   
            '                <button class="registerred" data-bs-target="#infogbr_'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Отмена  '+   
            '                 </button>                                                                                                                           '+   
            '             </div>                                                                                                                                  '+   
            '         </div>                                                                                                                                      '+   
            '     </div>                                                                                                                                          '+   
            ' </div>                                                                                                                                              ');  

        return mod;
    }


    function delpersonmodal(data,x)
    {
        var mod=$('<div class="modal fade" id="delperson'+data[x].id+'" aria-hidden="true" aria-labelledby="delpersonm'+data[x].id+'" tabindex="-1">   '+   
            '     <div class="modal-dialog modal-dialog-centered">                                                                                                '+   
            '         <div class="modal-content">                                                                                                                 '+   
            '             <div class="modal-header">                                                                                                              '+   
            '                <h5 class="modal-title" id="delpersonm'+data[x].id+'">Внимание                                                                        '+   
            '                 </h5>                                                                                                                               '+   
            '             </div>                                                                                                                                  '+   
            '            <div class="modal-body">Вы уверены что хотите удалить члена группы ?                                                             '+   
            '             </div>                                                                                                                                  '+   
            '             <div class="modal-footer">                                                                                                              '+   
            '                <button type="button" class="registerdel" onclick="deletepatrol('+data[x].id+')" data-dismiss="modal">Ок                                '+   
            '                 </button>                                                                                                                           '+   
            '                <button class="registerred" data-bs-target="#infoperson'+data[x].id+'" data-bs-toggle="modal" data-bs-dismiss="modal">Отмена  '+   
            '                 </button>                                                                                                                           '+   
            '             </div>                                                                                                                                  '+   
            '         </div>                                                                                                                                      '+   
            '     </div>                                                                                                                                          '+   
            ' </div>                                                                                                                                              ');  

        return mod;
    }


    function create_table()
    {
        $.ajax({
            type: "POST",
            url: '/admingbr/DateFond',
            success: function(data){
                console.log(data)
                if(data != "")
                {
                    Table = JSON.parse(data);
                    create_listTableFond(Table);
                }
                else
                {
                    create_listTableFond(null);
                }
            }
        }); 

        $.ajax({
            type: "POST",
            url: '/admingbr/DateCompany',
            success: function(data){
                console.log(data)
                if(data != "")
                {
                    Table = JSON.parse(data);
                    create_listTableCompany(Table);
                }
                else
                {
                    create_listTableCompany(null);
                }
            }
        });

    }
    function createTeamMemberlistTable(data,id){
        var table = $('#team_table'+id+'');
        var table2=$('#T');
        table.html('');
        var table_head = $('<tr>');
        table_head.append($('<th>').text('ФИО'))
        table_head.append($('<th>').text('Роль'))
        table_head.append($('<th> style="width:25%"').text(''))
        table.append(table_head);
        for(var x in data){
            var tr = $('<tr>');
            tr.append($('<td>').text(data[x].fio));
            tr.append($('<td>').text(data[x].role));
            tr.append($("<td><button class=\"button_1677514707552\" data-bs-toggle=\"modal\" data-bs-target=\"#infoperson"+data[x].id+"\" type=\"button\" >Информация</button>"));
            table.append(tr);
            table2.append(infoperson(data,x));
            table2.append(delpersonmodal(data,x));
            table2.append(redperson(data,x));
        };
    }
    
    function Team_member_table(id)
    {
        $.ajax({
            type: "POST",
            url: '/admingbr/PatrolTeamInfo',
            data:{patrol_id: id},
            success: function(data){
                if(data != "")
                {
                    Table = JSON.parse(data);
                    createTeamMemberlistTable(Table,id);
                }
                else
                {
                    createTeamMemberlistTable(null,id);
                }
            }
        }); 
    }

    function addGBR(f,i,o,pcn,numb,col)
    {
        fion=f+" "+i+" "+o;
        $.ajax({
            type: "POST",
            url: '/admingbr/addGRB',
            data:{pcn_id: pcn,
                  number:numb,
                  color: col,
                  fio: fion
                  }
        }); 
        location.reload();
    }
    function deleteGBR(patrol)
    {
        $.ajax({
            type: "POST",
            url: '/admingbr/deleteGBR',
            data:{patrol_id:patrol}
        }); 
        location.reload();
    }
    function updateGBR(patrol,car,pcn,num,colors,f,i,o)
    {
        fion=f+" "+i+" "+o;
   
        console.log(patrol,car,pcn,num,colors,fion);
        $.ajax({
            type: "POST",
            url: '/admingbr/updateGBR',
            data:{
                patrol_id:patrol,
                car_id:car,
                pcn_id:pcn,
                number:num,
                color:colors,
                car_resp_pers:fion}
        });
        location.reload();

    }

    function addPatrol(f,i,o,patroln,role)
    {

        fion=f+" "+i+" "+o;
        console.log(f,i,o,patroln,role);
        $.ajax({
            type: "POST",
            url: '/admingbr/addTeamMember',
            data:{fio: fion,
                  patrol_id:patroln,
                  role: role}
        }); 
        location.reload();
    }

    function deletepatrol(id)
    {
        $.ajax({
            type: "POST",
            url: '/admingbr/deleteTeamMember',
            data:{team_member_id:id}
        }); 
        location.reload();
    }

    function updatepatrol(id,f,i,o,role)
    {
        fion=f+" "+i+" "+o;
   
        console.log(fion,role);
        $.ajax({
            type: "POST",
            url: '/admingbr/TeamMemberUpdate',
            data:{
                team_member_id:id,
                fio:fion,
                role:role
            }
        });
        location.reload();

    }

