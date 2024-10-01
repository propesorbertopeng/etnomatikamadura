am4core.useTheme(am4themes_animated);

var chart4 = am4core.create("chartpie", am4charts.PieChart);  

chart4.data = [{
    "country": "Ultra Low-end",
    "litres": 24.5,
    "stat": "< Rp 1,4 Juta"
}, {
    "country": "Low-end",
    "litres": 41.3,
    "stat": "Rp 1,4 - 2,9 Juta"
}, {
    "country": "Mid Range",
    "litres": 29.9,
    "stat": "Rp 2,9 - 5,7 Juta"
}, {
    "country": "Mid to High End",
    "litres": 1.5,
    "stat": "5,7 - 8,6 Juta"
}, {
    "country": "High End",
    "litres": 1.1,
    "stat": "Rp 8,6 - 11,5 Juta"
}, {
    "country": "Premium",
    "litres": 1.1,
    "stat": "Rp 11,5 - 14,4 Juta"
}, {
    "country": "Ultra Premium",
    "litres": 0.6,
    "stat": "> Rp 14,4 Juta"
}];

var series = chart4.series.push(new am4charts.PieSeries());
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

chart4.legend = new am4charts.Legend();
// chart.legend.position = "right";
chart4.legend.labels.template.text = "{country} | [bold]{stat}[/]";
chart4.legend.useDefaultMarker = true;

chart4.legend.itemContainers.template.clickable = false
chart4.legend.itemContainers.template.focusable = false
chart4.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;


let marker = chart4.legend.markers.template.children.getIndex(0);
marker.cornerRadius(15, 15, 15, 15);
marker.strokeWidth = 1;
marker.strokeOpacity = 1;
marker.stroke = am4core.color("#ccc");

var markerTemplate = chart4.legend.markers.template;
markerTemplate.width = 15;
markerTemplate.height = 15;

var watermark = new am4core.Label();
watermark.text = "chart © 2019";
chart4.children.push(watermark);