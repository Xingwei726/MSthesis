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






var svg = d3.select('#calculator')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('background', '#000000')
    .attr("transform", "translate(0," + 50 + ")")


var chocolateCacao = 500
var treeCacao = 1200
var podCacao = 40

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
            //   .on("mouseover", mouseover)
            //   .on("mouseleave",mouseleave)

        
        
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


        var pod = svg.append('g').selectAll('rect')
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
        

// var changeColor = function(data){

// chocolate
//     .style('opacity',data)
// // tree
// //     .style('opacity',0)    
// // pod
// //     .style('opacity',0)    

// } 