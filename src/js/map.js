  let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.668858, 37.869488],
    zoom: 13,
    controls: []
  });

  const coords =  [
    [55.674183, 37.858218],
    [55.684438, 37.855377],
    [55.654310, 37.846526],
    [55.661432, 37.879501]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "./img/icons/marker.svg",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init); 