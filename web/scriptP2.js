// var size = 100;
// var groupSpacing = 5;
// var cellSpacing = 5;

var width = 1440,
    height = 700;

var margin = { top: 100, right: 50, bottom: 100, left: 50 },
    width2 = 1440 - margin.left - margin.right,
    height2 = 2000 - margin.top - margin.bottom;

var size = 9;
var groupSpacing = 3.5;
var cellSpacing = 2;
    
// //// 3.4 cocoa plantation methods (squares)
// var svg5 = d3.select('#method')
//     .append('svg')
//     .attr('width', 1440)
//     .attr('height', 1000)
//     .attr('background', '#000000')
//     .attr("transform", "translate(0," + margin.top + ")");

// var mouseover = function (d) {
//     d3.select(this)
//         .attr('width', size * 3 + cellSpacing * 2)
//         .attr('height', size * 3 + cellSpacing * 2)
//         .attr('fill', '#FFFAF0')
//         .attr('z-index', '200')
// }

// var mouseleave = function (d) {
//     d3.select(this)
//         .attr('fill', '#FFFAF0')
//         .attr('width', size)
//         .attr('height', size)
// }

// var totalGraph = svg5.selectAll('rect').append("g")
// totalGraph.data(d3.range(98))
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => {
//         //12 determines how many square in one row
//         var x0 = Math.floor(i / 100) % 14, x1 = Math.floor(i % 14);
//         return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 14);
//     })
//     .attr('y', (d, i) => {
//         var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 14);
//         return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 14) + 20;
//     })
//     .attr('width', size)
//     .attr('height', size)
//     .attr('fill', '#FFFAF0')
//     .attr("rx", 3)
//     .attr("ry", 3)
//     .attr('stroke-width', 2)
//     .on('mouseover', mouseover)
//     .on('mouseleave', mouseleave);



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



    
    
// var cocoaCalculator = svg
//     .append('rect')
//     .attr('x', 100)
//     .attr('y', 100)
//     .attr('width', 100)
//     .attr('height', 100)
//     .attr('fill', 'tomato')
//     .attr("rx", 3)
//     .attr("ry", 3)
//     .attr('stroke-width', 2)

// for loop to create 23 forests    
    // for (var i=0; i<7; i++){
        // siteSize.push(data[i].size);
        // // console.log(siteSize[i])
        // colorBlock.push(data[i].color);
        
// d3.csv("./data/forests.csv").then(function(data) {

var data1 = [{ category: "chocolate", cacao: 500 }]
var data2 = [{ category: "tree", cacao: 1200 }]

var svg = d3.select('#calculator')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('background', '#000000')
    .attr("transform", "translate(0," + margin.top + ")")
    .attr("transform","translate(" + width/2 + "," + 50 + ")")


var chocolateCacao = 500
var treeCacao = 1200
var podCacao = 40

        for (var z=0; z<chocolateCacao; z++){
          var chocolate = svg.append('g').selectAll('rect')
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
              .style('opacity',0)
              .attr('stroke-width', 2)
            //   .on("mouseover", mouseover)
            //   .on("mouseleave",mouseleave)
        }
        
        
        var tree = svg.append('g')
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
              .style('opacity',0)


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
              .style('opacity',0)        
        

var changeColor = function(data){

chocolate
    .style('opacity',data)
tree
    .style('opacity',0)    
pod
    .style('opacity',0)    

} 


var changeSize = function(data){
    
chocolate    
    .style('opacity',0)    
pod
    .style('opacity',data)    
tree
    .style('opacity',0)    

    
}

var changeShape = function(data){
chocolate
    .style('opacity',0)    

pod
    .style('opacity',0)    

tree
    .style('opacity',data)
    
}



// })