am4core.useTheme(am4themes_animated);

// var chart = am4core.create("chartbar", am4charts.XYChart);
var chart = am4core.create("chartbar", am4charts.XYChart3D);

chart.data = [
// {
// 	"country": "Others",
// 	"visits": 0.15
// },
{
	"country": "Advan",
	"visits": 0.06,
	"percent":"6%",
	"color":"#29abe2"
}, {
	"country": "Vivo",
	"visits": 0.09,
	"percent":"9%",
	"color":"#f9e4b9"
}, {
	"country": "Oppo",
	"visits": 0.18,
	"percent":"18%",
	"color":"#f9c94b"
}, {
	"country": "Xiaomi",
	"visits": 0.25,
	"percent":"25%",
	"color":"#795e28"
}, {
	"country": "Samsung",
	"visits": 0.27,
	"percent":"27%",
	"color":"#004bb8"
}];


//for x
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.cellStartLocation = 0.2;
categoryAxis.renderer.cellEndLocation = 0.8;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.maxLabelPosition = 0.98;
valueAxis.renderer.minGridDistance = 100;
valueAxis.min = 0;
valueAxis.max = 0.4; 

valueAxis.numberFormatter = new am4core.NumberFormatter();
valueAxis.numberFormatter.numberFormat = "#.%"; 

var series = chart.series.push(new am4charts.ColumnSeries3D());
// series.columns.template.width = am4core.percent(20);
series.dataFields.categoryY = "country";
series.dataFields.valueX = "visits";
// series.tooltipText = "Category: {categoryY}\nValue: {valueX}%";
// series.tooltipText = "{percent}";
series.sequencedInterpolation = true;
series.defaultState.transitionDuration = 1000;
series.sequencedInterpolationDelay = 100;
series.columns.template.strokeOpacity = 0;
series.strokeWidth = 0; //0px

// series.columns.template.propertyFields.fill = "color";
var columnTemplate = series.columns.template;
// columnTemplate.stroke = am4core.color("#FFFFFF");

// columnTemplate.adapter.add("fill", (fill, target) => {
//   return chart.colors.getIndex(target.dataItem.index);
// })

// columnTemplate.adapter.add("stroke", (stroke, target) => {
//   return chart.colors.getIndex(target.dataItem.index);
// })
chart.colors.list = [
	am4core.color("#ffd2b1"),
	am4core.color("#f9e4b9"),
	am4core.color("#29abe2"),
	am4core.color("#957432"),
	am4core.color("#f1bb50")
  ];
  series.columns.template.events.once("inited", function(event){
	event.target.fill = chart.colors.getIndex(event.target.dataItem.index);
  });

//for label
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
// valueLabel.label.text = "{valueX}%";
valueLabel.label.text = "{percent}";
valueLabel.label.horizontalCenter = "right";
  valueLabel.label.dx = -10;
  valueLabel.label.hideOversized = false;
  valueLabel.label.truncate = false;
valueLabel.label.fill = am4core.color("#000");

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panY";


//bg color grad
// var gradient = new am4core.LinearGradient();
// gradient.addColor(am4core.color("#336fc6"));
// gradient.addColor(am4core.color("#336fc6"));
// series.fill = gradient;
series.lineThickness = 10;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// mobile
	valueLabel.label.horizontalCenter = "right";
	valueLabel.label.dx = 10;
	valueLabel.label.fontSize = 13;
}