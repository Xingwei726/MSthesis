var year =[];
var yearQuantity=[];

var margin = { top: 150, right: 40, bottom: 350, left: 50 },
    width2 = 1440 - margin.left - margin.right,
    width3 = 1440 - margin.left - margin.right,
    height3 = 2000 - margin.top - margin.bottom;



//Graph2
d3.csv("./data/globalproductiontrend.csv").then(function(data) {
    for (var i=0; i<data.length; i++){
        year.push(data[i].Year);
        yearQuantity.push(data[i].Tons);
    }

        var yScale = d3.scaleLinear()
          .domain([0, 5000])
          .range([0, height3-margin.top-margin.bottom])
    
        var tooltip2 = d3.select("#graph2")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .append("div")
            .style("opacity", 0)
            .style("position", "absolute")
            .style("color", "tomato")
            .style("background", "black")
			.style("font-family", "gopher")
			.style("font-size", "14px")
            .style("padding", "8px")
            .style("z-index", "1000")

        var mouseover2 = function(d) {
            tooltip2
              .style("opacity", 1)
              .html("Year "+ d.Year +": " + d.Tons + " ") 
              .style("opacity", 1)
              .style('left', (d3.event.pageX+12) + 'px')
              .style('top', (d3.event.pageY-34) + 'px')
            d3.select(this)
              .attr('fill', "tomato")
              .style("z-index", "0")
        }

        var mouseleave2 = function(d) {
            tooltip2
              .style("opacity", 0)
            d3.select(this)
              .attr('fill', '#FFFAF0');
        }  

        var svg3 = d3.select('#graph2')
          .append('svg')
          .attr('width', width3)
          .attr('height', height3+200)//200 is the space for legend
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          
          svg3.append('g')
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr("x", function(d,i) {
			  return 30+i*33;
    	  }) 
          .attr("width", 30)
    	  .attr('y', function(d) { 
    	      return height3 - yScale(d.Tons); 
    	  })
          .attr("height", function(d) {
			  return yScale(d.Tons);
    	  })
          .attr('fill', '#FFFAF0')
          .attr('stroke-width', 2)
          .on('mouseover', mouseover2)
          .on('mouseleave', mouseleave2)
        
              

// Graph2 Title
          svg3.append("text")
			   .attr("x", 0)
			   .attr("y", 0)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "36px")
			   .attr("fill", "#FFFAF0")
			   .text( "Global Cocoa Production")
			   .attr("transform", "translate(0, 530)")

//Unit (static)
          svg3.append("text")
			   .attr("x", 0)
			   .attr("y", 0)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "18px")
			   .attr("fill", "#FFFAF0")
			   .text( "Unit: 1,000tons")
			   .attr("transform", "translate(0, 560)")

//Year Legend
		  svg3.selectAll("text")
			   .data(data)
			   .enter()
			   .append("text")
               .attr("x", function(d,i) {
         		  return 30+i*33;
               }) 
			   .attr("y", 1520 )
			   .attr("text-anchor", "left")
			   .attr("font-family", "sans-serif")
			   .style("font-size", "12px")
			   .attr("fill", "#FFFAF0")
			   .text(function(d) {
			   		return d.Year;
			   })

		  svg3.append("text")
               .attr("x", 30) 
			   .attr("y", 1520 )
			   .attr("text-anchor", "left")
			   .attr("font-family", "sans-serif")
			   .style("font-size", "12px")
			   .attr("fill", "#FFFAF0")
			   .text("1981")

		  svg3.append("text")
               .attr("x", 63) 
			   .attr("y", 1520 )
			   .attr("text-anchor", "left")
			   .attr("font-family", "sans-serif")
			   .style("font-size", "12px")
			   .attr("fill", "#FFFAF0")
			   .text("1982")

         
//Line 4000
        svg3.append("svg:line")
            .attr("x1", 30)
            .attr("y1", 700)
            .attr("x2", width3)
            .attr("y2", 700)
            .style("stroke", "#000000")
            .style("stroke-width", 3);
            
        svg3.append("svg:line")
            .attr("x1", 0)
            .attr("y1", 700)
            .attr("x2", 20)
            .attr("y2", 700)
            .style("stroke", "white")
            .style("stroke-width", 2);

        svg3.append("text")
			.attr("x", 0)
			.attr("y", 693)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("4000") 
            
            
//Line 3000
        svg3.append("svg:line")
            .attr("x1", 30)
            .attr("y1", 900)
            .attr("x2", width3)
            .attr("y2", 900)
            .style("stroke", "#000000")
            .style("stroke-width", 3);

        svg3.append("svg:line")
            .attr("x1", 0)
            .attr("y1", 900)
            .attr("x2", 20)
            .attr("y2", 900)
            .style("stroke", "white")
            .style("stroke-width", 2);

        svg3.append("text")
			.attr("x", 0)
			.attr("y", 893)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("3000") 

//Line 2000
        svg3.append("svg:line")
            .attr("x1", 30)
            .attr("y1", 1100)
            .attr("x2", width3)
            .attr("y2", 1100)
            .style("stroke", "#000000")
            .style("stroke-width", 3);

        svg3.append("svg:line")
            .attr("x1", 0)
            .attr("y1", 1100)
            .attr("x2", 20)
            .attr("y2", 1100)
            .style("stroke", "white")
            .style("stroke-width", 2);

        svg3.append("text")
			.attr("x", 0)
			.attr("y", 1093)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("2000") 

//Line 1000
        svg3.append("svg:line")
            .attr("x1", 30)
            .attr("y1", 1300)
            .attr("x2", width3)
            .attr("y2", 1300)
            .style("stroke", "#000000")
            .style("stroke-width", 3);

        svg3.append("svg:line")
            .attr("x1", 0)
            .attr("y1", 1300)
            .attr("x2", 20)
            .attr("y2", 1300)
            .style("stroke", "white")
            .style("stroke-width", 2);
            
        svg3.append("svg:line")
            .attr("x1", 0)
            .attr("y1", 1500-2)
            .attr("x2", 20)
            .attr("y2", 1500-2)
            .style("stroke", "white")
            .style("stroke-width", 2);

        svg3.append("text")
			.attr("x", 0)
			.attr("y", 1293)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("1000") 
			
        svg3.append("text")
			.attr("x", 0)
			.attr("y", 1493)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("0") 


//Right Side			
//Line 4000
        svg3.append("svg:line")
            .attr("x1", width2-30)
            .attr("y1", 700)
            .attr("x2", width2-10)
            .attr("y2", 700)
            .style("stroke", "white")
            .style("stroke-width", 2);

        svg3.append("text")
            .attr("x", width2-30)
			.attr("y", 693)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("4000") 
            
            
//Line 3000
        svg3.append("svg:line")
            .attr("x1", width2-30)
            .attr("y1", 900)
            .attr("x2", width2-10)
            .attr("y2", 900)
            .style("stroke", "white")
            .style("stroke-width", 2);

        svg3.append("text")
            .attr("x", width2-30)
			.attr("y", 893)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("3000") 

//Line 2000
        svg3.append("svg:line")
            .attr("x1", width2-30)
            .attr("y1", 1100)
            .attr("x2", width2-10)
            .attr("y2", 1100)
            .style("stroke", "white")
            .style("stroke-width", 2);

        svg3.append("text")
            .attr("x", width2-30)
			.attr("y", 1093)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("2000") 

//Line 1000
        svg3.append("svg:line")
            .attr("x1", width2-30)
            .attr("y1", 1300)
            .attr("x2", width2-10)
            .attr("y2", 1300)
            .style("stroke", "white")
            .style("stroke-width", 2);
            
        svg3.append("svg:line")
            .attr("x1", width2-30)
            .attr("y1", 1500-2)
            .attr("x2", width2-10)
            .attr("y2", 1500-2)
            .style("stroke", "white")
            .style("stroke-width", 2);

        svg3.append("text")
            .attr("x", width2-30)
			.attr("y", 1293)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("1000") 
			
        svg3.append("text")
            .attr("x", width2-30)
			.attr("y", 1493)
			.attr("text-anchor", "left")
			.attr("font-family", "sans-serif")
			.style("font-size", "12px")
			.attr("fill", "#FFFAF0")
			.text("0") 



});