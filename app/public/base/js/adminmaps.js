var myMap,
myPlacemark,
polygon;
ymaps.ready(init); 
//инициализация карты

function init()
{
    myMap = new ymaps.Map("map",{
        center: [48.78,44.75],
        zoom:13,
        controls: ['fullscreenControl']
    },
    {
        suppressMapOpenBlock: true
    });  
 var secondButton = new ymaps.control.Button({
        data: {
            // Зададим текст и иконку для кнопки.
            content: "Зоны",
            // Иконка имеет размер 16х16 пикселей.
        },
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [28, 150, 178],
            float: 'none',
             position: {
                left:'95%',
                top: '50px'
                }
        }
    });
    myMap.controls.add(secondButton);

//Ввод в коллекцию всех полигонов данного пользователя, без вывода на экран
MapCollection = new ymaps.GeoObjectCollection();

function printPolyfunc()
{
    myMap.geoObjects.remove(MapCollection);
    MapCollection.removeAll();
    <?php foreach($maps as $map):?>
        newmap = new ymaps.GeoObject(
        {
            geometry:
            {
                type: "Polygon",
                coordinates:<?php echo("$map->points");?>
            },
            properties:
            {
                hintContent:'<?php echo("$map->appellation");?>',
                id:<?php echo("$map->id");?>
            },
        },{
                    //fillColor: '#FF0000',
                    opacity: 0.8
                });
        //newmap.options._options.fillColor="FFFFFFFF";
        MapCollection.add(newmap);
    <?php endforeach;?>
    MapCollection.options.set('visible',false);
    myMap.geoObjects.add(MapCollection);
}
printPolyfunc();//при запуске страницы

document.getElementById('printPoly').onclick = function()
{
    MapCollection.options.set('visible',true);

}
document.getElementById('hidePoly').onclick = function()
{
    MapCollection.options.set('visible',false);
}

//добавление нового полигона
document.getElementById('addEditPoly').onclick =function()
{
    MapCollection.options.set('visible',true);

    myMap.geoObjects.remove(polygon);
    polygon = new ymaps.GeoObject(
    {
        geometry:{
            type: "Polygon",
            coordinates:[]
        }
    },
    {
        editorDrawingCursor: "crosshair"
    },{

        opacity: 0.8
    });
    MapCollection.add(polygon);
    polygon.editor.startDrawing();
    return false;
}

var polyID=0;
var polyObject;
//выбор полигона
MapCollection.events.add('click',function(obj){

    if(obj.get("target").properties._data.id !==polyID)
    {
        if(polyID !==0)
        {
            closepolyinfo();
        }
        polyID= obj.get("target").properties._data.id;
        polyObject=obj.get("target");
        MapCollection.remove(polyObject);
        polyObject.options._cache.fillColor="00ffffff";
        polyObject.options._options.fillColor="00ffffff";
        MapCollection.add(polyObject);
    }
});

function closepolyinfo()
{
 if(polyID !==0)
 {
    MapCollection.remove(polyObject);
    if(tempPoly !== undefined)
    {
        polyObject.geometry.setCoordinates(tempPoly);
    }
    polyObject.options._cache.fillColor="0066ff99";
    polyObject.options._options.fillColor="0066ff99";
    MapCollection.add(polyObject);
    polyID=0;
    polyObject=undefined;
}
return false; 
}
document.getElementById('CloseInfoPoly').onclick =function()
{
    closepolyinfo();
}
document.getElementById('CancelPoly').onclick =function()
{

    if(undefined !==  polygon)
    {
        if(polygon.editor.state._data.editing === true)
        {
            polygon.editor.stopEditing();
            MapCollection.remove(polygon);
        }
    }
}
document.getElementById('SavePoly').onclick =function()
{
    SavePoly();
}

document.getElementById('offCanvas_close').onclick=function()
{
    closeAutoInform();
}
function SavePoly()
{
    polygon.editor.stopEditing();
    $.ajax({
        type: "POST",
        data:{appellation: document.getElementById('map_appellation').value, 
        points:JSON.stringify(polygon.geometry.getCoordinates())},
        url: '/adminmaps/savePoly'
    });
    polygon = undefined;
    return false;
}
function map_appellation_ent(e)
{
    if(e.keyCode ===13)
    {
        SavePoly();
    }
}
//Изменение полигона
var tempPoly;
document.getElementById('EditPoly').onclick =function()
{
    if(polyID !== 0)
    {
        tempPoly = polyObject.geometry.getCoordinates();
        polyObject.editor.startDrawing();
    }
    return false;
}
//Обновить полигон
document.getElementById('UpdatePoly').onclick =function()
{
    if(polyID !== 0)
    {
        polyObject.editor.stopEditing();
        $.ajax({
        type: "POST",
        data:{map_id: polyID,appellation: polyObject.properties._data.hintContent, 
            points:JSON.stringify(polyObject.geometry.getCoordinates())},
        url: '/adminmaps/updateMap'
        });
        tempPoly=undefined;
        closepolyinfo();
    }

    return false;
}
document.getElementById('DeletePoly').onclick =function()
{
    if(polyID !== 0)
    {
        tempPoly=undefined;
        polyObject.editor.stopEditing();
        $.ajax({
        type: "POST",
        data:{map_id: polyID},
        url: '/adminmaps/deleteMap'
        });
        MapCollection.remove(polyObject);
        polyID=0;
        polyObject=undefined;
    }

    return false;
}
//autoCollection = new ymaps.GeoObjectCollection();
autoObjManager = new ymaps.ObjectManager({clusterize: true});
//patrolCollection = new ymaps.GeoObjectCollection();
patrolObjManager= new ymaps.ObjectManager({clusterize: true});
patrolObj_notbusy= new ymaps.ObjectManager();
routeCollection = new ymaps.GeoObjectCollection();

//Выбор автомобиля
var autoId=0;
var autoPlacemarkCollor='islands#grayIcon';
var myOffcanvas= document.getElementById('offcanvasScrolling');
var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
autoObjManager.events.add('click',function(obj){

    if(autoId !== 0)
    {
        closeAutoInform();
    }
    if(patrolId !==0)
    {
        closePatolInform();
    }
    autoId=obj.get('objectId');
    autoPlacemarkCollor=autoObjManager.objects.getById(autoId).options.preset;
    autoObjManager.objects.setObjectOptions(autoId,{
        preset: 'islands#blackIcon'
        //Размер метки нельзя изменить, если не поставить изображение
    });
    document.getElementById("print_auto_name").value = autoObjManager.objects.getById(autoId).properties.nameauto;
    document.getElementById("print_auto_PCN_name").value = autoObjManager.objects.getById(autoId).properties.user_id;
    document.getElementById("print_auto_status").value = autoObjManager.objects.getById(autoId).properties.status;
    document.getElementById("print_auto_inzone").value = autoObjManager.objects.getById(autoId).properties.inzone;
    print_auto_info();
    
    bsOffcanvas.show();
    

});

function print_auto_info()
{
    document.getElementById("print_auto_lat").value = autoObjManager.objects.getById(autoId).geometry.coordinates[0];
    document.getElementById("print_auto_lon").value = autoObjManager.objects.getById(autoId).geometry.coordinates[1];
}


function closeAutoInform()
{
    autoObjManager.objects.setObjectOptions(autoId,{
        preset: autoPlacemarkCollor
    })
    autoPlacemarkCollor='islands#grayIcon';
    autoId=0;
    document.getElementById("print_auto_name").value = "";
    document.getElementById("print_auto_PCN_name").value="";
    document.getElementById("print_auto_status").value="";
    document.getElementById("print_auto_inzone").value="";
    document.getElementById("print_auto_lat").value ="";
    document.getElementById("print_auto_lon").value ="";
}

//Выбор патруля
var patrolId=0;
var patrolPlacemarkCollor='islands#grayIcon';
patrolObjManager.events.add('click',function(obj){
    if(autoId != 0)
    {
        closeAutoInform();
    }
    if(patrolId != 0)
    {
        closePatolInform();
    }
    patrolId=obj.get('objectId');
    patrolPlacemarkCollor=patrolObjManager.objects.getById(patrolId).options.preset;
    patrolObjManager.objects.setObjectOptions(patrolId,{
        preset: 'islands#blackDotIcon'
        //Размер метки нельзя изменить, если не поставить изображение
    })
});

function closePatolInform()
{
    patrolObjManager.objects.setObjectOptions(patrolId,{
       preset: patrolPlacemarkCollor
   })
    patrolId=0;
}

var autotoclosestPatrolMas = [];
//удаление ближайшего патруля
function deleteRoute_filter(obj)
{
    if(0 !== patrolId && obj.id != patrolId)
    {
        return obj;
    }
    else if (0!== autoId &&obj.id != autoId)
    {
        return obj;
    }
    else
    {
        console.log(patrolObjManager.objects.getById(obj.clPatrol).properties.busyStatus);
        patrolObjManager.objects.getById(obj.clPatrol).properties.busyStatus = 0;
        $.ajax({
            type: "POST",
            data:{patrol_id: obj.clPatrol,busy_Status: 0, busy_type:0},
            url: '/adminmaps/updateRoute'
        });
        return false;
    }
}

document.getElementById('deleteRoute').onclick=function()
{
    if(0 !== patrolId || 0!== autoId)
    {
        autotoclosestPatrolMas = autotoclosestPatrolMas.filter(deleteRoute_filter);
        console.log(autotoclosestPatrolMas);
        updateMapRoute();
    }
}

//выбор ближайшего патруля
document.getElementById('closestPatrol').onclick =function()
{
    if(autoId !==0 || patrolId !==0)
    {
        var numclosestPatrol = document.getElementById('NumClosestPatrol').value;
        //var finded = autotoclosestPatrolMas.findIndex(obj=> obj.clPatrol === element.id);
        for (var i = numclosestPatrol-1; i >= 0; i--) 
        {
            buildingclosestRoute();
        }
        
    }
}


/*  ближайшие в массиве autotoclosestPatrolMas содержатся значения: id машины - id назначенного патруля
    далее идёт построение маршрутов от координат машины до координат назначенного патруля
    Если же id патруля = 0, то не строим маршрут
    */
    var filteredPatrolObjManager = new ymaps.ObjectManager();
    function buildingclosestRoute() 
    {
        if(patrolObjManager.objects.getLength() >0 )
        {
            var autotoclosestObj;
            filteredPatrolObjManager.removeAll();
            if(patrolId !==0)
            {
                var autotoClose = patrolObjManager.objects.getById(patrolId);
                patrolObjManager.objects.getById(patrolId).properties.busyStatus=-1; /* Если сам патруль под атакой, то -1*/
                $.ajax({
                    type: "POST",
                    data:{patrol_id: patrolId,busy_Status: -1, busy_type:0},
                    url: '/adminmaps/updateRoute'
                }); 
                autotoclosestObj = {id: patrolId, clPatrol: 0, busy_type: 1}; //патруль
            }
            else
            {
                var autotoClose = autoObjManager.objects.getById(autoId);

                autotoclosestObj = {id: autoId, clPatrol: 0, busy_type: 0}; //автомобиль
            }
            var autoCoord = autotoClose.geometry.coordinates;
            /*Выборка незанятых*/
            patrolObjManager.setFilter(function(obj){ 
                if(0 === obj.properties.busyStatus)
                {
                    filteredPatrolObjManager.add(obj);
                }
                return true;
            });
            if(filteredPatrolObjManager.objects.getLength() ===0)
            {
                return;
            }

            var closestPatrol = ymaps.geoQuery(filteredPatrolObjManager.objects).getClosestTo(autoCoord);
            if(closestPatrol.properties.get('id') >0)
            {
                autotoclosestPatrolMas.push(autotoclosestObj);
            }
            else
            {
                return false;
            }
            if(patrolId !==0)
            {
                patrolObjManager.objects.getById(closestPatrol.properties.get('id')).properties.busyStatus = patrolId;
                $.ajax({
                    type: "POST",
                    data:{patrol_id: closestPatrol.properties.get('id'),busy_Status: patrolId, busy_type:1},
                    url: '/adminmaps/updateRoute'
                }); 
            }
            else
            {
                patrolObjManager.objects.getById(closestPatrol.properties.get('id')).properties.busyStatus = autoId;
                $.ajax({
                    type: "POST",
                    data:{patrol_id: closestPatrol.properties.get('id'),busy_Status: autoId, busy_type:0},
                    url: '/adminmaps/updateRoute'
                }); 
            }
            autotoclosestPatrolMas[autotoclosestPatrolMas.length-1].clPatrol =closestPatrol.properties.get('id');
            updateMapRoute();
        }

    }

    function updateMapRoute()
    {
        if(patrolObjManager.objects.getLength() >0)
        {
            myMap.geoObjects.remove(routeCollection);
            routeCollection.removeAll();
            for(var i =0; i<autotoclosestPatrolMas.length; i++)
            {

                if(autotoclosestPatrolMas[i].id != 0 && autotoclosestPatrolMas[i].clPatrol !=0)
                {
                    if(autotoclosestPatrolMas[i].busy_type === 1)
                    {
                        var autotoClose = patrolObjManager.objects.getById(autotoclosestPatrolMas[i].id);
                    }
                    else
                    {
                        var autotoClose = autoObjManager.objects.getById(autotoclosestPatrolMas[i].id);
                    }
                    var autoCoord = autotoClose.geometry.coordinates;

                    var closestPatrol = patrolObjManager.objects.getById(autotoclosestPatrolMas[i].clPatrol);
                    var patrolCoord = closestPatrol.geometry.coordinates;

                    ////Создание маршрутов тарифицированно
                    var multiRoute = new ymaps.multiRouter.MultiRoute(
                    {
                        referencePoints: [autoCoord,
                        patrolCoord],
                        params: {
                            avoidTrafficJams: true
                        }
                    },
                    {
                        wayPointVisible: false});
                    routeCollection.add(multiRoute);
                }
            }
            myMap.geoObjects.add(routeCollection);
        }
    }

//Построение маршрута к ближайшему патрулю
//Изменение статуса патруля
function patrolWork(element)
{
    var presetColor='islands#greyDotIcon';
    MapCollection.each(function(poly){
        if(true===poly.geometry.contains([element.lat,element.lon]))
        {
            if('DANGER'===element.status)
            {

                presetColor='islands#redDotIcon';
                $.ajax({
                    type: "POST",
                    data:{patrol_id: element.id,busy_Status: -1, busy_type:0},
                    url: '/adminmaps/updateRoute'
                });

            }
            else if('OK' === element.status)
            {
                presetColor='islands#blueDotIcon';
            }

            if('online'!== element.inzone)
            {
                $.ajax({
                  type: "POST",
                  data:{patrol_id: element.id,patrol_inzone: 'online'},
                  url: '/adminmaps/patrolexitFromMap'
              }); 
            }
        }

    });
    /*нужно ли нам менять статус на офлайн или устройство само будет сообщать об этом? Или изменять статус при отсутствии сигнала более 1 минуты?*/
    if('islands#greyDotIcon'===presetColor)
    {

        if('offline' !== element.inzone)
        {
           $.ajax({
              type: "POST",
              data:{patrol_id: element.id,patrol_inzone:'offline'},
              url: '/adminmaps/patrolexitFromMap'
          }); 
       }
       if('DANGER'===element.status)
       {
        presetColor='islands#orangeDotIcon';
        if(-1 !== element.busy)
        {
            $.ajax({
                type: "POST",
                data:{patrol_id: element.id,busy_Status: -1, busy_type:0},
                url: '/adminmaps/updateRoute'
            });
        }
    }
}
return presetColor;
}


//Изменение статуса автомобиля
function autoWork(element)
{
    var presetColor='islands#greyIcon';
    MapCollection.each(function(poly){
        if(true===poly.geometry.contains([element.lat,element.lon]))
        {
            if('DANGER'===element.status)
            {
                presetColor='islands#redIcon';
            }
            else if('OK' === element.status)
            {
                presetColor='islands#greenIcon';
            }
            if('online'!== element.inzone)
            {
                $.ajax({
                  type: "POST",
                  data:{auto_id: element.id,auto_inzone: 'online'},
                  url: '/adminmaps/exitFromMap'
              }); 
            }
        }

    });
    /*нужно ли нам менять статус на офлайн или устройство само будет сообщать об этом? Или изменять статус при отсутствии сигнала более 1 минуты?*/
    if('islands#greyIcon'===presetColor)
    {
        if('offline' !== element.inzone)
        {
           $.ajax({
              type: "POST",
              data:{auto_id: element.id,auto_inzone:'offline'},
              url: '/adminmaps/exitFromMap'
          }); 
       }
       if('DANGER'===element.status)
       {
        presetColor='islands#orangeIcon';
    }
}
return presetColor;
}

//вывод всех машин из бд
function printauto(autoMas)
{

    for(const element of autoMas)
    {
        if(autoObjManager.getObjectState(element.id).found)
        {
            var object = autoObjManager.objects.getById(element.id);
            object.geometry.coordinates = [element.lat,element.lon];
            if('islands#blackIcon' !==object.options.preset)
            {
                object.options.preset= autoWork(element);
            }
        }
        else
        {
            presetColor= autoWork(element);
            autoObjManager.add({
                type:'Feature',
                id: element.id,
                geometry:{
                    type:'Point',
                    coordinates: [element.lat,element.lon]
                },
                properties:{
                    id: element.id,
                    nameauto: element.nameauto,
                    user_id: element.user_id,
                    status:element.status,
                    inzone:element.inzone

                },
                options:{
                    preset: presetColor,

                }
            });
            
        }

    }
    myMap.geoObjects.add(autoObjManager); 

}


function busyFromBD(element)
{
    //console.log(element);
    var finded = autotoclosestPatrolMas.findIndex(obj=> obj.clPatrol === element.id);
    if(element.busy > 0)
    {
        if(-1 === finded)
        {
            autotoclosestObj = {id: element.busy, clPatrol: element.id, busy_type:element.busy_type};
            autotoclosestPatrolMas.push(autotoclosestObj);
        }

    }
    else
    {
        if(-1 !== finded)
        {
           autotoclosestPatrolMas.splice(finded,1);
           patrolObjManager.objects.getById(element.id).properties.busyStatus = 0;
           updateMapRoute();
       }
   }

}

function printPatrol(patrolMas)
{
    for(const element of patrolMas)
    {
        if(patrolObjManager.getObjectState(element.id).found)
        {
            var patrolObject = patrolObjManager.objects.getById(element.id);
            patrolObject.geometry.coordinates = [element.lat,element.lon];
            if('islands#blackDotIcon' !==patrolObject.options.preset)
            {
                patrolObject.options.preset=patrolWork(element);
            }
        }
        else
        {
            presetColor= patrolWork(element);
            var patrolObj=({
                type:'Feature',
                id: element.id,
                geometry:{
                    type:'Point',
                    coordinates: [element.lat,element.lon]
                },
                properties:{
                    id: element.id,
                    busyStatus: element.busy,
                    busy_type: element.busy_type,

                },
                options:{
                    preset: presetColor
                }
            });
            patrolObjManager.add(patrolObj);

        }
        busyFromBD(element);  
    }
    myMap.geoObjects.add(patrolObjManager); 
    if(autotoclosestPatrolMas.length >0)
    {
        updateMapRoute();   
    }
}
function showAuto() {
    $.ajax({
      type: "POST",
      url: '/adminmaps/updateAuto',
      success: function(data)
      {
        if(data != "")
        {
            autoMas = JSON.parse(data);
            printauto(autoMas);
        }
    }
}); 
}
function showPatrol() {
   $.ajax({
      type: "POST",
      url: '/adminmaps/updatePatrol',
      success: function(data)
      {
        if(data != "")
        {
            patrolMas = JSON.parse(data);
            printPatrol(patrolMas);
        }
    }
}); 
}
function print_info()
{
    if(autoId !== 0)
    {
        print_auto_info();
    }

}
function start()
{
    showAuto();
    showPatrol();
    print_info();
}
    start();// первая итерация
    setInterval(start,10000);
}

</script>