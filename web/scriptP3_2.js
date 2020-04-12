
var margin = { top: 150, right: 40, bottom: 350, left: 50 },
    width3 = 1440 - margin.left - margin.right,
    height3 = 2000 - margin.top - margin.bottom;

var size3 = 10;
// uncomment to add group space
// var groupSpacing3 = 2;
var cellSpacing3 = 2;
var forestSpacing = 200;

var siteSize =[]
d3.csv("./data/forests.csv").then(function(data) {
    
    var svg2 = d3.select('#forests')
      .append('svg')
      .attr('width', width3)
      .attr('height', height3)
      .attr('background','#000000')
      .attr("transform", "translate(30,0)");  
      
    // var forest = svg2.selectAll('rect').append("g")

    
    for (var i=0; i<data.length; i++){
        siteSize.push(data[i].size);
        console.log(siteSize[i])
        // svg2.selectAll('rect')
        //       .append("g")
        //       .data(d3.range(siteSize[i]/10))
        //       .enter()
        //       .append('rect')
        //     //   .attr("transform", "translate(" + i*10 + ",0)") 
        //       .attr('x', (d, i) => {
        //         //uncomment to add group space
        //         //   var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
        //         //   return groupSpacing3 * x0 + (cellSpacing3 + size3) * (x1 + x0 * 10);
        //           var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
        //           return (cellSpacing3 + size3) * (x1 + x0 * 10);
        //       })
        //       .attr('y', (d, i) => {
        //         //uncomment to add group space
        //         //   var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
        //         //   return groupSpacing3 * y0 + (cellSpacing3 + size3) * (y1 + y0 * 10);
        //           var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
        //           return (cellSpacing3 + size3) * (y1 + y0 * 10);
        //       }) 
        //       .attr('width', size3)
        //       .attr('height', size3)
        //       .attr('fill', '#FFFAF0')
        //       .attr('stroke-width', 2)  
              
     }
    
    console.log("Site Size:",siteSize);


      
  
    var forest = svg2.selectAll('rect').append("g")

    var forest1 = forest
          .data(d3.range(siteSize[0]/10))
          .enter()
          .append('rect')
          .attr('x', (d, i) => {
            //uncomment to add group space
            //   var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
            //   return groupSpacing3 * x0 + (cellSpacing3 + size3) * (x1 + x0 * 10);
              var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
              return (cellSpacing3 + size3) * (x1 + x0 * 10);
          })
          .attr('y', (d, i) => {
            //uncomment to add group space
            //   var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
            //   return groupSpacing3 * y0 + (cellSpacing3 + size3) * (y1 + y0 * 10);
              var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
              return (cellSpacing3 + size3) * (y1 + y0 * 10);
          }) 
          .attr('width', size3)
          .attr('height', size3)
        //   .attr('fill', '#FFFAF0')
          .attr('fill', i => (i < 99 ? 'tomato' : '#FFFAF0'))
          .attr('stroke-width', 2)

    var forest2 = forest
          .data(d3.range(92.5))
          .enter()
          .append('rect')
          .attr('x', (d, i) => {
              var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
              return forestSpacing + (cellSpacing3 + size3) * (x1 + x0 * 10);
          })
          .attr('y', (d, i) => {
              var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
              return (cellSpacing3 + size3) * (y1 + y0 * 10);
          }) 
          .attr('width', size3)
          .attr('height', size3)
          .attr('fill', i => (i < 92.5 ? 'tomato' : '#FFFAF0'))
          .attr('stroke-width', 2)

    var forest3 = forest
          .data(d3.range(59.8))
          .enter()
          .append('rect')
          .attr('x', (d, i) => {
              var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
              return forestSpacing*2 + (cellSpacing3 + size3) * (x1 + x0 * 10);
          })
          .attr('y', (d, i) => {
              var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
              return (cellSpacing3 + size3) * (y1 + y0 * 10);
          }) 
          .attr('width', size3)
          .attr('height', size3)
          .attr('fill', i => (i < 12 ? 'tomato' : '#FFFAF0'))
          .attr('stroke-width', 2)




});
