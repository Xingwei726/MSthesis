var margin = { top: 150, right: 40, bottom: 350, left: 50 },
    width2 = 1440 - margin.left - margin.right,
    height2 = 2000 - margin.top - margin.bottom;
    
var size = 100;
var groupSpacing = 5;
var cellSpacing = 5;

// var margin = { top: 150, right: 40, bottom: 350, left: 50 },
var width4 = 650 - margin.left - margin.right,
    height4 = 800 - margin.top - margin.bottom;

var width5 = 700 - margin.left - margin.right,
    height5 = 750 - margin.top - margin.bottom;



// map icon on the front page
d3.xml("./images/Ivory_Coast.svg")
  .then(data => {
    d3.select("#svg-container").node().append(data.documentElement)
  });

// mapbox setup
mapboxgl.accessToken = "pk.eyJ1IjoiaHVhbng0MjkiLCJhIjoiY2szMzRzNHpqMGpiZDNib3EzbGgweHR0eSJ9.FbzMgwMQ7oL8uqZBSJqF2A";
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/huanx429/ck8ajd50t14781ipfvhxa6lxs',
    // style:'mapbox://styles/huanx429/ck49emtl80e4t1colqdqm8hol',
    center: [30.962501, 6.392383],
    zoom: 2,
    bearing: 0,
    pitch: 0
});

map.on('load', function() {
    map.addLayer({ 
      'id': 'countries',
      'source': {
        'type': 'vector',
        'url': 'mapbox://byfrost-articles.74qv0xp0'
      },
      'source-layer': 'ne_10m_admin_0_countries-76t9ly',
      'type': 'fill',
      'paint': {
        'fill-color': 'tomato',
        'fill-opacity':0.3
        // 'fill-outline-color': '#000000'
      }
    });
      
    map.setFilter('countries', ['in', 'ADM0_A3_IS'].concat(['CIV']));
});

map.scrollZoom.disable();

//scroll points & coordinates
var section = {
    'section1': {
        bearing: 0,
        center: [30.962501, 6.392383],//lng, lat
        zoom: 2,
        pitch: 0
    },
    'section2': {
        duration: 6000,
        center: [-5.336393, 7.781411],
        bearing: 0,
        zoom: 6,
        pitch: 0
    },
    'section3': {
        bearing: 0,
        center: [-5.336393, 7.781411],
        zoom: 6,
        // speed: 0.5,
        // pitch: 0
    },
    'section4': {
        bearing: 0,
        center: [30.962501, 6.392383],
        zoom: 2,
        speed: 0.5,
        pitch: 0
    }
};

//scroll setup
window.onscroll = function () {
    var chapterNames = Object.keys(section);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

//map setup
var activeChapterName = 'section1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;
    map.flyTo(section[chapterName]);
    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');
    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// Create 2 datasets
var data1 = [
   {year: 1991, gdp: 10.4926},
   {year: 1992, gdp: 11.153},
   {year: 1993, gdp: 11.0458},
   {year: 1994, gdp: 8.3136},
   {year: 1995, gdp: 11.0001},
   {year: 1996, gdp: 12.1392},
   {year: 1997, gdp: 11.7221},
   {year: 1998, gdp: 12.612},
   {year: 1999, gdp: 12.3766},
   {year: 2000, gdp: 10.717},
   {year: 2001, gdp: 11.1926},
   {year: 2002, gdp: 12.3469},
   {year: 2003, gdp: 15.3066},
   {year: 2004, gdp: 16.5544},
   {year: 2005, gdp: 17.0849},
   {year: 2006, gdp: 17.8009},
   {year: 2007, gdp: 20.3436},
   {year: 2008, gdp: 24.2249},
   {year: 2009, gdp: 24.2775},
   {year: 2010, gdp: 24.8845},
   {year: 2011, gdp: 25.3816},
   {year: 2012, gdp: 27.0406},
   {year: 2013, gdp: 31.273},
   {year: 2014, gdp: 35.3726},
   {year: 2015, gdp: 33.1451},
   {year: 2016, gdp: 36.3748},
   {year: 2017, gdp: 38.054},
   {year: 2018, gdp: 43.007},
   {year: 2019, gdp: 44.439},
];

var data2 = [
   {year: 1991, gdp: 6.57},
   {year: 1992, gdp: 6.7},
   {year: 1993, gdp: 6},
   {year: 1994, gdp: 5.06},
   {year: 1995, gdp: 4.1},
   {year: 1996, gdp: 4.2},
   {year: 1997, gdp: 4.1},
   {year: 1998, gdp: 4.1},
   {year: 1999, gdp: 4.46},
   {year: 2000, gdp: 4.67},
   {year: 2001, gdp: 4.94},
   {year: 2002, gdp: 5.37},
   {year: 2003, gdp: 5.46},
   {year: 2004, gdp: 5.63},
   {year: 2005, gdp: 5.67},
   {year: 2006, gdp: 5.69},
   {year: 2007, gdp: 5.56},
   {year: 2008, gdp: 5.61},
   {year: 2009, gdp: 6.49},
   {year: 2010, gdp: 6.75},
   {year: 2011, gdp: 7.29},
   {year: 2012, gdp: 7.22},
   {year: 2013, gdp: 4.25},
   {year: 2014, gdp: 3.66},
   {year: 2015, gdp: 3.11},
   {year: 2016, gdp: 2.6},
   {year: 2017, gdp: 2.49},
   {year: 2018, gdp: 2.48},
   {year: 2019, gdp: 2.44},
];




var svg4 = d3.select("#employment")
  .append("svg")
    .attr("width", width4 + margin.left + margin.right)
    .attr("height", height4 + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + 50 + ")");



// Initialise a X axis:
var x = d3.scaleLinear().range([0, width4]);
var xAxis = d3.axisBottom().scale(x);
svg4.append("g")
  .attr("transform", "translate(0," + height4 + ")")
  .attr("class","myXaxis")

// Initialize an Y axis
var y = d3.scaleLinear().range([height4, 0]);
var yAxis = d3.axisLeft().scale(y);
svg4.append("g")
  .attr("class","myYaxis")




function update(data) {

      // d3.csv("GDP.csv").then(function(data) {
      // Create the X axis:
      x.domain([1990, d3.max(data, function(d) { return d.year }) ]);
      svg4.selectAll(".myXaxis").transition()
        .duration(3000)
        .call(xAxis);
    
      // create the Y axis
      y.domain([0, d3.max(data, function(d) { return d.gdp  }) ]);
      svg4.selectAll(".myYaxis")
        .transition()
        .duration(3000)
        .call(yAxis);
    
      // Create a update selection: bind to the new data
      var u = svg4.selectAll(".lineTest")
        .data([data], function(d){ return d.year });
    
      // Updata the line
      u
        .enter()
        .append("path")
        .attr("class","lineTest")
        .merge(u)
        .transition()
        .duration(3000)
        .attr("d", d3.line()
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y(d.gdp); }))
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 2.5)
    
      
      
}

// At the beginning, I run the update function on the first dataset:
update(data1)



//cocoa plantation squares
        var svg5 = d3.select('#method')
          .append('svg')
          .attr('width', 1440)
          .attr('height', 1000)
          .attr('background','#000000')
          .attr("transform", "translate(0," + margin.top + ")");

        var mouseover= function(d){
                    d3.select(this)
                      .attr('width', size*3+cellSpacing*2)
                      .attr('height', size*3+cellSpacing*2)
                      .attr('fill', '#FFFAF0')
                      .attr('z-index', '200')

        }
         
        var mouseleave= function(d){
                    d3.select(this)
                      .attr('fill', '#FFFAF0')
                      .attr('width', size)
                      .attr('height', size)
                    //   .style('opacity',0);
        }
      
        var totalGraph = svg5.selectAll('rect').append("g")
        var totalGraphGroup = totalGraph.data(d3.range(98))
          .enter()
          .append('rect')
          .attr('x', (d, i) => {
              //12 determines how many square in one row
              var x0 = Math.floor(i / 100) % 14, x1 = Math.floor(i % 14);
              return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 14);
          })
          .attr('y', (d, i) => {
              var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 14);
              return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 14)+20;
          }) 
          .attr('width', size)
          .attr('height', size)
          .attr('fill', '#FFFAF0')
          .attr("rx", 3)
          .attr("ry", 3)
          .attr('stroke-width', 2)
          .on('mouseover', mouseover)
          .on('mouseleave', mouseleave);


var data = [
  { year: "2013", ivoryCoast: "1449", Ghana: "835", Indonesia: "410", Eduador: "192", Cameroon: "225"},
  { year: "2014", ivoryCoast: "1746", Ghana: "897", Indonesia: "375", Eduador: "234", Cameroon: "211"},
  { year: "2015", ivoryCoast: "1796", Ghana: "740", Indonesia: "325", Eduador: "250", Cameroon: "232"},
  { year: "2016", ivoryCoast: "1581", Ghana: "778", Indonesia: "320", Eduador: "232", Cameroon: "211"},
  { year: "2017", ivoryCoast: "2020", Ghana: "969", Indonesia: "270", Eduador: "290", Cameroon: "246"},
  { year: "2018", ivoryCoast: "1964", Ghana: "905", Indonesia: "240", Eduador: "285", Cameroon: "250"},
  { year: "2019", ivoryCoast: "2150", Ghana: "900", Indonesia: "220", Eduador: "298", Cameroon: "250"},
];




var svg6 = d3.select("#countrySupply")
  .append("svg")
    .attr("width", width5 + margin.left + margin.right)
    .attr("height", height5 + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + 50 + "," + 50 + ")");
          
// var parse = d3.time.format("%Y").parse;


// Transpose the data into layers
var dataset = d3.layout.stack()(["ivoryCoast", "Ghana", "Indonesia", "Eduador", "Cameroon"].map(function(country) {
  return data.map(function(d) {
    return {x: d.year, y: +d[country]};
  });
}));


// Set x, y and colors
var x = d3.scale.ordinal()
  .domain(dataset[0].map(function(d) { return d.x; }))
  .rangeRoundBands([0, width5-70], 0.02);

var y = d3.scale.linear()
  .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
  .range([height5, 0]);

var colors = ["#FF7154", "#FE9984", "#FFCCC2", "#FFE6E1", "#FFF2EF"];


// Define and draw axes
var yAxis = d3.axisLeft()
  .scale(y)
  .ticks(3)
  .tickFormat( function(d) { return d } );

var xAxis = d3.axisBottom()
  .scale(x)
  .ticks(0)

svg6.append("g")
  .attr("class", "y axis")
  .attr("transform", "translate(" + 5 + ",0)")
  .call(yAxis);
  

svg6.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(" + 35 + "," + height5 + ")")
  .call(xAxis);


// Create groups for each series, rects for each segment 
var groups = svg6.selectAll("g.cost")
  .data(dataset)
  .enter().append("g")
  .attr("class", "cost")
  .style("fill", function(d, i) { return colors[i]; });

var rect = groups.selectAll("rect")
  .data(function(d) { return d; })
  .enter()
  .append("rect")
  .attr("x", function(d) { return x(d.x); })
  .attr("y", function(d) { return y(d.y0 + d.y); })
  .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
  .attr("width", x.rangeBand())
  .on("mouseover", function() { 
      tooltip.style("display", null); 
      
  })
  .on("mouseout", function() { tooltip.style("display", "none"); })
  .on("mousemove", function(d) {
    var xPosition = d3.mouse(this)[0] - 15;
    var yPosition = d3.mouse(this)[1] - 25;
    tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
    tooltip.select("text").text( d.y + ",000 tons");
  });


// Draw legend
var legend = svg6.selectAll(".legend")
  .data(colors)
  .enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(30," + i * 15 + ")"; });
 
legend.append("rect")
  .attr("x", width4 - 40)
  .attr("width", 10)
  .attr("height", 10)
  .style("fill", function(d, i) {return colors.slice().reverse()[i];});
 
legend.append("text")
  .attr("x", width4 -25)
  .attr("y", 6)
  .attr("dy", ".25em")
  .style("text-anchor", "start")
  .style("font-size","10px")
  .style("font-family", "sans-serif")
  .text(function(d, i) { 
    switch (i) {
      case 4: return "Ivory Coast";
      case 3: return "Ghana";
      case 2: return "Indonesia";
      case 1: return "Eduador";
      case 0: return "Cameroon";
    }
  });


// Prep the tooltip bits, initial display is hidden
var tooltip = svg6.append("g")
  .attr("class", "tooltip")
  .style("display", "none");
    
tooltip.append("rect")
  .attr("width", 80)
  .attr("height", 20)
  .attr("fill", "#000000")
//   .style("opacity", 0.5);

tooltip.append("text")
  .attr("x", 40)
  .attr("dy", "1.2em")
  .style("text-anchor", "middle")
  .style("font-size","10px")
  .style("font-family", "gopher")
  .attr("fill", "#FFFAF0")
  .attr("font-weight", "bold");
    
