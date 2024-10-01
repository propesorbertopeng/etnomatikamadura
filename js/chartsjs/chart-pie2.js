am4core.useTheme(am4themes_animated);

var chart5 = am4core.create("chartpie2", am4charts.PieChart);  

chart5.data = [{
    "country": "Ultra Low-end",
    "litres": 52.5,
    "stat": "< Rp 1,4 Juta"
}, {
    "country": "Low-end",
    "litres": 38.1,
    "stat": "Rp 1,4 - 2,9 Juta"
}, {
    "country": "Mid Range",
    "litres": 7.4,
    "stat": "Rp 2,9 - 5,7 Juta"
}, {
    "country": "Mid to High End",
    "litres": 0.8,
    "stat": "5,7 - 8,6 Juta"
}, {
    "country": "High End",
    "litres": 0.7,
    "stat": "Rp 8,6 - 11,5 Juta"
}, {
    "country": "Premium",
    "litres": 0.4,
    "stat": "Rp 11,5 - 14,4 Juta"
}, {
    "country": "Ultra Premium",
    "litres": 0.1,
    "stat": "> Rp 14,4 Juta"
}];

var series = chart5.series.push(new am4charts.PieSeries());
series.dataFields.value = "litres";
series.dataFields.category = "country";


series.ticks.template.disabled = true;
series.alignLabels = false;
series.labels.template.text = "{value.percent.formatNumber('##.0')}%";
series.labels.template.radius = am4core.percent(-40);
series.labels.template.fill = am4core.color("white");

series.labels.template.adapter.add("radius", function(radius, target) {
  if (target.dataItem && (target.dataItem.values.value.percent < 6)) {
      return am4core.percent(40);

    }
    return radius;
});

series.labels.template.adapter.add("fill", function(color, target) {
    if (target.dataItem && (target.dataItem.values.value.percent < 6)) {
        return am4core.color("white");
  }
  return color;
});

series.colors.list = [
    am4core.color("#f9c94b"),
    am4core.color("#336fc6"),
    am4core.color("#004bb8"),
    am4core.color("#f9e4b9"),
    am4core.color("#29abe2"),
    am4core.color("#f1bb50"),
    am4core.color("#795e28"),
  ];

series.slices.template.tooltipText = "{category} : {value}%";
series.tooltip.label.fill = am4core.color("#fff");
series.tooltip.getFillFromObject = false;
//bg color grad
var gradient = new am4core.LinearGradient();
gradient.addColor(am4core.color("#336fc6"));
gradient.addColor(am4core.color("#336fc6"));
series.tooltip.background.fill = gradient;

// var container2 = am4core.create("chart__container2", am4core.Container);
// container2.width = am4core.percent(100); container2.height = am4core.percent(100);

chart5.legend = new am4charts.Legend();
// chart.legend.position = "right";
chart5.legend.labels.template.text = "{country} | [bold]{stat}[/]";
chart5.legend.useDefaultMarker = true;

chart5.legend.itemContainers.template.clickable = false
chart5.legend.itemContainers.template.focusable = false
chart5.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;


let marker2 = chart5.legend.markers.template.children.getIndex(0);
marker2.cornerRadius(15, 15, 15, 15);
marker2.strokeWidth = 1;
marker2.strokeOpacity = 1;
marker2.stroke = am4core.color("#ccc");

var markerTemplate = chart5.legend.markers.template;
markerTemplate.width = 15;
markerTemplate.height = 15;

var watermark = new am4core.Label();
watermark.text = "chart © 2019";
chart5.children.push(watermark);