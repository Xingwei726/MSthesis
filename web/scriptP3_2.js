//coding file for 23 forests section
var margin = { top: 150, right: 40, bottom: 350, left: 50 },
    width3 = 1440 - margin.left - margin.right,
    height3 = 2000 - margin.top - margin.bottom;

var size3 = 10;
// uncomment to add group space
// var groupSpacing3 = 2;
var cellSpacing3 = 2;
var forestSpacing = 200;

var siteSize =[]

var colorBlock=[]

d3.csv("./data/forests.csv").then(function(data) {
    
  var svg2 = d3.select('#forests')
    .append('svg')
    .attr('width', width3)
    .attr('height', height3)
    .attr('background','#000000')
    .attr("transform", "translate(30,0)");  
    
  var forest = svg2.append("g").selectAll('rect').append("g")
  var forest2 = svg2.append("g").attr("transform", "translate(-1400,250)").selectAll('rect').append("g")
  var forest3 = svg2.append("g").attr("transform", "translate(-3000,400)").selectAll('rect').append("g")
  var forest4 = svg2.append("g").attr("transform", "translate(-4200,550)").selectAll('rect').append("g")
                    
  var tooltip2 = svg2.append("g")
    .attr("class", "tooltip")
    .style("display", "none");
      
  tooltip2.append("rect")
    .attr("width", 80)
    .attr("height", 20)
    .attr("fill", "#000000")
  
  tooltip2.append("text")
    .attr("x", 40)
    .attr("dy", "1.2em")
    .style("text-anchor", "middle")
    .style("font-size","10px")
    .style("font-family", "gopher")
    .attr("fill", "#FFFAF0")
    .attr("font-weight", "bold")
    .text("Hover to view details")
    .style("opacity", 1)






// for loop to create 23 forests    
    for (var i=0; i<7; i++){
        siteSize.push(data[i].size);
        // console.log(siteSize[i])
        colorBlock.push(data[i].color);

        for (var z=0; z<7; z++){
          var forest1st = forest
              .data(d3.range(siteSize[z]/10))
              .enter()
              .append('rect')
              .attr('x', (d, i) => {
                  var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
                  return forestSpacing*z + (cellSpacing3 + size3) * (x1 + x0 * 10);
              })
              .attr('y', (d, i) => {
                  var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
                  return (cellSpacing3 + size3) * (y1 + y0 * 10);
              }) 
              .attr('width', size3)
              .attr('height', size3)
              .attr('fill', i => (i < colorBlock[z] ? 'tomato' : '#FFFAF0'))
              .attr('stroke-width', 2)
              .on("mouseover", function() { 
                tooltip2.style("display", null);
                d3.select(this)
                  .attr("rx", 0)
                  .attr("ry", 0)        
              })
              .on("mouseout", function() { 
                tooltip2.style("display", "none");
                d3.select(this)
                  .attr("rx", 10)
                  .attr("ry", 10)
              })
              .on("mousemove", function(d) {
                var xPosition = d3.mouse(this)[0] - 15;
                var yPosition = d3.mouse(this)[1] - 25;
                tooltip2
                  .attr("transform", "translate(" + xPosition + "," + yPosition + ")")
                  .select("text")
                  .html(d[i] + " km2");
              });
              
              
              
              
        }
    }
    
    
 
    for (var i=7; i<14; i++){
        siteSize.push(data[i].size);
        // console.log(siteSize[i])
        colorBlock.push(data[i].color);

        for (var z=7; z<14; z++){
          var forest2nd = forest2
              .data(d3.range(siteSize[z]/10))
              .enter()
              .append('rect')
              .attr('x', (d, i) => {
                  var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
                  return forestSpacing*z + (cellSpacing3 + size3) * (x1 + x0 * 10);
              })
              .attr('y', (d, i) => {
                  var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
                  return (cellSpacing3 + size3) * (y1 + y0 * 10);
              }) 
              .attr('width', size3)
              .attr('height', size3)
              .attr('fill', i => (i < colorBlock[z] ? 'tomato' : '#FFFAF0'))
              .attr('stroke-width', 2)
        }
    }


    for (var i=14; i<21; i++){
        siteSize.push(data[i].size);
        colorBlock.push(data[i].color);

        for (var z=14; z<21; z++){
          var forest3rd = forest3
              .data(d3.range(siteSize[z]/10))
              .enter()
              .append('rect')
              .attr('x', (d, i) => {
                  var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
                  return forestSpacing*z + (cellSpacing3 + size3) * (x1 + x0 * 10);
              })
              .attr('y', (d, i) => {
                  var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
                  return (cellSpacing3 + size3) * (y1 + y0 * 10);
              }) 
              .attr('width', size3)
              .attr('height', size3)
            //   .attr('fill', '#FFFAF0')
              .attr('fill', i => (i < colorBlock[z] ? 'tomato' : '#FFFAF0'))
              .attr('stroke-width', 2)
        }
    }      
 
 
     for (var i=21; i<23; i++){
        siteSize.push(data[i].size);
        colorBlock.push(data[i].color);

        for (var z=21; z<23; z++){
          var forest4th = forest4
              .data(d3.range(siteSize[z]/10))
              .enter()
              .append('rect')
              .attr('x', (d, i) => {
                  var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
                  return forestSpacing*z + (cellSpacing3 + size3) * (x1 + x0 * 10);
              })
              .attr('y', (d, i) => {
                  var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
                  return (cellSpacing3 + size3) * (y1 + y0 * 10);
              }) 
              .attr('width', size3)
              .attr('height', size3)
            //   .attr('fill', '#FFFAF0')
              .attr('fill', i => (i < colorBlock[z] ? 'tomato' : '#FFFAF0'))
              .attr('stroke-width', 2)
        }
      
    } 


        console.log(siteSize)

        // var legend4 = svg2
        //       .selectAll(".legend")
        //       .data(data)
        //       .enter()
        //       .append("g")
        //       .attr("transform", "translate(-200,550)")
        //       .attr("class", "legend")
        //       .append("text")
        //       .attr("x", function(d,i){
        //         return 100 + i*100;
        //       })
        //       .attr("y", 100)
        //       // .attr("dy", ".25em")
        //       .style("fill","#FFFAF0")
        //       .style("text-anchor", "start")
        //       .style("font-size", "10px")
        //       .style("font-family", "sans-serif")
        //       .text(function(d) {
			   	 //    	return d.name;
			     //   })





});
