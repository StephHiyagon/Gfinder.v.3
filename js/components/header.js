'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left none" id="back" aria-hidden="true"></i>');
  const divMap=$("<div id='map' class='mapa'></div>");

  header.append(icon);
  header.append(title);
  header.append(divMap);



  return header;
}
