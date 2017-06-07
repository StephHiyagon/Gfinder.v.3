'use strict';

const filterByDistrict = (stations,query) => {
  let tam=query.split('').length;
  let distrito=[];
  // let distritoS=[];
  // if(distrito.length==0){
  //   console.log('esta vacio');
  //   distritoS.push(distrito);
  // }else{
  //   if(distritoS.indexOf(distrito)!=-1){
  //     distritoS.push(distrito);
  //   }
  // }

  if(tam==1){
    stations.forEach(function(n){
      let distLetter=n.district.toLowerCase().split('');
      distLetter.forEach(function (m){
        if(m==query){
          let distLetter1=distLetter.join('')
          console.log("coincide "+distLetter1+"!");
          // reRender(distLetter1);
          distrito.push(distLetter1);
        }
      })

    })


  }else{
    stations.forEach(function(n){
      let distLetter=n.district.toLowerCase();
      let distLetter2=n.district.toLowerCase().substr(0,tam);
      if(distLetter2==query){
        console.log("coincide "+distLetter+"!");
        // reRender(distLetter);
        distrito.push(distLetter);
      }

    })


  }
  return distrito;
}
