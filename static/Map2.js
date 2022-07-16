// Map
// Global Variables
var dataSet = "RestrictiveCategory"

// event handler to change the global variable
function buttonclick(Category) {
    dataSet = Category,
    legendShown = Category
    console.log(dataSet)
}

// SETTING THE INITAL MAP VIEW AND ATTRIBUTIONS
var map = L.map('map').setView([37.8, -96], 5);
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.attributionControl.addAttribution('Abortion Policies & Statistics &copy; <a href="https://data.guttmacher.org/">Guttmacher Institute</a>');


// SETTING THE BASIC MAP FUNCTIONS (ZOOM, RESET, ETC)
var geojson;

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature});}

// RESET FILL FUNCTION
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();}

// HIGHLIGHT FILL FUNCTION
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 3,
        color: "#FFFFFF",
        dashArray: '',
        // fillOpacity: 1
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
        onEachFeature: onEachFeature,
        buttonclick: buttonclick,
        showLegend: showLegend
        }).addTo(map);
        
})

// INFO BOX POPUP ON HOVER
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    // console.log(props);
    this._div.innerHTML = '<h4>Abortion Access</h4>' +  
    (props ?
        '<b>' + props.State + 
        '</b><br/>' + props.RestrictiveCategory +
        '<li>' + props.AbortionsObtained2020 + ' abortions obtained in 2020</li>' + 
        '<li> Approximately ' + props.WORA2017 + ' women of reproductive age live in ' + props.State + '</li>' + 
        '<li>' + props.AbortionRatePer1k2020 + ' abortions per 1,000 women in the state were obtained in 2020 </li>'+ 
        '</b><br/></b><br/>' + 
        '<strong>Current Policies</strong>' +
        '</b><br/>' + props.CurrentPolicies : 'Hover over a state');
};
info.addTo(map);


// FILL COLORS CONDITIONS FOR RESTRICTIVE CATEGORY
function getColorFill_rc(r) {
    return 	r === "Most Restrictive" ? "#370617" :
        r === "Very Restrictive"  ? "#6a040f" :
        r === "Restrictive"  ? "#9d0208" :
        r === "Some Restrictions/Protections"  ? "#f29479" :
        r === "Protective"   ? "#0096c7" :
        r === "Very Protective"   ? "#0077b6" :
        r === "Most Protective"   ? "#023e8a" : '';
}

// FILL COLORS AND CATEGORIES FOR ABORTIONS OBTAINED IN 2020
function getColorFill_a(a) {
    return a > 100000 ? '#800026' :
        a > 75000  ? '#BD0026' :
        a > 50000  ? '#E31A1C' :
        a > 25000  ? '#FC4E2A' :
        a > 10000   ? '#FD8D3C' :
        a > 5000   ? '#FEB24C' :
        a > 1000   ? '#FED976' : '#FFEDA0';
}

// FILL COLORS DIPLAY IF NOT FOUND (WHITE)
function getColorFill_na(na) {
    return na > 100000 ? '#FFFFFF' :
        na > 75000  ? '#FFFFFF' :
        na > 50000  ? '#FFFFFF' :
        na > 25000  ? '#FFFFFF' :
        na > 10000   ? '#FFFFFF' :
        na > 5000   ? '#FFFFFF' :
        na > 1000   ? '#FFFFFF' : '#FFFFFF';
}

// FILL COLORS AND CATEGORIES FOR ABORTION RATE
function getColorFill_ar(ar) {
    return ar > 25  ? '#264653' :
           ar > 15  ? '#2A9D8F' :
           ar > 10  ? '#E9C46A' :
           ar > 5   ? '#F4A261' :
           ar > 1   ? '#E76F51' :
           ar > 0   ? '#862912' :
                      '#FFFFFF';
}

// FILL COLORS DISPLAY FOR RESTRICTIVE CATEGORY
function style(statesData) {
 
    // console.log(dataSet)
    if (dataSet == "RestrictiveCategory") {
        return {
            fillColor: getColorFill_rc(statesData.properties.RestrictiveCategory),
            weight: 1,
            opacity: 0.9,
            color: "#FFFFFF",
            dashArray: '0',
            fillOpacity: 1,
        }}
    else if (dataSet == "AbortionsObtained2020") {
        return {
            fillColor: getColorFill_a(statesData.properties.AbortionsObtained2020),
            weight: 1,
            opacity: 0.9,
            color: "#FFFFFF",
            dashArray: '0',
            fillOpacity: 1,
        }}
    else if (dataSet == "AbortionRateper1k2020") {
        return {
            fillColor: getColorFill_ar(statesData.properties.AbortionRatePer1k2020),
            weight: 1,
            opacity: 0.9,
            color: "#FFFFFF",
            dashArray: '0',
            fillOpacity: 1,
        }}
    else return {
            fillColor: getColorFill_na(statesData.properties.AbortionRatePer1k2020),
            weight: 1,
            opacity: 0.9,
            color: "#FFFFFF",
            dashArray: '0',
            fillOpacity: 1,
    }

}

// pass param for the button; use global variable or store 
// change the value of the var or use the global variable, call id of button, depending on button: If statements, if onclick = Restr.. or ABortionCount/... 


// LEGEND
// var showLegend = L.control({position: 'bottomleft'});
function showLegend(map) {
var legendShown = L.control({position: 'bottomleft'}).buttonclick(function (dataSet) {
    if (dataSet == "RestrictiveCategory"){
        map.removeControl(legendShown);
        legendShown = rcLegend;
        rcLegend.addTo(map);
    }
    else if (dataSet == "AbortionsObtained2020") {
        map.removeControl(legendShown);
        legendShown = aLegend;
        aLegend.addTo(map);
    }
    else if (dataSet == "AbortionsPer1k2020") {
        map.removeControl(legendShown);
        legendShown = arLegend;
        arLegend.addTo(map);
    }
    legendShown.addTo(map)
    })
    }

// RESTRICTIVE CATEGORY LEGEND
var rcLegend = L.control({position: 'bottomleft'});
    rcLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
                labels=['<strong>Restrictive Categories</strong>'],
                categories = ["Most Restrictive", "Very Restrictive", "Restrictive", "Some Restrictions/Protections", "Protective", "Very Protective", "Most Protective"];
         
        for (var i = 0; i < categories.length; i++) {
            div.innerHTML += 
             '<br><i class="circle" style="background:' + getColorFill_rc(categories[i]) + '"></i>' + (categories[i] ? categories[i] : '+');
        }
        return div;
    };
    rcLegend.addTo(map);

// ABORTIONS OBTAINED IN 2020 LEGEND
var aLegend = L.control({position: 'bottomleft'});
    aLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
                labels=['<strong>Abortions Obtained in 2020</strong>'],
                categories = [100000, 75000, 50000, 25000, 10000, 5000, 1000];
            
        for (var i = 0; i < categories.length; i++) {labels 
            div.innerHTML += 
            '<br><i class="circle" style="background:' + getColorFill_a(categories[i]) + '"></i> > ' + (categories[i].toLocaleString("en-US") ? categories[i].toLocaleString("en-US") : '+');
        }
        return div;
    };
    aLegend.addTo(map);

// ABORTION RATE PER 1,000 WOMEN LEGEND
var arLegend = L.control({position: 'bottomleft'});
    arLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
                labels=['<strong>Abortion Rate per 1,000 Women in 2020</strong>'],
                categories = [25, 15, 10, 5, 1, 0];
            
        for (var i = 0; i < categories.length; i++) {
            div.innerHTML += 
            '<br><i class="circle" style="background:' + getColorFill_ar(categories[i]) + '"></i> ' + (categories[i]);
        }
        return div;
    };
    arLegend.addTo(map);







