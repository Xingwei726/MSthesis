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




var width = 1220,
    height = 1000;
        
var svg = d3.select('#intro')
      .append('svg')
      .attr('width', width)
      .attr('height', height); 


//square legend units      
        const numPerRow = 10
        const size = 10
        const groupSpacing = 3.5;
        const cellSpacing = 2;


        const scale = d3.scaleLinear()
          .domain([0, numPerRow -1])
          .range([0, size * numPerRow]);
          
        svg.selectAll('rect')
          .data(d3.range(100))
          .enter()
          .append('rect')
          .attr('x', (d, i) => {
            // const n = i % numPerRow
            // return scale(n)
          var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
          return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 10);
          })
          .attr('y', (d, i) => {
            // const n = Math.floor(i / 10)
            // return scale(n)
          var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
          return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 10);
          }) 
          .attr('width', size)
          .attr('height', size)
        //   .attr('fill', 'tomato')
          .attr('fill', '#FFFAF0')
          .attr('stroke-width', 2)
          .attr("transform", "translate(270, 480)");
          
//square legend text  
// svg.append("text")
//         .attr("x", -15)
//         .attr("y", -10)
//         .attr("text-anchor", "left")
//         .style("font-size", "14px")
//         .style("fill", "#FFFFFF")
//         .text("Hour");
        


var margin = { top: 150, right: 100, bottom: 350, left: 40 },
    width2 = 1440 - margin.left - margin.right,
    height2 = 2000 - margin.top - margin.bottom;
        
var svg2 = d3.select('#graph1')
      .append('svg')
      .attr('width', width2)
      .attr('height', height2)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
var totalGraph = svg2.selectAll('rect')
          .data(d3.range(4831))
          .enter()
          .append('rect')
          .attr('x', (d, i) => {
            // const n = i % numPerRow
            // return scale(n)
          var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
          return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 10);
          })
          .attr('y', (d, i) => {
            // const n = Math.floor(i / 10)
            // return scale(n)
          var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
          return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 10)+800-20;
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
totalGraph.transition()
          .attr('width', size)
          .attr('height', size)
          .attr('fill', '#FFFAF0')
        //   .delay(function(d,i) {
        //       return i * 20;
        //   })
          .duration(500)