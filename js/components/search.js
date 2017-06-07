'use strict';

const gMapa=(latitud,longitud)=>{
  let mapa=$('#map');
  mapa.removeClass('.none');
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

const imprimirStation=(update)=>{
  $('.container').empty();
  $('.result').empty();
  const section = $("<section class='container2'></section>");
  const divMap=$("<div id='map' class='mapa'></div>");

    let tamano=update.length;
    console.log(tamano);

    for(var i=0;i<tamano;i++){
    const iconM=$('<i class="fa fa-map-o right" aria-hidden="true" id="'+update[i].district.toLowerCase().replace(' ','')+'"></i>');
    const div = $('<div class="details" id="'+update[i].district.toLowerCase().replace(' ','')+'"></div>');
    const parrafo1 = $('<h2>'+ update[i].name +'</h2>');
    const parrafo2= $('<p>'+ update[i].address +'</p>');
    const parrafo3= $('<p>'+ update[i].district +'</p>');

    div.append(iconM);
    div.append(parrafo1);
    div.append(parrafo2);
    div.append(parrafo3);

    section.append(div);
    section.append(divMap);

    iconM.on('click',(e)=>{
      alert('funciona'+(e.target).id+'');
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
      gMapa(lat,lng);
    })

    }

  return $('.result').append(section);
}


const imprimir=(otraLista,stations)=>{
  let stationsImp=[];
  stations.forEach((e)=>{
    let distri=e.district.toLowerCase();
    otraLista.forEach((p)=>{
      if(p==distri){
        stationsImp.push(e);
        console.log(stationsImp);
      }
    });
  });
  console.log(stationsImp);
  imprimirStation(stationsImp);
}


const Search = (update) => {
  const div1 = $("<div class='red'></div>");
  const div2= $("<div class='white'></div>");
  const input = $("<input type='text' placeholder='Ingresa el distrito'>");
  const icon = $('<i class="fa fa-search gray" aria-hidden="true"></i>');
  const div3=$('<div class="result"></div>');

  div2.append(icon);
  div2.append(input);
  div1.append(div2);
  div1.append(div3);

  input.on('keyup',(e)=>{

     if(input.val()!==''){
       let ingreso=$(e.target).val().toLowerCase();
       console.log(ingreso)
       let stations=state.stations;
       let filtrado=filterByDistrict(stations,ingreso);
       console.log(filtrado);
       var otraLista = filtrado.reduce(function(guarda, actual) {
        if(guarda.indexOf(actual) === -1) {
            guarda.push(actual);
        }
        return guarda;
      },[]);
      console.log(otraLista);
      imprimir(otraLista, stations);
    }
  });
      return div1;

    }
