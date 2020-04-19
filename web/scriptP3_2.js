//coding file for 23 forests section
var margin = { top: 150, right: 40, bottom: 350, left: 50 },
    width3 = 1440 - margin.left - margin.right,
    height3 = 2000 - margin.top - margin.bottom;

var size3 = 10;
// uncomment to add group space
// var groupSpacing3 = 2;
var cellSpacing3 = 2;
var forestSpacing = 200;
var lineSpacing =15;

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
  var forest3 = svg2.append("g").attr("transform", "translate(-2800,400)").selectAll('rect').append("g")
  var forest4 = svg2.append("g").attr("transform", "translate(-4200,550)").selectAll('rect').append("g")
  
  
        var forestName = svg2
              .append("g")
              .selectAll("text")
              .data(data)
              .enter()
              .append("g")
              .attr("transform", "translate(0,550)")
              .attr("class", "legend")
              .append("text")
              .attr("x", function(d,i){
                return i*200;
              })
              
              .attr("x",function(d,i) {
                  if ( i<7) {
  			   	        	return i*200;
                  } else if (i<14) {
                      return (i-7)*200
                  } else if (i<21) {
                      return (i-14)*200
                  } else {
                      return (i-21)*200
                  }
		        	})
              .attr("y", function(d,i) {
                  if ( i<7) {
  			   	  	      return -400
                  } else if (i<14) {
                      return -250
                  } else if (i<21) {
                      return -100
                  } else {
                      return 50
                  }      
		         	})
              .style("fill","#FFFAF0")
              .style("text-anchor", "start")
              .style("font-size", "12px")
              // .style("font-weight",800)
              .style("font-family", "gopher")
              .text(function(d) {
			   	     	return d.name;
			        })


        var forestSize = svg2
              .append("g")
              .selectAll("text")
              .data(data)
              .enter()
              .append("g")
              .attr("transform", "translate(0,550)")
              .attr("class", "legend")
              .append("text")
              .attr("x", function(d,i){
                return i*200;
              })
              
              .attr("x",function(d,i) {
                  if ( i<7) {
  			   	        	return i*200;
                  } else if (i<14) {
                      return (i-7)*200
                  } else if (i<21) {
                      return (i-14)*200
                  } else {
                      return (i-21)*200
                  }
		        	})
              .attr("y", function(d,i) {
                  if ( i<7) {
  			   	  	      return -400 + lineSpacing
                  } else if (i<14) {
                      return -250 + lineSpacing
                  } else if (i<21) {
                      return -100 + lineSpacing
                  } else {
                      return 50 + lineSpacing
                  }      
		        	})
              .style("fill","#FFFAF0")
              .style("text-anchor", "start")
              .style("font-size", "12px")
              .style("font-family", "courier")
              .text(function(d) {
			   	     	return "Total: " + d.size + "km2";
			        })
			        .attr("opacity",0.6)

        var cocoaFarmSize = svg2
              .append("g")
              .selectAll("text")
              .data(data)
              .enter()
              .append("g")
              .attr("transform", "translate(0,550)")
              .attr("class", "legend")
              .append("text")
              .attr("x", function(d,i){
                return i*200;
              })
              
              .attr("x",function(d,i) {
                  if ( i<7) {
  			   	        	return i*200;
                  } else if (i<14) {
                      return (i-7)*200
                  } else if (i<21) {
                      return (i-14)*200
                  } else {
                      return (i-21)*200
                  }
		        	})
              .attr("y", function(d,i) {
                  if ( i<7) {
  			   	  	      return -400 + lineSpacing*2
                  } else if (i<14) {
                      return -250 + lineSpacing*2
                  } else if (i<21) {
                      return -100 + lineSpacing*2
                  } else {
                      return 50 + lineSpacing*2
                  }      
		        	})
              .style("fill","#FFFAF0")
              .style("text-anchor", "start")
              .style("font-size", "12px")
              .style("font-family", "courier")
              .text(function(d) {
			   	     	return "Cocoa Farm: " + d.tococoafarms + "km2";
			        })
			        .attr("opacity",0.6)

        var cocoaProduction = svg2
              .append("g")
              .selectAll("text")
              .data(data)
              .enter()
              .append("g")
              .attr("transform", "translate(0,550)")
              .attr("class", "legend")
              .append("text")
              .attr("x", function(d,i){
                return i*200;
              })
              
              .attr("x",function(d,i) {
                  if ( i<7) {
  			   	        	return i*200;
                  } else if (i<14) {
                      return (i-7)*200
                  } else if (i<21) {
                      return (i-14)*200
                  } else {
                      return (i-21)*200
                  }
		        	})
              .attr("y", function(d,i) {
                  if ( i<7) {
  			   	  	      return -400 + lineSpacing*3
                  } else if (i<14) {
                      return -250 + lineSpacing*3
                  } else if (i<21) {
                      return -100 + lineSpacing*3
                  } else {
                      return 50 + lineSpacing*3
                  }      
		        	})
              .style("fill","#FFFAF0")
              .style("text-anchor", "start")
              .style("font-size", "12px")
              .style("font-family", "courier")
              .text(function(d) {
			   	     	return "Supply: " + d.cocoaproduction + "tons";
			        })
			        .attr("opacity",0.6)

        var mouseover = function(d) {
            d3.select(this)
              .attr('stroke', "#FFFAF0")
              .attr('stroke-width', 2)
        }

        var mouseleave = function(d) {
            d3.select(this)
              .attr('stroke', "none")


        } 




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
              .on("mouseover", mouseover)
              .on("mouseleave",mouseleave)

        }
    }
    
    
 
    for (var i=7; i<14; i++){
        siteSize.push(data[i].size);
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
              .on("mouseover", mouseover)
              .on("mouseleave",mouseleave)

        }
    }


    for (var i=14; i<21; i++){
        siteSize.push(data[i].size);
        colorBlock.push(data[i].color);
        // console.log ("color block:" , colorBlock[i])
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
              .on("mouseover", mouseover)
              .on("mouseleave",mouseleave)

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
              .on("mouseover", mouseover)
              .on("mouseleave",mouseleave)

        }
      
    } 


        console.log(siteSize)





});
