var margin = { top: 150, right: 40, bottom: 350, left: 40 },
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

var numberFormat = d3.format(",.2r");


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
        center: [-5.336393, 7.781411],
        zoom: 6,
    },
    'section5': {
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


//Section 3 specific datasets
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

var data = [
  { year: "2013", ivoryCoast: "1449", Ghana: "835", Indonesia: "410", Eduador: "192", Cameroon: "225"},
  { year: "2014", ivoryCoast: "1746", Ghana: "897", Indonesia: "375", Eduador: "234", Cameroon: "211"},
  { year: "2015", ivoryCoast: "1796", Ghana: "740", Indonesia: "325", Eduador: "250", Cameroon: "232"},
  { year: "2016", ivoryCoast: "1581", Ghana: "778", Indonesia: "320", Eduador: "232", Cameroon: "211"},
  { year: "2017", ivoryCoast: "2020", Ghana: "969", Indonesia: "270", Eduador: "290", Cameroon: "246"},
  { year: "2018", ivoryCoast: "1964", Ghana: "905", Indonesia: "240", Eduador: "285", Cameroon: "250"},
  { year: "2019", ivoryCoast: "2150", Ghana: "900", Indonesia: "220", Eduador: "298", Cameroon: "250"},
];



//Cocoa Production by Country
var svg6 = d3.select("#countrySupply")
  .append("svg")
    .attr("width", width5 + margin.left + margin.right)
    .attr("height", height5 + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + 50 + "," + 50 + ")");
          
var dataset = d3.layout.stack()(["ivoryCoast", "Ghana", "Indonesia", "Eduador", "Cameroon"].map(function(country) {
  return data.map(function(d) {
    return {x: d.year, y: +d[country]};
  });
}));

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

var groups = svg6.selectAll("g.cost")
  .data(dataset)
  .enter().append("g")
  .attr("class", "cost")
  .style("fill", function(d, i) { return colors[i]; });

  groups.selectAll("rect")
  .data(function(d) { return d; })
  .enter()
  .append("rect")
  .attr("x", function(d) { return x(d.x); })
  .attr("y", function(d) { return y(d.y0 + d.y); })
  .attr("rx", 10)
  .attr("ry", 10) 
  .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
  .attr("width", x.rangeBand())
  .on("mouseover", function() { 
      tooltip.style("display", null);
      d3.select(this)
        .attr("rx", 0)
        .attr("ry", 0)        
  })
  .on("mouseout", function() { 
      tooltip.style("display", "none");
      d3.select(this)
    .attr("rx", 10)
    .attr("ry", 10)
  })
  .on("mousemove", function(d,i) {
    var xPosition = d3.mouse(this)[0] - 15;
    var yPosition = d3.mouse(this)[1] - 25;
    tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
    tooltip.select("text").text( numberFormat(d.y) + ",000 tons");
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
  
svg6.append("text")
  .attr("x", width4/2-22)
  .attr("y", height5 + 35)
  .style("text-anchor", "start")
  .style("font-size","12px")
  .style("font-family", "sans-serif")
  .text("Year");

svg6.append("text")
  .attr("x", -20)
  .attr("y", 10)
  .style("text-anchor", "start")
  .style("font-size","12px")
  .style("font-family", "sans-serif")
  .text("(Unit: 1000 tons)");
  
svg6.append("text")
  .attr("x", -20)
  .attr("y", -20)
  .style("text-anchor", "start")
  .style("font-size","14px")
  .style("font-family", "gopher")
  .text("Global Cocoa Production by Country");

var tooltip = svg6.append("g")
  .attr("class", "tooltip")
  .style("display", "none");
    
tooltip.append("rect")
  .attr("width", 80)
  .attr("height", 20)
  .attr("fill", "#000000")

tooltip.append("text")
  .attr("x", 40)
  .attr("dy", "1.2em")
  .style("text-anchor", "middle")
  .style("font-size","10px")
  .style("font-family", "gopher")
  .attr("fill", "#FFFAF0")
  .attr("font-weight", "bold");






//employment & GDP line graph conflicts with the first bar graph
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

// At the beginning, run the update function on the first dataset:
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
        totalGraph.data(d3.range(98))
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


    

var svg7 = d3.select("#dashboard")
  .append("svg")
    .attr("width", width5 + margin.left + margin.right)
    .attr("height", height5 + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + 0 + "," + 50 + ")");

var x1=0;
var length=195;
var y1=0;
var y2=100;
var y3=200;
var z=20+length;//gutter


//Dashboard Infromation - First Row
svg7.append("line")
    .attr("x1", x1 )
    .attr("x2", length)
    .attr("y1", y1)
    .attr("y2", y1)
    .style("stroke", "#000000")
    .style("stroke-width", "2px")
svg7.append("text")  
   .attr("x", x1)
   .attr("y", y1+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "gopher")
   .style("font-weight","500")
   .text("Official Name")
svg7.append("text")  
   .attr("x", x1)
   .attr("y", y1+20+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "sans-serif")
   .text("Republic of Côte d'Ivoire")   




svg7.append("line")
    .attr("x1", x1+z )
    .attr("x2", length+z)
    .attr("y1", y1)
    .attr("y2", y1)
    .style("stroke", "#000000")
    .style("stroke-width", "2px")
svg7.append("text")  
   .attr("x", x1+z)
   .attr("y", y1+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "gopher")
   .style("font-weight","500")
   .text("Coordinates")
svg7.append("text")  
   .attr("x", x1+z)
   .attr("y", y1+20+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "sans-serif")
   .text("7.5400° N, 5.5471° W")




svg7.append("line")
    .attr("x1", x1+z*2 )
    .attr("x2", length+z*2)
    .attr("y1", y1)
    .attr("y2", y1)
    .style("stroke", "#000000")
    .style("stroke-width", "2px")    
svg7.append("text")  
   .attr("x", x1+z*2)
   .attr("y", y1+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "gopher")
   .style("font-weight","500")
   .text("Languages")
svg7.append("text")  
   .attr("x", x1+z*2)
   .attr("y", y1+20+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "sans-serif")
   .text("French, Dyula, Baoulé...")




svg7.append("line")
    .attr("x1", x1+z )
    .attr("x2", length+z)
    .attr("y1", y2)
    .attr("y2", y2)
    .style("stroke", "#000000")
    .style("stroke-width", "2px")
svg7.append("text")  
   .attr("x", x1+z)
   .attr("y", y2+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "gopher")
   .style("font-weight","500")
   .text("Area")
svg7.append("text")  
   .attr("x", x1+z)
   .attr("y", y2+20+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "sans-serif")
   .text("322,460 sq km")


svg7.append("line")
    .attr("x1", x1+z*2 )
    .attr("x2", length+z*2)
    .attr("y1", y2)
    .attr("y2", y2)
    .style("stroke", "#000000")
    .style("stroke-width", "2px")    
svg7.append("text")
   .attr("x", x1+z*2)
   .attr("y", y2+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "gopher")
   .style("font-weight","500")
   .text("Population")
svg7.append("a")
   .attr("xlink:href", "https://worldpopulationreview.com/countries/ivory-coast-population/")
   .append("text")  
   .attr("x", x1+z*2)
   .attr("y", y2+20+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "sans-serif")
   .text("26.38 million (2020 census)")
   
   
   
//Dashboard Information - 3rd row
svg7.append("line")
    .attr("x1", x1+z )
    .attr("x2", length+z)
    .attr("y1", y3)
    .attr("y2", y3)
    .style("stroke", "#000000")
    .style("stroke-width", "2px")
svg7.append("text")  
   .attr("x", x1+z)
   .attr("y", y3+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "gopher")
   .style("font-weight","500")
   .text("Climate")
svg7.append("text")  
   .attr("x", x1+z)
   .attr("y", y3+20+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "sans-serif")
   .text("tropical & semiarid")
   
svg7.append("line")
    .attr("x1", x1+z*2 )
    .attr("x2", length+z*2)
    .attr("y1", y3)
    .attr("y2", y3)
    .style("stroke", "#000000")
    .style("stroke-width", "2px")    
svg7.append("text")
   .attr("x", x1+z*2)
   .attr("y", y3+20)
   .style("text-anchor", "left")
   .style("font-size","14px")
   .style("font-family", "gopher")
   .style("font-weight","500")
   .text("Main Industries")



//Forest Cover Loss
d3.csv("./data/ForestLoss&CO2.csv").then(function(data) {

var xScale = d3.scaleSqrt()
  .domain([0, 527274])
  .range([0, 60]);
  
var leftSpace = 35;
var topSpace = 70;
var enlarge=3;



// CO2 Scale  
var xScale2 = d3.scaleSqrt()
  .domain([0, 85])
  .range([0, 20]);
  
  
  
var svg8 = d3.select('#deforestation')
          .append('svg')
          .attr('width', width2)
          .attr('height', 1000)
          .attr("transform", "translate(" + margin.left + ",100)");

console.log(data)        
        
var tooltip8 = d3.select("#deforestation")
    .append("div")
    .attr('class', 'tooltip')
    .style("position", "absolute")
    .style("color", "#FFFAF0")
    .style("background", "black")
	.style("font-family", "gopher")
	.style("font-size", "14px")
    .style("padding", "8px")
    .style("left", 100)		
    .style("top", "20px")
    .text("Hover to view details")
    .style("opacity", 1)                            


          
          svg8.append('g')
          .selectAll('circle')
          .data(data)
          .enter()
          .append('circle')
          .attr("cx", function(d,i) {
			       return leftSpace+i*70;
    	    })
          .attr("cy", topSpace)
          .attr("r", function(d) {
			      return xScale(d.threshold10);
    	    })
    	  .style('stroke',"#000000")
          .style('stroke-width', 1)
          .style("fill", "none")
          .on('mouseover', function(d) {
                tooltip8
                  .html("At 10% canopy cover level forest loss is "+ numberFormat(d.threshold10) +" hectares") 
                d3.select(this)
         	      .style('stroke',"tomato")
                  .style('stroke-width', 2)
                  .attr("r", function(d) {
			      return xScale(d.threshold10)*enlarge;
    	        }) 
    	          .style("z-index", "200")

                 
            })
          .on('mouseleave', function(d) {
                tooltip8
                //   .text("Hover to view details")
                d3.select(this)
        	      .style('stroke',"#000000")
                  .style('stroke-width', 1)
                  .attr("r", function(d) {
			       return xScale(d.threshold10);
    	        })
            })


          svg8.append('g')
          .selectAll('circle')
          .data(data)
          .enter()
          .append('circle')
          .attr("cx", function(d,i) {
			       return leftSpace+i*70;
    	    })
          .attr("cy", topSpace)
          .attr("r", function(d) {
			      return xScale(d.threshold15);
    	    })
    	  .style('stroke',"#000000")
          .style('stroke-width', 1)
          .style("fill", "none")
          .on('mouseover', function(d) {
                tooltip8
                  .html("At 15% canopy cover level forest loss is "+ numberFormat(d.threshold15) +" hectares") 
                d3.select(this)
         	      .style('stroke',"tomato")
                  .style('stroke-width', 2)
                  .style("z-index", "200")
                  .attr("r", function(d) {
			      return xScale(d.threshold15)*enlarge;
    	        })
            })
          .on('mouseleave', function(d) {
                tooltip8
                //   .text("Hover to view details")
                d3.select(this)
                //   .transition()
                //   .duration(1000) 
        	      .style('stroke',"#000000")
                  .style('stroke-width', 1)
                  .attr("r", function(d) {
			      return xScale(d.threshold15);
    	        })
            })
            
            

          svg8.append('g')
          .selectAll('circle')
          .data(data)
          .enter()
          .append('circle')
          .attr("cx", function(d,i) {
			       return leftSpace+i*70;
    	    })
          .attr("cy", topSpace)
          .attr("r", function(d) {
			      return xScale(d.threshold20);
    	    })
    	  .style('stroke',"#000000")
          .style('stroke-width', 1)
          .style("fill", "none")
          .on('mouseover', function(d) {
                tooltip8
                  .html("At 20% canopy cover level forest loss is "+ numberFormat(d.threshold20) +" hectares") 
                d3.select(this)
         	      .style('stroke',"tomato")
                  .style('stroke-width', 2)
                  .style("z-index", "200")
                  .attr("r", function(d) {
			      return xScale(d.threshold20)*enlarge;
    	        })
            })
          .on('mouseleave', function(d) {
                tooltip8
                //   .text("Hover to view details")
                d3.select(this)
        	      .style('stroke',"#000000")
                  .style('stroke-width', 1)
                  .attr("r", function(d) {
			      return xScale(d.threshold20);
    	        })
            })
          
          
          svg8.append('g')
          .selectAll('circle')
          .data(data)
          .enter()
          .append('circle')
          .attr("cx", function(d,i) {
			       return leftSpace+i*70;
    	    })
          .attr("cy", topSpace)
          .attr("r", function(d) {
			      return xScale(d.threshold25);
    	    })
    	  .style('stroke',"#000000")
          .style('stroke-width', 1)
          .style("fill", "none")
          .on('mouseover', function(d) {
                tooltip8
                  .html("At 25% canopy cover level forest loss is "+ numberFormat(d.threshold25) +" hectares") 
                d3.select(this)
         	      .style('stroke',"tomato")
                  .style('stroke-width', 2)
                  .style("z-index", "200")
                  .attr("r", function(d) {
			      return xScale(d.threshold25)*enlarge;
    	        })
            })
          .on('mouseleave', function(d) {
                tooltip8
                //   .text("Hover to view details")
                d3.select(this)
                  .attr("r", function(d) {
			      return xScale(d.threshold25);
    	        })
    	          .style('stroke',"#000000")
                  .style('stroke-width', 1)
            })
          
          
          svg8.append('g')
          .selectAll('circle')
          .data(data)
          .enter()
          .append('circle')
          .attr("cx", function(d,i) {
			       return leftSpace+i*70;
    	    })
          .attr("cy", topSpace)
          .attr("r", function(d) {
			      return xScale(d.threshold30);
    	    })
    	  .style('stroke',"#000000")
          .style('stroke-width', 1)
          .style("fill", "none")
          .on('mouseover', function(d) {
                tooltip8
                  .html("At 30% canopy cover level forest loss is "+ numberFormat(d.threshold30) +" hectares") 
                d3.select(this)
         	      .style('stroke',"tomato")
                  .style('stroke-width', 2)
                  .style("z-index", "200")
                  .attr("r", function(d) {
			      return xScale(d.threshold30)*enlarge;
    	        })                  
            })
          .on('mouseleave', function(d) {
                tooltip8
                //   .text("Hover to view details")
                d3.select(this)
        	      .style('stroke',"#000000")
                  .style('stroke-width', 1)
                  .attr("r", function(d) {
			      return xScale(d.threshold30);
    	        })
            })
        
          
          svg8.append('g')
          .selectAll('circle')
          .data(data)
          .enter()
          .append('circle')
          .attr("cx", function(d,i) {
			       return leftSpace+i*70;
    	    })
          .attr("cy", topSpace)
          .attr("r", function(d) {
			      return xScale(d.threshold50);
    	    })
    	  .style('stroke',"#000000")
          .style('stroke-width', 1)
          .style("fill", "none")
          .on('mouseover', function(d) {
                tooltip8
                  .html("At 50% canopy cover level forest loss is "+ numberFormat(d.threshold50) +" hectares") 
                d3.select(this)
         	      .style('stroke',"tomato")
                  .style('stroke-width', 2)
                  .style("z-index", "200")
                  .attr("r", function(d) {
			      return xScale(d.threshold50)*enlarge;
    	        })
            })
          .on('mouseleave', function(d) {
                tooltip8
                //   .text("Hover to view details")
                d3.select(this)
        	      .style('stroke',"#000000")
                  .style('stroke-width', 1)
                  .attr("r", function(d) {
			      return xScale(d.threshold50);
    	        })
            })


          svg8.append('g')
          .selectAll('circle')
          .data(data)
          .enter()
          .append('circle')
          .attr("cx", function(d,i) {
			       return leftSpace+i*70;
    	    })
          .attr("cy", topSpace)
          .attr("r", function(d) {
			      return xScale(d.threshold70);
    	    })
    	  .style('stroke',"#000000")
          .style('stroke-width', 1)
          .style("fill", "none")
          .on('mouseover', function(d) {
                tooltip8
                  .html("At 70% canopy cover level forest loss is "+ numberFormat(d.threshold70) +" hectares") 
                d3.select(this)
         	      .style('stroke',"tomato")
                  .style('stroke-width', 2)
                  .style("z-index", "200")
                  .attr("r", function(d) {
			      return xScale(d.threshold70)*enlarge;
    	        })

            })
          .on('mouseleave', function(d) {
                tooltip8
                //   .text("Hover to view details")
                d3.select(this)
        	      .style('stroke',"#000000")
                  .style('stroke-width', 1)
                  .attr("r", function(d) {
			      return xScale(d.threshold70);
    	        })
                  
            })




//Year Legend
		  svg8.selectAll("text")
			   .data(data)
			   .enter()
			   .append("text")
               .attr("x", function(d,i) {
         		  return leftSpace+i*70;
               }) 
			   .attr("y", 200 )
			   .attr("text-anchor", "middle")
			   .attr("font-family", "sans-serif")
			   .style("font-size", "12px")
			   .attr("fill", "#000000")
			   .text(function(d) {
			   		return d.Year;
			   })
          
  		  svg8.selectAll("line")
			   .data(data)
			   .enter()
			   .append("line")
			   .style("stroke-dasharray", ("3, 3"))
               .attr("x1", function(d,i) {
         		  return leftSpace+i*70;
               })
               .attr("y1", topSpace-100)
               .attr("x2", function(d,i) {
         		  return leftSpace+i*70;
               })                         
               .attr("y2", 180)
               .style("stroke", "#000000")
               .style("stroke-weight", 2)


});



// Ivory Coast Export Data

d3.csv("./data/ICExports.csv").then(function(data) {


var exportsScaleWidth = d3.scaleSqrt()
  .domain([0, 39])
  .range([1, width5/2]);
  

//graph for exports
var svg9 = d3.select("#exports")
  .append("svg")
    .attr("width", width5 + margin.left + margin.right)
    .attr("height", height5 + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + 0 + "," + 50 + ")");

var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#FF7154", "#FE9984", "#FFCCC2", "#FFE6E1", "#FFF2EF"])


var mouse = [480, 250],
    count = 0;
svg9
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
    .attr('x', function(d) {
		return exportsScaleWidth(d.percentage)/2;
     })
    .attr('y', function(d) {
		return exportsScaleWidth(d.percentage)/2;
     })
    .attr('width',function(d) {
		return exportsScaleWidth(d.percentage);
     })
    .attr('height',function(d) {
		return exportsScaleWidth(d.percentage);
     })
    .style("fill", function(d){ return(color(d.percentage)) })
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

    svg9.datum(function(d) {
      return {center: mouse.slice(), angle: 0};
    });



});
