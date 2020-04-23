var width = 1440,
    height = 700;

var margin = { top: 100, right: 50, bottom: 100, left: 50 },
    width2 = 1440 - margin.left - margin.right,
    height2 = 2000 - margin.top - margin.bottom;


//barcode on homepage
d3.xml("./images/bc.svg")
    .then(data => {
        d3.select("#svg-container2").node().append(data.documentElement)
    });


//Interaction

var mouseover = function (d) {
    d3.select(this)
        .attr("x", width2/2+15) 
        .style("font-weight",600)
}

var mouseleave = function (d) {
    d3.select(this)
        .attr("x", width2/2)
        .style("font-weight",400)
        
}

var mouseover2 = function (d) {
    d3.select(this)
        .attr("x", width2/2+550-15)        
        .style("font-weight",600)
}

var mouseleave2 = function (d) {
    d3.select(this)
        .attr("x", width2/2+550)
        .style("font-weight",400)
}


//tooltip for barcode
var mouseover3 = function (d) {
    d3.select(this)
        .attr("fill", "tomato")        
        .style("font-weight",600)
        .style("stroke-width", 2);

}

var mouseleave3 = function (d) {
    d3.select(this)
        .attr("fill", "#000000")        
        .style("font-weight",400)
        .style("stroke-width", 0);

}



//legend
    var svg = d3.select("#youtube")
        .append("svg")
        .attr("width", width2 + margin.left + margin.right)
        .attr("height", height2 + margin.top + margin.bottom)
        // .attr("transform","translate(" + 0 + "," + -700 + ")")
        .append("g")
        
        svg
        .append("text")
        .attr("x", 0)
        .attr("y", 300)
        .style("text-anchor", "start")
        .style("font-size", "12px")
        .style("font-family", "courier")
	    .attr("fill", "#000000")
        .text("(If we search “chocolate bath challenge” on youtube, more than 100 videos would show up and the lastest was uploaded two weeks ago. )");  


    

//Graph 1---leading companies' revenue
d3.csv("./data/companiesCommitment.csv").then(function (data) {

    var svg2 = d3.select("#revenue")
        .append("svg")
        .attr("width", width2 + margin.left + margin.right)
        .attr("height", height2 + margin.top + margin.bottom)
        .attr("transform","translate(" + 0 + "," + -150 + ")")
        .append("g")

//graph title--Market Revenue in 2019
    svg2.append("g")
        .append("text")
        .attr("x", width2/2)
        .attr("y", 100)
        .style("text-anchor", "start")
        .style("font-size", "28px")
        .style("font-family", "gopher")
        .style("font-weight",400)
	    .attr("fill", "#000000")
        .text("Leading Confectionery Companies")
 
//graph title2--Leading Confectionery Companies
    svg2.append("g")
        .append("text")
        .attr("x", width2/2)
        .attr("y", 145)
        .style("text-anchor", "start")
        .style("font-size", "14px")
        .style("font-family", "gopher")
        .style("font-weight",600)
	    .attr("fill", "#000000")
        .text("2019 Market Revenue");
 
//graph title3---Serving Size: 10
    svg2.append("g")
        .append("text")
        .attr("x", width2/2)
        .attr("y", 165)
        .style("text-anchor", "start")
        .style("font-size", "14px")
        .style("font-family", "gopher")
        .style("font-weight",600)
	    .attr("fill", "#000000")
        .text("Serving Size: 10");       

//graph title4---Net Sales
    svg2.append("g")
        .append("text")
        .attr("x", width2/2)
        .attr("y", 520)
        .style("text-anchor", "start")
        .style("font-size", "20px")
        .style("font-family", "gopher")
        .style("font-weight",400)
	    .attr("fill", "#000000")
        .text("Net Sales");  

//graph title4---Net Sales
    svg2.append("g")
        .append("text")
        .attr("x", width2/2+550)
        .attr("y", 520)
        .style("text-anchor", "end")
        .style("font-size", "20px")
        .style("font-family", "gopher")
        .style("font-weight",400)
	    .attr("fill", "#000000")
        .text("82,249 million dollars");  

//graph legend---unit
    svg2.append("g")
        .append("text")
        .attr("x", width2/2+550)
        .attr("y", 165)
        .style("text-anchor", "end")
        .style("font-size", "14px")
        .style("font-family", "gopher")
	    .attr("fill", "#000000")
        .text("(Unite: million dollars)");    
        
//Company Name            
    svg2.append("g")
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", width2/2)
        .attr("y", function(d,i){
            return 200+i*30
        })
        .style("text-anchor", "start")
        .style("font-size", "14px")
        .style("font-family", "gopher")
	    .attr("fill", "#000000")
        .text(function (d, i) {
           return d.company
        })
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave)

//Company Revenue            
    svg2.append("g")
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", width2/2+550)
        .attr("y", function(d,i){
            return 200+i*30
        })
        .style("text-anchor", "end")
        .style("font-size", "14px")
        .style("font-family", "courier")
	    .attr("fill", "#000000")
        .text(function (d, i) {
           return d.revenue
        })
        .on("mouseover", mouseover2)
        .on("mouseleave", mouseleave2)


//All middle lines
    svg2.append("g")
        .selectAll("line")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", width2/2)
        .attr("x2", width2/2+550)
        .attr("y1", function(d,i){
            return 180+i*30
        })
        .attr("y2", function(d,i){
            return 180+i*30
        })
        .style("stroke-dasharray", ("3, 3"))
        .style("stroke", "#000000")
        .style("stroke-width", 1);

    svg2
        .append("line")
        .attr("x1", width2/2)
        .attr("x2", width2/2+550)
        .attr("y1", 60)
        .attr("y2", 60)
        .style("stroke", "#000000")
        .style("stroke-width", 5);


    svg2
        .append("line")
        .attr("x1", width2/2)
        .attr("x2", width2/2+550)
        .attr("y1", 120)
        .attr("y2", 120)
        .style("stroke", "#000000")
        .style("stroke-width", 1);

    svg2
        .append("line")
        .attr("x1", width2/2)
        .attr("x2", width2/2+550)
        .attr("y1", 485)
        .attr("y2", 485)
        .style("stroke", "#000000")
        .style("stroke-width", 1);
       
});



//Graph2---barcode

var improvingWA =[];
var agroforestry =[];
var deforestationFree=[];
var waterUsage=[];
var traceability=[];
var livingIncome=[];
var barHeight=90;
var barMargin=22;

d3.csv("./data/companiesCommitment.csv").then(function (data) {


    // for (var i=0; i<data.length; i++){
        // improvingWA.push(data[i].improvingWA);
        // agroforestry.push(data[i].agroforestry);
        // deforestationFree.push(data[i].deforestationFree);
        // waterUsage.push(data[i].waterUsage);        
        // traceability.push(data[i].traceability);
        // livingIncome.push(data[i].livingIncome);  
    // }

    var svg3 = d3.select("#barcode")
        .append("svg")
        .attr("width", width2 + margin.left + margin.right)
        .attr("height", height2 + margin.top + margin.bottom)
        .append("g")
    
//"4"for yes, "2" for "maybe", "1" for no  
// 0.improvingWA
    svg3.append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr('x', function(d,i){
            return width/5 + i*250
        })
        
        .attr("x",function(d,i) {
            if ( i<4) {
         	  return width/4 + i*250;
            } else if (i<8) {
              return width/4 + (i-4)*250
            } else  {
              return width/4 + (i-8)*250
            } 
    	})
        .attr("y",function(d,i) {
            if ( i<4) {
         	  return 80;
            } else if (i<8) {
              return 280;
            } else  {
              return 480;
            } 
    	})
        .attr('width', function(d,i){
            return d.improvingWA*5
        })
        .attr('height', barHeight)
        .attr('stroke', '#FFFAF0')
        .attr('stroke-width', 0)
        .attr('fill', '#000000')
        .on("mouseover", mouseover3)
        .on("mouseleave", mouseleave3)
        

// 1.agroforestry
    svg3.append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr('x', function(d,i){
            return width/5 + i*250
        })
        
        .attr("x",function(d,i) {
            if ( i<4) {
         	  return width/4 + i*250+barMargin;
            } else if (i<8) {
              return width/4 + (i-4)*250+barMargin;
            } else  {
              return width/4 + (i-8)*250+barMargin;
            } 
    	})
        .attr("y",function(d,i) {
            if ( i<4) {
         	  return 80;
            } else if (i<8) {
              return 280;
            } else  {
              return 480;
            } 
    	})
        .attr('width', function(d,i){
            return d.agroforestry*5
        })
        .attr('height', barHeight)
        .attr('stroke', '#FFFAF0')
        .attr('stroke-width', 0)
        .attr('fill', '#000000')       
        .on("mouseover", mouseover3)
        .on("mouseleave", mouseleave3)


// 2.deforestationFree
    svg3.append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr('x', function(d,i){
            return width/5 + i*250
        })
        
        .attr("x",function(d,i) {
            if ( i<4) {
         	  return width/4 + i*250+barMargin*2;
            } else if (i<8) {
              return width/4 + (i-4)*250+barMargin*2;
            } else  {
              return width/4 + (i-8)*250+barMargin*2;
            } 
    	})
        .attr("y",function(d,i) {
            if ( i<4) {
         	  return 80;
            } else if (i<8) {
              return 280;
            } else  {
              return 480;
            } 
    	})
        .attr('width', function(d,i){
            return d.deforestationFree*5
        })
        .attr('height', barHeight)
        .attr('stroke', '#FFFAF0')
        .attr('stroke-width', 0)
        .attr('fill', '#000000')        
        .on("mouseover", mouseover3)
        .on("mouseleave", mouseleave3)


// 3.waterUsage
    svg3.append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr('x', function(d,i){
            return width/5 + i*250
        })
        
        .attr("x",function(d,i) {
            if ( i<4) {
         	  return width/4 + i*250+barMargin*3;
            } else if (i<8) {
              return width/4 + (i-4)*250+barMargin*3;
            } else  {
              return width/4 + (i-8)*250+barMargin*3;
            } 
    	})
        .attr("y",function(d,i) {
            if ( i<4) {
         	  return 80;
            } else if (i<8) {
              return 280;
            } else  {
              return 480;
            } 
    	})
        .attr('width', function(d,i){
            return d.waterUsage*5
        })
        .attr('height', barHeight)
        .attr('stroke', '#FFFAF0')
        .attr('stroke-width', 0)
        .attr('fill', '#000000')   
        .on("mouseover", mouseover3)
        .on("mouseleave", mouseleave3)
 
 // 4.traceability
    svg3.append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr('x', function(d,i){
            return width/5 + i*250
        })
        
        .attr("x",function(d,i) {
            if ( i<4) {
         	  return width/4 + i*250+barMargin*4;
            } else if (i<8) {
              return width/4 + (i-4)*250+barMargin*4;
            } else  {
              return width/4 + (i-8)*250+barMargin*4;
            } 
    	})
        .attr("y",function(d,i) {
            if ( i<4) {
         	  return 80;
            } else if (i<8) {
              return 280;
            } else  {
              return 480;
            } 
    	})
        .attr('width', function(d,i){
            return d.traceability*5
        })
        .attr('height', barHeight)
        .attr('stroke', '#FFFAF0')
        .attr('stroke-width', 0)
        .attr('fill', '#000000')    
        .on("mouseover", mouseover3)
        .on("mouseleave", mouseleave3)
    
 // 5.livingIncome
    svg3.append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr('x', function(d,i){
            return width/5 + i*250
        })
        
        .attr("x",function(d,i) {
            if ( i<4) {
         	  return width/4 + i*250+barMargin*5;
            } else if (i<8) {
              return width/4 + (i-4)*250+barMargin*5;
            } else  {
              return width/4 + (i-8)*250+barMargin*5;
            } 
    	})
        .attr("y",function(d,i) {
            if ( i<4) {
         	  return 80;
            } else if (i<8) {
              return 280;
            } else  {
              return 480;
            } 
    	})
        .attr('width', function(d,i){
            return d.livingIncome*5
        })
        .attr('height', barHeight)
        .attr('stroke', '#FFFAF0')
        .attr('stroke-width', 0)
        .attr('fill', '#000000')       
        .on("mouseover", mouseover3)
        .on("mouseleave", mouseleave3)   
    
    
    


})