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
    var forest2 = svg2.append("g")
                      .attr("transform", "translate(-1400,250)")
                      .selectAll('rect')
                      .append("g")
    var forest3 = svg2.append("g")
                      .attr("transform", "translate(-3000,400)")
                      .selectAll('rect')
                      .append("g")



// for loop to create 23 forests data    
    for (var i=0; i<7; i++){
        siteSize.push(data[i].size);
        console.log(siteSize[i])
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
            //   .attr('fill', '#FFFAF0')
              .attr('fill', i => (i < colorBlock[z] ? 'tomato' : '#FFFAF0'))
              .attr('stroke-width', 2)
        }
    }
 
    for (var i=7; i<14; i++){
        siteSize.push(data[i].size);
        console.log(siteSize[i])
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
            //   .attr('fill', '#FFFAF0')
              .attr('fill', i => (i < colorBlock[z] ? 'tomato' : '#FFFAF0'))
              .attr('stroke-width', 2)
        }
    }


    for (var i=15; i<22; i++){
        siteSize.push(data[i].size);
        console.log(siteSize[i])
        colorBlock.push(data[i].color);

        for (var z=15; z<22; z++){
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
  


    // var forest1 = forest
    //       .data(d3.range(siteSize[0]/10))
    //       .enter()
    //       .append('rect')
    //       .attr('x', (d, i) => {
    //           var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
    //           return (cellSpacing3 + size3) * (x1 + x0 * 10);
    //       })
    //       .attr('y', (d, i) => {
    //           var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
    //           return (cellSpacing3 + size3) * (y1 + y0 * 10);
    //       }) 
    //       .attr('width', size3)
    //       .attr('height', size3)
    //     //   .attr('fill', '#FFFAF0')
    //       .attr('fill', i => (i < colorBlock[0] ? 'tomato' : '#FFFAF0'))
    //       .attr('stroke-width', 2)

    // var forest2 = forest
    //       .data(d3.range(siteSize[1]/10))
    //       .enter()
    //       .append('rect')
    //       .attr('x', (d, i) => {
    //           var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
    //           return forestSpacing + (cellSpacing3 + size3) * (x1 + x0 * 10);
    //       })
    //       .attr('y', (d, i) => {
    //           var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
    //           return (cellSpacing3 + size3) * (y1 + y0 * 10);
    //       }) 
    //       .attr('width', size3)
    //       .attr('height', size3)
    //       .attr('fill', i => (i < colorBlock[1] ? 'tomato' : '#FFFAF0'))
    //       .attr('stroke-width', 2)

    // var forest3 = forest
    //       .data(d3.range(siteSize[2]/10))
    //       .enter()
    //       .append('rect')
    //       .attr('x', (d, i) => {
    //           var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
    //           return forestSpacing*2 + (cellSpacing3 + size3) * (x1 + x0 * 10);
    //       })
    //       .attr('y', (d, i) => {
    //           var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
    //           return (cellSpacing3 + size3) * (y1 + y0 * 10);
    //       }) 
    //       .attr('width', size3)
    //       .attr('height', size3)
    //       .attr('fill', i => (i < colorBlock[2] ? 'tomato' : '#FFFAF0'))
    //       .attr('stroke-width', 2)













});
