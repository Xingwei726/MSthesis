//// 4.0 mapbox
d3.xml("./images/bc.svg")
    .then(data => {
        d3.select("#svg-container2").node().append(data.documentElement)
    });