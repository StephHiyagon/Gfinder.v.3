const gMap=(latitud,longitud)=>{
  $('.red').hide();
  $('.fa').show();
  $('.white').hide();
  $('.details').hide();
  let mapa=$('#map');
  // mapa.removeClass('.none');
  console.log("lat:" + latitud + "long: "+ longitud+"'")
  var estacion = {lat: latitud, lng: longitud};
  console.log(estacion);
  var map = new google.maps.Map(document.getElementById("map"),{
    zoom: 18,
		center: estacion
  });
  var marcador = new google.maps.Marker({
    position: estacion,
    map: map,
  });
}


const StationsDetails = (update) => {
  const section = $("<section class='container'></section>");

    const stationsTodo=state.stations;
    // const divMap=$("<div id='map' class='mapa'></div>");
    console.log(stationsTodo);
    let tamano=stationsTodo.length;
    console.log(tamano);

    for(var i=0;i<tamano;i++){
    const div = $('<div class="details" id="'+stationsTodo[i].district.toLowerCase().replace(' ','')+'"></div>');
    const parrafo1 = $('<h2>'+ stationsTodo[i].name +'</h2>');
    const parrafo2= $('<p>'+ stationsTodo[i].address +'</p>');
    const parrafo3= $('<p>'+ stationsTodo[i].district +'</p>');
    const iconM=$('<i class="fa fa-map-o right gray" aria-hidden="true" id="'+stationsTodo[i].district.toLowerCase().replace(' ','')+'"></i>');


    div.append(iconM);
    div.append(parrafo1);
    div.append(parrafo2);
    div.append(parrafo3);
    section.append(div);
    // section.append(divMap);

    iconM.on('click',(e)=>{
      // alert('funciona'+(e.target).id+'');
      let stationM=(e.target).id;
      console.log(stationM);
      let stations=state.stations;
      console.log(stations);

      let mapa=[];
      stations.forEach((e)=>{
        let distri=e.district.toLowerCase().replace(' ','');
        console.log(distri);
        if(distri==stationM){
          mapa.push(e);
         console.log(mapa[0]);
        }
      });
      console.log(mapa[0].lat);
      let lat=mapa[0].lat;
      let lng=mapa[0].long;
      console.log(mapa[0].long);
      gMap(lat,lng);
    })

    }
  return section;
}
