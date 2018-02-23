/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */

// Use the data source URL from lab 1 in this 'ajax' function:
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);



$('button').click(function(){
  var url = $('#url-input').val();
  var lat = $('#lat-input').val();
  var lng = $('#lng-input').val();
  var downloadData = $.ajax(url);
  var parseData =function(data) { var parsed = JSON.parse(data); return parsed;};
  var makeMarkers = function(parsed) { var markers = [];
    for (i = 0; i<parsed.length;i++){
      marker = L.marker([parsed[i][lat],parsed[i][lng]]);
      markers.push(marker);} return markers;};
  var plotMarkers = function(markers) {
    for (i = 0; i<markers.length; i++){
      markers[i].addTo(map);}};
  downloadData.done(function(data) {
    var parsed = parseData(data);
    var markers = makeMarkers(parsed);
    plotMarkers(markers);
      });
});
