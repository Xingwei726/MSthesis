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

// var xScale = d3.scaleBand()
//   .domain([0, 39])
//   .range([0, width2])
//   .padding(0.1);
  
// var yGuide



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
d3.csv("globalsupply2019.csv").then(function(data) {
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
              
          }

        var mouseleave = function(d) {
            tooltip
              .style("opacity", 0)
            d3.select(this)
              .attr('fill', "#FFFAF0");
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


// //Graph2
// d3.csv("globalproductiontrend.csv").then(function(data) {
//     for (var i=0; i<data.length; i++){
//         year.push(data[i].Year);
//         yearQuantity.push(data[i].Tons);
//     }

//     console.log("CountryNames:",countryName);
//     console.log("Data:",data);
    
//         var yScale = d3.scaleLinear()
//           .domain([0, 5000])
//           .range([0, height3-margin.top-margin.bottom])
//         //   .range([0, height2]);

        
//         // var yAxisValues = d3.scaleLinear()
//         //   .domain([0, 4834])
//         //   .range([height2-margin.top-margin.bottom], 0)
//         // //   .range([height2], 0);

          
//         // var yAxisTicks = d3.axisLeft(yAxisValues)
//         //   .ticks(6)
          
        
    
                
        
//         var tooltip2 = d3.select("#graph2")
//             .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
//             .append("div")
//             .style("opacity", 0)
//             .style("position", "absolute")
//             .style("color", "tomato")
//             .style("background", "black")
// 			.style("font-family", "gopher")
// 			.style("font-size", "14px")
//             .style("padding", "8px")
//             .style("z-index", "1000")



//         var mouseover2 = function(d) {
//             tooltip2
//               .style("opacity", 1)
//               .html("Year "+ d.Year +": " + d.Tons + " ") 
//               .style("opacity", 1)
//               .style('left', (d3.event.pageX+12) + 'px')
//               .style('top', (d3.event.pageY-34) + 'px')
//             d3.select(this)
//               .attr('fill', "tomato")
//               .style("z-index", "0")

//         }

          
//         var mouseleave2 = function(d) {
//             tooltip2
//               .style("opacity", 0)
//             d3.select(this)
//               .attr('fill', '#FFFAF0');
//         }  

        

//         var svg3 = d3.select('#graph2')
//           .append('svg')
//           .attr('width', width3)
//           .attr('height', height3+200)//200 is the space for legend
//           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          
//           svg3.append('g')
//           .selectAll('rect')
//           .data(data)
//           .enter()
//           .append('rect')
//           .attr("x", function(d,i) {
// 			  return 30+i*33;
//     	  }) 
//           .attr("width", 30)
//     	  .attr('y', function(d) { 
//     	      return height3 - yScale(d.Tons); 
//     	  })
//           .attr("height", function(d) {
// 			  return yScale(d.Tons);
//     	  })
//           .attr('fill', '#FFFAF0')
//           .attr('stroke-width', 2)
//           .on('mouseover', mouseover2)
//           .on('mouseleave', mouseleave2)
        
              

// // Graph2 Title
//           svg3.append("text")
// 			   .attr("x", 0)
// 			   .attr("y", 0)
// 			   .attr("text-anchor", "left")
// 			   .attr("font-family", "gopher")
// 			   .style("font-size", "36px")
// 			   .attr("fill", "#FFFAF0")
// 			   .text( "Global Cocoa Production")
// 			   .attr("transform", "translate(0, 530)")

// //Unit (static)
//           svg3.append("text")
// 			   .attr("x", 0)
// 			   .attr("y", 0)
// 			   .attr("text-anchor", "left")
// 			   .attr("font-family", "gopher")
// 			   .style("font-size", "18px")
// 			   .attr("fill", "#FFFAF0")
// 			   .text( "Unit: 1,000tons")
// 			   .attr("transform", "translate(0, 560)")

// //Year Legend
// 		  svg3.selectAll("text")
// 			   .data(data)
// 			   .enter()
// 			   .append("text")
//               .attr("x", function(d,i) {
//          		  return 30+i*33;
//               }) 
// 			   .attr("y", 1520 )
// 			   .attr("text-anchor", "left")
// 			   .attr("font-family", "sans-serif")
// 			   .style("font-size", "12px")
// 			   .attr("fill", "#FFFAF0")
// 			   .text(function(d) {
// 			   		return d.Year;
// 			   })

// 		  svg3.append("text")
//               .attr("x", 30) 
// 			   .attr("y", 1520 )
// 			   .attr("text-anchor", "left")
// 			   .attr("font-family", "sans-serif")
// 			   .style("font-size", "12px")
// 			   .attr("fill", "#FFFAF0")
// 			   .text("1981")

// 		  svg3.append("text")
//               .attr("x", 63) 
// 			   .attr("y", 1520 )
// 			   .attr("text-anchor", "left")
// 			   .attr("font-family", "sans-serif")
// 			   .style("font-size", "12px")
// 			   .attr("fill", "#FFFAF0")
// 			   .text("1982")

         
// //Line 4000
//         svg3.append("svg:line")
//             .attr("x1", 30)
//             .attr("y1", 700)
//             .attr("x2", width3)
//             .attr("y2", 700)
//             .style("stroke", "#000000")
//             .style("stroke-width", 3);
            
//         svg3.append("svg:line")
//             .attr("x1", 0)
//             .attr("y1", 700)
//             .attr("x2", 20)
//             .attr("y2", 700)
//             .style("stroke", "white")
//             .style("stroke-width", 2);

//         svg3.append("text")
// 			.attr("x", 0)
// 			.attr("y", 693)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("4000") 
            
            
// //Line 3000
//         svg3.append("svg:line")
//             .attr("x1", 30)
//             .attr("y1", 900)
//             .attr("x2", width3)
//             .attr("y2", 900)
//             .style("stroke", "#000000")
//             .style("stroke-width", 3);

//         svg3.append("svg:line")
//             .attr("x1", 0)
//             .attr("y1", 900)
//             .attr("x2", 20)
//             .attr("y2", 900)
//             .style("stroke", "white")
//             .style("stroke-width", 2);

//         svg3.append("text")
// 			.attr("x", 0)
// 			.attr("y", 893)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("3000") 

// //Line 2000
//         svg3.append("svg:line")
//             .attr("x1", 30)
//             .attr("y1", 1100)
//             .attr("x2", width3)
//             .attr("y2", 1100)
//             .style("stroke", "#000000")
//             .style("stroke-width", 3);

//         svg3.append("svg:line")
//             .attr("x1", 0)
//             .attr("y1", 1100)
//             .attr("x2", 20)
//             .attr("y2", 1100)
//             .style("stroke", "white")
//             .style("stroke-width", 2);

//         svg3.append("text")
// 			.attr("x", 0)
// 			.attr("y", 1093)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("2000") 

// //Line 1000
//         svg3.append("svg:line")
//             .attr("x1", 30)
//             .attr("y1", 1300)
//             .attr("x2", width3)
//             .attr("y2", 1300)
//             .style("stroke", "#000000")
//             .style("stroke-width", 3);

//         svg3.append("svg:line")
//             .attr("x1", 0)
//             .attr("y1", 1300)
//             .attr("x2", 20)
//             .attr("y2", 1300)
//             .style("stroke", "white")
//             .style("stroke-width", 2);
            
//         svg3.append("svg:line")
//             .attr("x1", 0)
//             .attr("y1", 1500-2)
//             .attr("x2", 20)
//             .attr("y2", 1500-2)
//             .style("stroke", "white")
//             .style("stroke-width", 2);

//         svg3.append("text")
// 			.attr("x", 0)
// 			.attr("y", 1293)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("1000") 
			
//         svg3.append("text")
// 			.attr("x", 0)
// 			.attr("y", 1493)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("0") 


// //Right Side			
// //Line 4000
//         svg3.append("svg:line")
//             .attr("x1", width2-30)
//             .attr("y1", 700)
//             .attr("x2", width2-10)
//             .attr("y2", 700)
//             .style("stroke", "white")
//             .style("stroke-width", 2);

//         svg3.append("text")
//             .attr("x", width2-30)
// 			.attr("y", 693)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("4000") 
            
            
// //Line 3000
//         svg3.append("svg:line")
//             .attr("x1", width2-30)
//             .attr("y1", 900)
//             .attr("x2", width2-10)
//             .attr("y2", 900)
//             .style("stroke", "white")
//             .style("stroke-width", 2);

//         svg3.append("text")
//             .attr("x", width2-30)
// 			.attr("y", 893)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("3000") 

// //Line 2000
//         svg3.append("svg:line")
//             .attr("x1", width2-30)
//             .attr("y1", 1100)
//             .attr("x2", width2-10)
//             .attr("y2", 1100)
//             .style("stroke", "white")
//             .style("stroke-width", 2);

//         svg3.append("text")
//             .attr("x", width2-30)
// 			.attr("y", 1093)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("2000") 

// //Line 1000
//         svg3.append("svg:line")
//             .attr("x1", width2-30)
//             .attr("y1", 1300)
//             .attr("x2", width2-10)
//             .attr("y2", 1300)
//             .style("stroke", "white")
//             .style("stroke-width", 2);
            
//         svg3.append("svg:line")
//             .attr("x1", width2-30)
//             .attr("y1", 1500-2)
//             .attr("x2", width2-10)
//             .attr("y2", 1500-2)
//             .style("stroke", "white")
//             .style("stroke-width", 2);

//         svg3.append("text")
//             .attr("x", width2-30)
// 			.attr("y", 1293)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("1000") 
			
//         svg3.append("text")
//             .attr("x", width2-30)
// 			.attr("y", 1493)
// 			.attr("text-anchor", "left")
// 			.attr("font-family", "sans-serif")
// 			.style("font-size", "12px")
// 			.attr("fill", "#FFFAF0")
// 			.text("0") 

// });