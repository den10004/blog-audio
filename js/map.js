ymaps.ready(init);

function init() {
  const coordsKazan = [55.774897, 49.20451];
  const coordsNovosibirsk = [55.027237, 82.966504];

  const map1 = new ymaps.Map("map1", {
    center: coordsKazan,
    zoom: 15,
    controls: [],
  });

  const map2 = new ymaps.Map("map2", {
    center: coordsNovosibirsk,
    zoom: 15,
    controls: [],
  });

  const customPlacemark1 = new ymaps.Placemark(
    coordsKazan,
    {
      hintContent: "LIMAUDIO",
      balloonContent: "г. Казань, ул. Бухарская, д. 32 к2",
    },
    {
      preset: "islands#redDotIcon",
    }
  );

  const customPlacemark2 = new ymaps.Placemark(
    coordsNovosibirsk,
    {
      hintContent: "LIMAUDIO",
      balloonContent: "г. Новосибирск, ул. Гаранина, д. 15",
    },
    {
      preset: "islands#redDotIcon",
    }
  );

  map1.events.add("contextmenu", function (e) {
    e.preventDefault(); // Предотвращаем открытие контекстного меню
  });

  // Отключаем маршрутизацию и сервисы такси
  map1.options.set("yandexMapDisablePoiInteractivity", true);

  map1.geoObjects.add(customPlacemark1);
  map2.geoObjects.add(customPlacemark2);
}

function showMap(mapNumber) {
  document.querySelectorAll(".map-container").forEach((container) => {
    container.classList.remove("active");
  });
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(`map${mapNumber}`).classList.add("active");
  document
    .querySelector(`.tab-button:nth-child(${mapNumber})`)
    .classList.add("active");
}
