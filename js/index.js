'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  wrapper.append(Search(_ => render(root)));
  wrapper.append(StationsDetails(_ => render(root)));
  // wrapper.append(Gmap(_ => render(root)));
  root.append(wrapper);
}

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {

  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);

    $('#back').on('click',()=>{
      console.log("volver");
      render(root);
    })
  });

});
