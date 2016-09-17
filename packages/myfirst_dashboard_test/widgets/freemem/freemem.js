widget = {
    //runs when we receive data from the job
    onData: function (el, data) {

        //The parameters our job passed through are in the data object
        //el is our widget element, so our actions should all be relative to that
        if (data.title) {
            $('h2', el).text(data.title);
        }

        var graphElement = document.querySelector("#graph");
        var textElement = document.querySelector("#text");

        while (graphElement.firstChild) {
            graphElement.removeChild(graphElement.firstChild);
        }

        var dataArray = [];
        var count = 0;
        data.data.forEach(function(e){
            dataArray.push({x: count++, y:e});

        });

        var graph = new Rickshaw.Graph({
            element: document.querySelector("#graph"),
            height: 350,
            renderer: 'area',
            stroke: true,
            series: [
                {
                    data: dataArray,
                    color: 'rgba(192,132,255,0.3)',
                    stroke: 'rgba(0,0,0,0.15)'
                }
            ]
        });


        graph.renderer.unstack = true;
        graph.render();


        $(textElement).html("" + new Date());
    }
};
