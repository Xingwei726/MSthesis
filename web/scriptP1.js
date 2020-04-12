//Try below code to make the menu expandable
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("fixed").style.width = "700px";
//     document.getElementById("fixed").style.transform = "rotate(-90deg) translateY(-750px)";
//     // document.getElementById("fixed").style.position = "absolte";

//   } else {
//     document.getElementById("fixed").style.width = "100px";
//     document.getElementById("fixed").style.transform = "rotate(-90deg) translateY(-150px)";
//     // document.getElementById("fixed").style.position = "absolute";
//   }
// }

var countryName=[];
var quantity=[];

         
var width = 1220,
    height = 1000;

var margin = { top: 150, right: 40, bottom: 350, left: 50 },
    width2 = 1440 - margin.left - margin.right,
    height2 = 2000 - margin.top - margin.bottom;

var size = 9;
var groupSpacing = 3.5;
var cellSpacing = 2;


var svg = d3.select('#intro')
      .append('svg')
      .attr('width', width)
      .attr('height', height); 


//square legend units      
    svg.selectAll('rect')
      .data(d3.range(100))
      .enter()
      .append('rect')
      .attr('x', (d, i) => {
          var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
          return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 10);
      })
      .attr('y', (d, i) => {
          var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
          return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 10);
      }) 
      .attr('width', size)
      .attr('height', size)
      .attr('fill', '#FFFAF0')
      .attr('stroke-width', 2)
      .attr("transform", "translate(270, 480)");



//Graph1
d3.csv("./data/globalsupply2019.csv").then(function(data) {
    for (var i=0; i<data.length; i++){
        countryName.push(data[i].Country);
        quantity.push(data[i].Tons);
    }
    console.log("CountryNames:",countryName);
    console.log("Quantity:",quantity);

    var svg2 = d3.select('#graph1')
      .append('svg')
      .attr('width', width2)
      .attr('height', height2)
      .attr('background','#000000')
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
  
    var totalGraph = svg2.selectAll('rect').append("g")
    var totalGraphGroup = totalGraph.data(d3.range(4831))
          .enter()
          .append('rect')
          .attr('x', (d, i) => {
              var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
              return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 10);
          })
          .attr('y', (d, i) => {
              var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
              return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 10)+800;
          }) 
          .attr('width', size/2)
          .attr('height', size/2)
          .attr('fill', '#FFFAF0')
          .attr('stroke-width', 2)
          .on('mouseover', function(d){
              d3.select(this)
              .style('opacity',0.5);
          })
          .on('mouseleave', function(d){
              d3.select(this)
              .style('opacity',1);
          });

          
        //transition of the squares
        totalGraphGroup.transition()
          .attr('width', size)
          .attr('height', size)
          .duration(500);


        var tooltip = d3.select("#graph1")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("color", "tomato")
			.style("font-family", "gopher")
			.style("font-size", "18px")
            .style("padding", "8px")
            .style("left", "1000px")
            .style("top", "915px")
            

        var mouseover = function(d) {
            tooltip
              .html("" + d.Ton + "Tons")
              .style("opacity", 1);
            d3.select(this)
              .attr('fill', "tomato");
            totalGraphGroup
            //   .style("opacity", 0.5)
              .data(d3.range(d.Tons))
              .attr('fill', 'tomato')
            //   .style("opacity", 1)
          }

        // var mousemove = function(d) {
        //     // tooltip
        //     //   .html("" + d.Ton + "Tons")
        //     //   .style("opacity", 1);
        //     // d3.select(this)
        //     //   .attr('fill', "tomato");
        //     totalGraphGroup
        //       .style("opacity", 0.5)
        //       .data(d3.range(d.Tons))
        //       .attr('fill', 'tomato')
        //       .style("opacity", 1)
        //   }          
        

        var mouseleave = function(d) {
            tooltip
              .style("opacity", 0)
            d3.select(this)
              .attr('fill', "#FFFAF0");
            totalGraphGroup
              .style("opacity", 1)
              .data(d3.range(4831))
              .attr('fill', '#FFFAF0')
          }
          
        

//Country Names Legend
		  svg2.selectAll("text")
			   .data(data)
			   .enter()
			   .append("text")
			   .attr("x", 200)
			   .attr("y", function(d,i) {
			   		return 100 + i*15;
			   })
			   .attr("text-anchor", "left")
			   .attr("font-family", "sans-serif")
			   .style("font-size", "12px")
			   .attr("fill", "#FFFAF0")
			   .text(function(d) {
			   		return d.Country;
			   })
			   .attr("transform", "translate(950, 710)")
               .on('mouseover', mouseover)
               .on('mouseleave', mouseleave)
               
               
// Graph Title
          svg2.append("text")
			   .attr("x", 0)
			   .attr("y", 200)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "36px")
			   .attr("fill", "#FFFAF0")
			   .text( "Global Cocoa Supply 2019")
			   .attr("transform", "translate(0, 530)")


//Total Count (static)
          svg2.append("text")
			   .attr("x", 0)
			   .attr("y", 200)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "18px")
			   .attr("fill", "#FFFAF0")
			   .text( "Total Amount:")
			   .attr("transform", "translate(0, 560)")

          svg2.append("text")
			   .attr("x", 0)
			   .attr("y", 200)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "18px")
			   .attr("fill", "#FFFAF0")
			   .text( "4,831,885 Tons")
			   .attr("transform", "translate(0, 585)")

//Selected Count (change based on selection)
          svg2.append("text")
			   .attr("x", 0)
			   .attr("y", 200)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "18px")
			   .attr("fill", "tomato")
			   .text( "Selected Amount:")
			   .attr("transform", "translate(950, 560)")

    console.log("CountryNames:",countryName);
    console.log("Quantity:",quantity);

 
});

