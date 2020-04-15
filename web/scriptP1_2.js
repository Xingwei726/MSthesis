var year =[];
var yearQuantity=[];

var margin = { top: 150, right: 40, bottom: 350, left: 50 },
    width2 = 1440 - margin.left - margin.right,
    width3 = 1440 - margin.left - margin.right,
    height3 = 2000 - margin.top - margin.bottom;
var numberFormat = d3.format(",.2r");



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
              .html(d.Year +": " + numberFormat(d.Tons) + ",000 tons") 
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

var country=[];
var kilograms=[];
var continent =[];

//Graph 3
d3.csv("./data/perCapita.csv").then(function(data) {
    for (var i=0; i<data.length; i++){
        country.push(data[i].country);
        kilograms.push(data[i].kilograms);
        continent.push(data[i].continent);
    }
    
        var perCapitaScale = d3.scaleLinear()
    	  .domain([0, 9])
      	  .range([1, 1440]);
      	  
        var svg4 = d3.select('#graph3')
          .append('svg')
          .attr('width', "100%")
          .attr('height', 700)

        var tooltip4 = d3.select("#graph3")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .append("div")
            .style("opacity", 0)
            .style("position", "absolute")
            .style("color", "#000000")
            .style("background", "#FFFAF0")
			.style("font-family", "gopher")
			.style("font-size", "14px")
            .style("padding", "8px")
            .style("z-index", "1000")

          
        var mouseover4 = function (d) {
               tooltip4
                  .style("opacity", 1)
                  .html(d.kilograms + " kilograms") 
                  .style("opacity", 1)
                  .style('left', (d3.event.pageX+12) + 'px')
                  .style('top', (d3.event.pageY) + 'px')
                   
                perCapita
                  .attr("width", perCapitaScale(d.kilograms))
                d3.select(this)
                  .transition ()
			      .style("font-size", "30px")
			      .style("opacity", 1)
        }
        
        var mouseleave4 = function (d) {
                tooltip4
                  .style("opacity", 0);

                // perCapita
                //   .attr("width", 10)            
                d3.select(this)
                  .transition ()
                  .attr("fill", "#FFFAF0")
			      .style("font-size", "50px")
			      .style("opacity", 0.5)
        }
    
        var background = svg4.append('g')
             .append('rect')
             .attr("x", 0) 
             .attr("width", "100%")
    	     .attr('y', 0)
             .attr("height", "100%")
             .attr('fill', '#000000')

        var perCapita = svg4.append('g')
             .append('rect')
             .attr("x", 0) 
             .attr("width", 10)
        	 .attr('y', 0)
             .attr("height", "100%")
             .attr('fill', 'tomato')
			   
        var countriesTitle = svg4.append('g')
               .append("text")
               .attr("x", 50)
			   .attr("y", -470)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "22px")
			   .style("font-weight", 800)
			   .attr("fill", "#FFFAF0")
			   .text( "What country consumes the most chocolate (in 2017)?")
			   .attr("transform", "translate(0, 530)")
			   
	    var countriesIntro = svg4.append('g')
               .append("text")
               .attr("x", 50)
			   .attr("y", -440)
			   .attr("text-anchor", "left")
			   .attr("font-family", "courier")
			   .style("font-size", "14px")
			   .style("font-weight", 400)
			   .attr("fill", "#FFFAF0")
			   .text("Unit: kilograms per capita")
			   .attr("transform", "translate(0, 530)")
	    
	    var countriesLegend = svg4.append('g')
              .append("text")
              .attr("x", 50)
			   .attr("y", -420)
			   .attr("text-anchor", "left")
			   .attr("font-family", "courier")
			   .style("font-size", "14px")
			   .style("font-weight", 800)
			   .attr("fill", "tomato")
			   .text("Hint: Hover over countries' names")
			   .attr("transform", "translate(0, 530)")
			   
		var perCapitaRuler = svg4.append("g")
	     	   .attr("transform", "translate(50,200)") 
		       .call(d3.axisBottom (perCapitaScale))
		


        
        var countries = svg4.append('g')
            .selectAll('text')
            .data(data)
            .enter()
            .append("text")
            .attr("class", "countries")
            .attr("x", function(d,i) {
                if ( i<4) {
			   		return 50+ i*370;
                } else if (i<8) {
                    return 50+ (i-4)*370
                } else if (i<12) {
                    return 50 + (i-8)*370
                } else if (i<16) {
                    return 50 + (i-12)*370
                } else if (i<20) {
                    return 50 + (i-16)*370
                } else {
                    return 50 + (i-20)*370
                }
			})
			.attr("y", function(d,i) {
                if ( i<4) {
			   		return 370
                } else if (i<8){
                    return 420
                } else if (i<12) {
                    return 470
                } else if (i<16) {
                    return 520
                } else if (i<20) {
                    return 570
                } else {
                    return 620
                }                
			})
			.attr("fill","#FFFAF0")
			.style("opacity", 0.5)
			.text(function(d) {
			   		return d.country;
			})
			
            .on("mouseover", mouseover4)
            // .on("mousemove", mousemove4)
            .on("mouseout", mouseleave4)
    

    
    
    
    
  
    

});