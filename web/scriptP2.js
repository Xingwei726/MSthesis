var size2 = 9;
var groupSpacing2 = 3.5;
var cellSpacing2 = 2;

var width = 1440,
    height = 700;

var margin = { top: 100, right: 50, bottom: 100, left: 50 },
    width2 = 1440 - margin.left - margin.right,
    height2 = 2000 - margin.top - margin.bottom;

var size = 12;
var groupSpacing = 5;
var cellSpacing = 1;



// 2.0 Homepage Circle Unit Legend
var svg = d3.select('#round-unit')
      .append('svg')
      .attr('width', width)
      .attr('height', height); 
      
    svg.selectAll('rect')
      .data(d3.range(100))
      .enter()
      .append('rect')
      .attr('x', (d, i) => {
          var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
          return groupSpacing2 * x0 + (cellSpacing2 + size2) * (x1 + x0 * 10);
      })
      .attr('y', (d, i) => {
          var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
          return groupSpacing2 * y0 + (cellSpacing2 + size2) * (y1 + y0 * 10);
      }) 
      .attr('width', size2)
      .attr('height', size2)
      .attr('fill', i => (i < 99 ?  '#FFFAF0': 'tomato'))
      .attr('stroke-width', 2)
      .attr("transform", "translate(270, 480)")
      .attr("rx",10)
      .attr("ry",10)
      .on('mouseover', function(d){
          d3.select(this)
          .attr('fill',"tomato")
      })
      .on('mouseleave', function(d){
          d3.select(this)
      .attr('fill', i => (i < 99 ?  '#FFFAF0': 'tomato'))
      });


    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });




// 2.1 Cocoa Calculator

    var svg = d3.select('#calculator')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('background', '#000000')
        .attr("transform", "translate(0," + 50 + ")")
    
    
    var chocolateCacao = 500
    var treeCacao = 1200
    var podCacao = 40

        var mouseover = function(d) {
                d3.select(this)
                  .attr('fill', "tomato")
                //   .attr('stroke-width', 2)
        }
    
        var mouseleave = function(d) {
                d3.select(this)
                  .attr('fill', "#000000")
        } 
        

        var equal = svg.append ('text')
			   .attr("x", 450)
			   .attr("y", 100)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "36px")
			   .style("font-weight",800)
			   .attr("fill", "#000000")
			   .text("=")
			   .style('opacity',1)

        var chocoLegend = svg.append ('text')
			   .attr("x", 50)
			   .attr("y", 100)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "36px")
			   .style("font-weight",800)
			   .attr("fill", "#000000")
			   .text("1 pound of chocolate")
			   .style('opacity',1)
		
        var podLegend = svg.append ('text')
			   .attr("x", 200)
			   .attr("y", 100)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "36px")
			   .style("font-weight",800)
			   .attr("fill", "#000000")
			   .text("1 cacao pod")
			   .style('opacity',0)

        var treeLegend = svg.append ('text')
			   .attr("x", 100)
			   .attr("y", 100)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "36px")
			   .style("font-weight",800)
			   .attr("fill", "#000000")
			   .text("1 cacao tree")
			   .style('opacity',0)

        var treeLegend2 = svg.append ('text')
			   .attr("x", 100)
			   .attr("y", 150)
			   .attr("text-anchor", "left")
			   .attr("font-family", "gopher")
			   .style("font-size", "36px")
			   .style("font-weight",800)
			   .attr("fill", "#000000")
			   .text("(annual production)")
			   .style('opacity',0)



        
          var chocolate = svg.append('g')
              .attr("transform","translate(" + 550 + "," + 50 + ")")
              .selectAll('rect')
              .data(d3.range(chocolateCacao))
              .enter()
              .append('rect')
              .attr('x', (d, i) => {
                  var x0 = Math.floor(i / 100) % 5, x1 = Math.floor(i % 10);
                  return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 10);
              })
              .attr('y', (d, i) => {
                  var y0 = Math.floor(i / 500), y1 = Math.floor(i % 100 / 10);
                  return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 10);
              }) 
              .attr('width', size)
              .attr('height', size)
              .attr('fill', '#000000')
              .style('opacity',1)
              .attr('stroke-width', 2)
              .attr("rx",10)
              .attr("ry",10)
              .on("mouseover", mouseover)
              .on("mouseleave",mouseleave)
		var chocoLegendS = svg.append ('text')
			   .attr("x", 550)
			   .attr("y", 40)
			   .attr("text-anchor", "left")
			   .attr("font-family", "courier")
			   .style("font-size", "14px")
			   .style("font-weight",800)
			   .attr("fill", "#000000")
			   .text("500 cacao beans")
			   .style('opacity',1)
        
        var tree = svg.append('g')
              .attr("transform","translate(" + 550 + "," + 0 + ")")
              .selectAll('rect')
              .data(d3.range(treeCacao))
              .enter()
              .append('rect')
              .attr('x', (d, i) => {
                  var x0 = Math.floor(i / 100) % 5, x1 = Math.floor(i % 10);
                  return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 10);
              })
              .attr('y', (d, i) => {
                  var y0 = Math.floor(i / 500), y1 = Math.floor(i % 100 / 10);
                  return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 10);
              }) 
              .attr('width', size)
              .attr('height', size)
              .attr('fill', '#000000')
              .attr("rx",10)
              .attr("ry",10)
              .style('opacity',0)
              .on("mouseover", mouseover)
              .on("mouseleave",mouseleave) 
        var treeLegendS = svg.append ('text')
			   .attr("x", 820)
			   .attr("y", 300)
			   .attr("text-anchor", "left")
			   .attr("font-family", "courier")
			   .style("font-size", "14px")
			   .style("font-weight",800)
			   .attr("fill", "#000000")
			   .text("1200 cacao beans")
			   .style('opacity',0)              


        var pod = svg.append('g')
              .attr("transform","translate(" + 550 + "," + 60 + ")")
              .selectAll('rect')
              .data(d3.range(podCacao))
              .enter()
              .append('rect')
              .attr('x', (d, i) => {
                  var x0 = Math.floor(i / 100) % 5, x1 = Math.floor(i % 10);
                  return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 10);
              })
              .attr('y', (d, i) => {
                  var y0 = Math.floor(i / 500), y1 = Math.floor(i % 100 / 10);
                  return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 10);
              }) 
              .attr('width', size)
              .attr('height', size)
              .attr('fill', '#000000')
              .attr("rx",10)
              .attr("ry",10)
              .style('opacity',0)
              .on("mouseover", mouseover)
              .on("mouseleave",mouseleave)
        var podLegendS = svg.append ('text')
			   .attr("x", 550)
			   .attr("y", 40)
			   .attr("text-anchor", "left")
			   .attr("font-family", "courier")
			   .style("font-size", "14px")
			   .style("font-weight",800)
			   .attr("fill", "#000000")
			   .text("30 cacao beans")
			   .style('opacity',0)


        var changeChocolate = function(data){
        
            chocolate.style('opacity',data)
            tree.style('opacity',0)    
            pod.style('opacity',0)    
            
            chocoLegend.style('opacity',data)
            treeLegend.style('opacity',0)
            treeLegend2.style('opacity',0)
            podLegend.style('opacity',0)
            
            chocoLegendS.style('opacity',data)
            treeLegendS.style('opacity',0)
            podLegendS.style('opacity',0)    
        } 

        var changePod = function(data){
        
            chocolate.style('opacity',0)
            tree.style('opacity',0)    
            pod.style('opacity',data)    
            
            chocoLegend.style('opacity',0)
            treeLegend.style('opacity',0)
            treeLegend2.style('opacity',0)
            podLegend.style('opacity',data)
        
            chocoLegendS.style('opacity',0)
            treeLegendS.style('opacity',0)
            podLegendS.style('opacity',data)    
        } 

        var changeTree = function(data){
        
            chocolate.style('opacity',0)
            tree.style('opacity',data)    
            pod.style('opacity',0)    
            
            chocoLegend.style('opacity',0)
            treeLegend.style('opacity',data)
            treeLegend2.style('opacity',data)
            podLegend.style('opacity',0)
            
            chocoLegendS.style('opacity',0)
            treeLegendS.style('opacity',data)
            podLegendS.style('opacity',0)    
        } 



// 2.3 Country Capita Formula

    // var svg2 = d3.select('#capita')
    //   .append('svg')
    //   .attr('width', width2)
    //   .attr('height', 1000)
    //   .attr('background','#000000')
    //   .attr("transform", "translate(" + margin.left + ",0)");
      
var countryName = []
var countryPound=[]
var countryTree=[]
var countryBean=[]
var lineSpace =150;
// var cellSpacing3 = 2;
// var forestSpacing = 200;
// // var lineSpacing =15;
// var size3=10;

d3.csv("./data/capitaFormula.csv").then(function(data) {

    for (var i=0; i<data.length; i++){
        countryName.push(data[i].country);
        countryPound.push(data[i].pound);
        countryBean.push(data[i].country);
        countryTree.push(data[i].pound);

    }




var svg2 = d3.select('#capita')
    .append('svg')
    .attr('width', width2)
    .attr('height', 4500)
    .attr('background','#000000')
    .attr("transform", "translate(50,100)");  

//legend
svg2.append("g")
    .append ("text")
	.attr("x", 100)
    .attr("y", 150)
	.attr("text-anchor", "left")
	.attr("font-family", "gopher")
	.style("font-size", "12px")
    .style("font-weight",800)
	.attr("fill", "#FFFAF0")
	.text("Country Name")
    .style('opacity',1)
    
svg2.append("g")
    .append ("text")
	.attr("x", 100)
    .attr("y", 165)
	.attr("text-anchor", "left")
	.attr("font-family", "gopher")
	.style("font-size", "12px")
    .style("font-weight",800)
	.attr("fill", "#FFFAF0")
	.text("Pound of Chocolate")
    .style('opacity',1)

svg2.append("g")
    .append ("text")
	.attr("x", 100)
    .attr("y", 180)
	.attr("text-anchor", "left")
	.attr("font-family", "gopher")
	.style("font-size", "12px")
    .style("font-weight",800)
	.attr("fill", "#FFFAF0")
	.text("Number of Cacao Beans")
    .style('opacity',1)

svg2.append("g")
    .append ("text")
	.attr("x", 530)
    .attr("y", 150)
	.attr("text-anchor", "left")
	.attr("font-family", "gopher")
	.style("font-size", "12px")
    .style("font-weight",800)
	.attr("fill", "#FFFAF0")
	.text("Number of Cacao Trees' Annual Production")
    .style('opacity',1)


//country names
svg2.append("g")
    .attr("transform", "translate(0,200)") 
    .selectAll("text")
    .data(data)
    .enter()
    .append ("text")
	.attr("x", 100)
    .attr("y", function(d,i){
        return 40 + i*lineSpace
    })
	.attr("text-anchor", "left")
	.attr("font-family", "gopher")
	.style("font-size", "12px")
    .style("font-weight",400)
	.attr("fill", "#FFFAF0")
	.text(function(d) {
		return d.country;
	})
    .style('opacity',1)

//No.pound
//add tooltip to show unit measurement
svg2.append("g")
    .attr("transform", "translate(0,200)") 
    .selectAll("text")
    .data(data)
    .enter()
    .append ("text")
	.attr("x", 100)
    .attr("y", function(d,i){
        return 55 + i*lineSpace
    })
	.attr("text-anchor", "left")
	.attr("font-family", "gopher")
	.style("font-size", "12px")
    .style("font-weight",400)
	.attr("fill", "#FFFAF0")
	.text(function(d) {
		return d.pound;
	})
    .style('opacity',1)

//No.beans
svg2.append("g")
    .attr("transform", "translate(0,200)") 
    .selectAll("text")
    .data(data)
    .enter()
    .append ("text")
	.attr("x", 100)
    .attr("y", function(d,i){
        return 70 + i*lineSpace
    })
	.attr("text-anchor", "left")
	.attr("font-family", "gopher")
	.style("font-size", "12px")
    .style("font-weight",400)
	.attr("fill", "#FFFAF0")
	.text(function(d) {
		return d.cocoa;
	})
    .style('opacity',1)
    


//No.trees
svg2.append("g")
    .attr("transform", "translate(0,200)") 
    .selectAll("text")
    .data(data)
    .enter()
    .append ("text")
	.attr("x", 530)
    .attr("y", function(d,i){
        return 70 + i*lineSpace
    })
	.attr("text-anchor", "left")
	.attr("font-family", "gopher")
	.style("font-size", "50px")
    .style("font-weight",800)
	.attr("fill", "#FFFAF0")
	.text(function(d) {
		return d.tree +" trees";
	})
    .style('opacity',1)





});