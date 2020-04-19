var size = 100;
var groupSpacing = 5;
var cellSpacing = 5;

//// 3.4 cocoa plantation methods (squares)
var svg5 = d3.select('#method')
    .append('svg')
    .attr('width', 1440)
    .attr('height', 1000)
    .attr('background', '#000000')
    .attr("transform", "translate(0," + margin.top + ")");

var mouseover = function (d) {
    d3.select(this)
        .attr('width', size * 3 + cellSpacing * 2)
        .attr('height', size * 3 + cellSpacing * 2)
        .attr('fill', '#FFFAF0')
        .attr('z-index', '200')
}

var mouseleave = function (d) {
    d3.select(this)
        .attr('fill', '#FFFAF0')
        .attr('width', size)
        .attr('height', size)
}

var totalGraph = svg5.selectAll('rect').append("g")
totalGraph.data(d3.range(98))
    .enter()
    .append('rect')
    .attr('x', (d, i) => {
        //12 determines how many square in one row
        var x0 = Math.floor(i / 100) % 14, x1 = Math.floor(i % 14);
        return groupSpacing * x0 + (cellSpacing + size) * (x1 + x0 * 14);
    })
    .attr('y', (d, i) => {
        var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 14);
        return groupSpacing * y0 + (cellSpacing + size) * (y1 + y0 * 14) + 20;
    })
    .attr('width', size)
    .attr('height', size)
    .attr('fill', '#FFFAF0')
    .attr("rx", 3)
    .attr("ry", 3)
    .attr('stroke-width', 2)
    .on('mouseover', mouseover)
    .on('mouseleave', mouseleave);