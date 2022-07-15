// Map


// SETTING THE INITAL MAP VIEW AND ATTRIBUTIONS
var map = L.map('map').setView([37.8, -96], 4);
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.attributionControl.addAttribution('Abortion Policies & Statistics &copy; <a href="https://data.guttmacher.org/">Guttmacher Institute</a>');



// SETTING THE BASIC MAP FUNCTIONS (ZOOM, RESET, ETC)
var geojson;

function resetHighlight(e) {
geojson.resetStyle(e.target);
info.update();}

function zoomToFeature(e) {
map.fitBounds(e.target.getBounds());}

function onEachFeature(feature, layer) {
layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature});}

// HIGHLIGHT FILL FUNCTION
function highlightFeature(e) {
var layer = e.target;
layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 1
});
if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
}
info.update(layer.feature.properties);
}


let headers = { 
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

// 
d3.json("http://127.0.0.1:5000/api/data").then((statesData) => {
    console.log(statesData);
    geojson = L.geoJson(statesData, {
        style: style,
        onEachFeature: onEachFeature
        }).addTo(map);
        
})


// NEED A FUNCTION FOR THE DIFFERENT VIEWS OF THE MAP

// VIEW FOR NUMBER OF ABORTIONS IN 2020
// control that shows state info on HOVER
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    console.log(props);
    this._div.innerHTML = '<h4>Abortion Access</h4>' +  (props ?
        '<b>' + props.data[0].State + 
            '</b><br/>' + props.data[0].RestrictiveCategory + 
            '<li>' + props.data[0].AbortionsObtained2020.toLocaleString("en-US") + ' abortions obtained in 2020</li>' +
            '<li>' + "Approximately " + props.data[0].AppxWORAcount + " women of reproductive age live in " + props.data[0].name + "</li>" + 
            "</b><br/></b><br/>" + "<strong>Current Policies</strong>" +
            '</b><br/>' + props.data[0].CurrentPolicies : 'Hover over a state');
};

info.addTo(map);

// FILL COLORS AND CATEGORIES FOR ABORTIONS IN 2020
function getColorFill_abcount(ab) {
    return ab > 100000 ? '#800026' :
        ab > 75000  ? '#BD0026' :
        ab > 50000  ? '#E31A1C' :
        ab > 25000  ? '#FC4E2A' :
        ab > 10000   ? '#FD8D3C' :
        ab > 5000   ? '#FEB24C' :
        ab > 1000   ? '#FED976' : '#FFEDA0';
}

// FILL COLORS FOR RESTRICTIVE CATEGORY
function getColorFill_rcat(ract) {
    return 	rcat === "Most Restrictive" ? "#404040" :
        rcat === "Very Restrictive"  ? "#686868" :
        rcat === "Restrictive"  ? "#a0a0a0" :
        rcat === "Some Restrictions/Protections"  ? "#bebebe" :
        rcat === "Protective"   ? "#dcdcdc" :
        rcat === "Very Protective"   ? "#f8f8f8" :
        rcat === "Most Protective"   ? "#FFFFFF" : '#ff0000';
}

// BORDER COLOR BASED ON RESTRICTVE CATEGORY
function getColorBorder_rc(rc) {
    return 	rc === "Most Restrictive" ? "#404040" :
        rc === "Very Restrictive"  ? "#686868" :
        rc === "Restrictive"  ? "#a0a0a0" :
        rc === "Some Restrictions/Protections"  ? "#bebebe" :
        rc === "Protective"   ? "#dcdcdc" :
        rc === "Very Protective"   ? "#f8f8f8" :
        rc === "Most Protective"   ? "#FFFFFF" : '#ff0000';
}

// FILL COLORS FOR ABORTIONS IN 2020 VIEW
function style(feature) {
    return {
        weight: 1,
        opacity: 0.9,
        // color: getColorBorder_rc(feature.properties.RestrictiveCategory),
        color: "#FFFFFF",
        dashArray: '0',
        fillOpacity: 1,
        fillColor: getColorFill_abcount(feature.properties.abortions2020)
    };
}

// FILL COLORS FOR RESTRICTIVE CATEGORY VIEW
function style_rc(feature) {
return {
    weight: 1,
    opacity: 0.9,
    // color: getColorBorder_rc(feature.properties.RestrictiveCategory),
    color: "#FFFFFF",
    dashArray: '0',
    fillOpacity: 1,
    fillColor: getColorFill_rcat(feature.properties.RestrictiveCategory)
};
}


// LEGEND FOR ABORTIONS IN 2020 VIEW
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    var grades = [0, 1000, 5000, 10000, 25000, 50000, 75000, 100000];
    var labels = ["<strong>Abortions Obtained in 2020</strong>"];
    var from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColorFill_abcount(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);

// d3.json("/table").then((data)=>{
// console.log(data)
// }); 
