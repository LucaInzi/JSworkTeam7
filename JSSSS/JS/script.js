// animation span direction

for(let element of document.querySelectorAll('span[data-toggle="switchD"]')){
    element.addEventListener("click",function(){
        const id = this.dataset.target 
        const target = document.getElementById(id)
        const zone = document.getElementById(this.dataset.zone)
        const zoneG= zone.getElementsByClassName("switchD")
        for(let elementtohide of zoneG){
            elementtohide.style.display = 'none'}
        target.style.display = 'flex'
    })
}


// animation header

const parties = {}

for(let element of document.querySelectorAll(".Partie")){
  parties[element.id] = element.offsetTop
}

window.addEventListener("scroll", function(event){
  const scrollposition = document.documentElement.scrollTop
  for( let id in parties) {
    if (scrollposition >= parties[id]){
      document.querySelector(".navitem.active").setAttribute("class", "navitem")
      console.log(document.querySelector('.navitem[href="#'+id + '"]'))
      document.querySelector('.navitem[href="#'+id + '"]').setAttribute("class", "navitem active")
    }
  }
})



// Pyramide

var chart = am4core.create("pyramide", am4charts.SlicedChart);
chart.paddingBottom = 30;
chart.data = [{
  "name": "Respect",
  "value": 337
}, {
  "name": "Performance",
  "value": 337
}, {
  "name": "Responsabilité",
  "value": 200
}, {
 
}];

var series = chart.series.push(new am4charts.PyramidSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;
series.valueIs = "height";

; // end am4core.ready()



////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("croissance", am4charts.XYChart3D);
chart.paddingBottom = 30;
chart.angle = 35;

// Add data
chart.data = [{
  "country": "distribution",
  "visits": 33
}, {
  "country": "grande consomation",
  "visits": 29
}, {
  "country": "Autres",
  "visits": 28
}, {
  "country": "Banque et assurance",
  "visits": 17
}, {
  "country": "Industrie",
  "visits": 17
}];


// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.inside = true;
categoryAxis.renderer.grid.template.disabled = true;

let labelTemplate = categoryAxis.renderer.labels.template;
labelTemplate.rotation = -90;
labelTemplate.horizontalCenter = "left";
labelTemplate.verticalCenter = "middle";
labelTemplate.dy = 10; // moves it a bit down;
labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.disabled = true;

// Create series
var series = chart.series.push(new am4charts.ConeSeries());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";

var columnTemplate = series.columns.template;
columnTemplate.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

columnTemplate.adapter.add("stroke", function(stroke, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

}); // end am4core.ready()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("Excellence", am4charts.XYChart3D);
  chart.paddingBottom = 30;
  chart.angle = 35;
  
  // Add data
  chart.data = [{
    "country": "distribution",
    "visits": 4
  }, {
    "country": "grande consomation",
    "visits": 4
  }, {
    "country": "Autres",
    "visits": 4
  }, {
    "country": "Transport",
    "visits": 3
  }, {
    "country": "Industrie",
    "visits": 3
  }];
  
  
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.inside = true;
  categoryAxis.renderer.grid.template.disabled = true;
  
  let labelTemplate = categoryAxis.renderer.labels.template;
  labelTemplate.rotation = -90;
  labelTemplate.horizontalCenter = "left";
  labelTemplate.verticalCenter = "middle";
  labelTemplate.dy = 10; // moves it a bit down;
  labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.disabled = true;
  
  // Create series
  var series = chart.series.push(new am4charts.ConeSeries());
  series.dataFields.valueY = "visits";
  series.dataFields.categoryX = "country";
  
  var columnTemplate = series.columns.template;
  columnTemplate.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  })
  
  columnTemplate.adapter.add("stroke", function(stroke, target) {
    return chart.colors.getIndex(target.dataItem.index);
  })
  
  }); // end am4core.ready()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("Management", am4charts.XYChart3D);
    chart.paddingBottom = 30;
    chart.angle = 35;
    
    // Add data
    chart.data = [{
      "country": "distribution",
      "visits": 12
    }, {
      "country": "grande consomation",
      "visits": 12
    }, {
      "country": "Autres",
      "visits": 32
    }, {
      "country": "Service et finace",
      "visits": 27
    }, {
      "country": "Industrie",
      "visits": 27
    }];
    
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;
    
    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = "left";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    
    // Create series
    var series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    
    var columnTemplate = series.columns.template;
    columnTemplate.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })
    
    columnTemplate.adapter.add("stroke", function(stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })
    
    }); // end am4core.ready()
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("Organisation", am4charts.XYChart3D);
    chart.paddingBottom = 30;
    chart.angle = 35;
    
    // Add data
    chart.data = [{
      "country": "distribution",
      "visits": 21
    }, {
      "country": "grande consomation",
      "visits": 5
    }, {
      "country": "Autres",
      "visits": 7
    }, {
      "country": "Service et finance",
      "visits": 3
    }, {
      "country": "Industrie",
      "visits": 2
    }];
    
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;
    
    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = "left";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    
    // Create series
    var series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    
    var columnTemplate = series.columns.template;
    columnTemplate.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })
    
    columnTemplate.adapter.add("stroke", function(stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })
    
    });  // end am4core.ready()






////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 







    am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_dark);
      am4core.useTheme(am4themes_animated);
      // Themes end
      
      // Create chart instance
      var chart = am4core.create("chartdiv1", am4charts.XYChart3D);
      
      // Add data
      chart.data = [{
        "Chiffre d'affaires": "distribution",
        "visits": 33
      }, {
        "Chiffre d'affaires": "grande consomation",
        "visits": 22
      }, {
        "Chiffre d'affaires": "Autres",
        "visits": 18
      }, {
        "Chiffre d'affaires": "Banque et assurance",
        "visits": 11
      }, {
        "Chiffre d'affaires": "Industrie",
        "visits": 14
      }];
      
      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Chiffre d'affaires";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.renderer.labels.template.hideOversized = false;
      categoryAxis.renderer.minGridDistance = 20;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.tooltip.label.rotation = 270;
      categoryAxis.tooltip.label.horizontalCenter = "right";
      categoryAxis.tooltip.label.verticalCenter = "middle";
      
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Chiffre d'affaires";
      valueAxis.title.fontWeight = "bold";
      
      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "Chiffre d'affaires";
      series.name = "Visits";
      series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      series.columns.template.fillOpacity = .8;
      
      var columnTemplate = series.columns.template;
      columnTemplate.strokeWidth = 2;
      columnTemplate.strokeOpacity = 1;
      columnTemplate.stroke = am4core.color("#FFFFFF");
      
      columnTemplate.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      })
      
      columnTemplate.adapter.add("stroke", function(stroke, target) {
        return chart.colors.getIndex(target.dataItem.index);
      })
      
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineX.strokeOpacity = 0;
      chart.cursor.lineY.strokeOpacity = 0;
      
      }); // end am4core.ready()



      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 



am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv2", am4charts.XYChart3D);
  
  // Add data
  chart.data = [{
    "Chiffre d'affaires": "distribution",
    "visits": 57
  }, {
    "Chiffre d'affaires": "grande consomation",
    "visits": 23
  }, {
    "Chiffre d'affaires": "Autres",
    "visits": 10
  }, {
    "Chiffre d'affaires": "Transport",
    "visits": 3
  }, {
    "Chiffre d'affaires": "Industrie",
    "visits": 7
  }];
  
  // Create axes
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "Chiffre d'affaires";
  categoryAxis.renderer.labels.template.rotation = 270;
  categoryAxis.renderer.labels.template.hideOversized = false;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.verticalCenter = "middle";
  categoryAxis.tooltip.label.rotation = 270;
  categoryAxis.tooltip.label.horizontalCenter = "right";
  categoryAxis.tooltip.label.verticalCenter = "middle";
  
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Chiffre d'affaires";
  valueAxis.title.fontWeight = "bold";
  
  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries3D());
  series.dataFields.valueY = "visits";
  series.dataFields.categoryX = "Chiffre d'affaires";
  series.name = "Visits";
  series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
  series.columns.template.fillOpacity = .8;
  
  var columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 2;
  columnTemplate.strokeOpacity = 1;
  columnTemplate.stroke = am4core.color("#FFFFFF");
  
  columnTemplate.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  })
  
  columnTemplate.adapter.add("stroke", function(stroke, target) {
    return chart.colors.getIndex(target.dataItem.index);
  })
  
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.lineX.strokeOpacity = 0;
  chart.cursor.lineY.strokeOpacity = 0;
  
  }); // end am4core.ready()



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv3", am4charts.XYChart3D);
  
  // Add data
  chart.data = [{
    "Chiffre d'affaires": "distribution",
    "visits": 9
  }, {
    "Chiffre d'affaires": "grande consomation",
    "visits": 10
  }, {
    "Chiffre d'affaires": "Autres",
    "visits": 23
  }, {
    "Chiffre d'affaires": "Service et finance",
    "visits": 28
  }, {
    "Chiffre d'affaires": "Industrie",
    "visits": 30
  }];
  
  // Create axes
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "Chiffre d'affaires";
  categoryAxis.renderer.labels.template.rotation = 270;
  categoryAxis.renderer.labels.template.hideOversized = false;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.verticalCenter = "middle";
  categoryAxis.tooltip.label.rotation = 270;
  categoryAxis.tooltip.label.horizontalCenter = "right";
  categoryAxis.tooltip.label.verticalCenter = "middle";
  
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Chiffre d'affaires";
  valueAxis.title.fontWeight = "bold";
  
  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries3D());
  series.dataFields.valueY = "visits";
  series.dataFields.categoryX = "Chiffre d'affaires";
  series.name = "Visits";
  series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
  series.columns.template.fillOpacity = .8;
  
  var columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 2;
  columnTemplate.strokeOpacity = 1;
  columnTemplate.stroke = am4core.color("#FFFFFF");
  
  columnTemplate.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  })
  
  columnTemplate.adapter.add("stroke", function(stroke, target) {
    return chart.colors.getIndex(target.dataItem.index);
  })
  
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.lineX.strokeOpacity = 0;
  chart.cursor.lineY.strokeOpacity = 0;
  
  }); // end am4core.ready()



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv4", am4charts.XYChart3D);
  
  // Add data
  chart.data = [{
    "Chiffre d'affaires": "distribution",
    "visits": 64
  }, {
    "Chiffre d'affaires": "grande consomation",
    "visits": 15
  }, {
    "Chiffre d'affaires": "Autres",
    "visits": 8
  }, {
    "Chiffre d'affaires": "Service et finance",
    "visits": 6
  }, {
    "Chiffre d'affaires": "Industrie",
    "visits": 7
  }];
  
  // Create axes
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "Chiffre d'affaires";
  categoryAxis.renderer.labels.template.rotation = 270;
  categoryAxis.renderer.labels.template.hideOversized = false;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.verticalCenter = "middle";
  categoryAxis.tooltip.label.rotation = 270;
  categoryAxis.tooltip.label.horizontalCenter = "right";
  categoryAxis.tooltip.label.verticalCenter = "middle";
  
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Chiffre d'affaires";
  valueAxis.title.fontWeight = "bold";
  
  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries3D());
  series.dataFields.valueY = "visits";
  series.dataFields.categoryX = "Chiffre d'affaires";
  series.name = "Visits";
  series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
  series.columns.template.fillOpacity = .8;
  
  var columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 2;
  columnTemplate.strokeOpacity = 1;
  columnTemplate.stroke = am4core.color("#FFFFFF");
  
  columnTemplate.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  })
  
  columnTemplate.adapter.add("stroke", function(stroke, target) {
    return chart.colors.getIndex(target.dataItem.index);
  })
  
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.lineX.strokeOpacity = 0;
  chart.cursor.lineY.strokeOpacity = 0;
  
  }); // end am4core.ready()



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 





am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  
  
  var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
  var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
  
  chart.data = [
    {
      name: "Innovation",
      children: [
        {
          name: "Impact",
          children: [
            { name: "", value: 100 },
            { name: "", value: 100 }
          ]
        },
        {
          name: "Digitale",
          children: [
            { name: "", value: 135 },
            { name: "", value: 98 }
          ]
        },
      ]
    }
  ];
  
  networkSeries.dataFields.value = "value";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.children = "children";
  networkSeries.nodes.template.tooltipText = "{name}:{value}";
  networkSeries.nodes.template.fillOpacity = 1;
  
  networkSeries.nodes.template.label.text = "{name}"
  networkSeries.fontSize = 16;
  
  networkSeries.links.template.strokeWidth = 1;
  
  var hoverState = networkSeries.links.template.states.create("hover");
  hoverState.properties.strokeWidth = 3;
  hoverState.properties.strokeOpacity = 1;
  
  networkSeries.nodes.template.events.on("over", function(event) {
    event.target.dataItem.childLinks.each(function(link) {
      link.isHover = true;
    })
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = true;
    }
  
  })
  
  networkSeries.nodes.template.events.on("out", function(event) {
    event.target.dataItem.childLinks.each(function(link) {
      link.isHover = false;
    })
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = false;
    }
  })
  
  });







////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 




am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  
  
  // Create chart instance
  var chart = am4core.create("chartdi", am4charts.RadarChart);
  
  // Add data
  chart.data = [{
    "category": "Profil Commercial",
    "value": 27,
    "full": 100
  }, {
    "category": "Profil Ingénieur",
    "value": 71,
    "full": 100
  }, {
    "category": "Ecole catégorie B",
    "value": 14,
    "full": 100
  }, {
    "category": "Ecole catégorie A",
    "value": 78,
    "full": 100
  }];
  
  // Make chart not full circle
  chart.startAngle = -90;
  chart.endAngle = 180;
  chart.innerRadius = am4core.percent(20);
  
  // Set number format
  chart.numberFormatter.numberFormat = "#.#'%'";
  
  // Create axes
  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.grid.template.strokeOpacity = 0;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.fontWeight = 500;
  categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
    return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
  });
  categoryAxis.renderer.minGridDistance = 10;
  
  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.strokeOpacity = 0;
  valueAxis.min = 0;
  valueAxis.max = 100;
  valueAxis.strictMinMax = true;
  
  // Create series
  var series1 = chart.series.push(new am4charts.RadarColumnSeries());
  series1.dataFields.valueX = "full";
  series1.dataFields.categoryY = "category";
  series1.clustered = false;
  series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
  series1.columns.template.fillOpacity = 0.08;
  series1.columns.template.cornerRadiusTopLeft = 20;
  series1.columns.template.strokeWidth = 0;
  series1.columns.template.radarColumn.cornerRadius = 20;
  
  var series2 = chart.series.push(new am4charts.RadarColumnSeries());
  series2.dataFields.valueX = "value";
  series2.dataFields.categoryY = "category";
  series2.clustered = false;
  series2.columns.template.strokeWidth = 0;
  series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
  series2.columns.template.radarColumn.cornerRadius = 20;
  
  series2.columns.template.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });
  
  // Add cursor
  chart.cursor = new am4charts.RadarCursor();
  
  });







////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 








  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var pattern = new am4core.CirclePattern();
    pattern.radius = 20;
    pattern.height = 50;
    pattern.width = 50;
    pattern.fill = am4core.color("#FFFFFF");
    pattern.backgroundFill = am4core.color("#21201E");
    pattern.backgroundOpacity = 1;
    
    var data = [{name:"Ses clients", value:100, color:am4core.color("#AF0A28")}, {name:"Ses collaborateurs", value:100, color:am4core.color("#605E5D")}, {name:"Son écosystème", value:30, sets:["Ses clients", "Ses collaborateurs"], color:pattern}];
    
    var chart = am4core.create("tdiv", am4plugins_venn.VennDiagram);
    var series = chart.series.push(new am4plugins_venn.VennSeries())
    
    series.dataFields.category = "name";
    series.dataFields.value = "value";
    series.dataFields.intersections = "sets";
    series.data = data;
    series.slices.template.propertyFields.fill = "color";
    series.slices.template.stroke = am4core.color("#21201E");
    series.slices.template.strokeWidth = 2;
    series.slices.template.tooltipText = "";
    
    series.labels.template.padding(10,14,10,14);
    series.labels.template.fill = am4core.color("#FFF");
    
    var labelBackground = new am4core.RoundedRectangle();
    labelBackground.fillOpacity = 1;
    labelBackground.cornerRadius(8,8,8,8);
    series.labels.template.background = labelBackground;
    
    labelBackground.fill = am4core.color("#605E5D");
    
    series.hoverSprite.stroke = am4core.color("#AF0A28");
    series.hoverSprite.strokeDasharray = "10,10";
    series.hoverSprite.strokeWidth = 4;
    
    chart.legend = new am4charts.Legend();
    chart.legend.marginTop = 40;
    
    });