am4core.useTheme(am4themes_animated);

var chart2 = am4core.create("chartbar2", am4charts.XYChart3D);

chart2.data = [
	// {
	// 	"country": "Others",
	// 	"visits": 0.316
	// }, 
	{
		"country": "Lenovo",
		"visits": 0.056,
		"percent": "5.6%",
		"color": "#f1bb50"
	}, {
		"country": "Advan",
		"visits": 0.068,
		"percent": "6.8%",
		"color": "#29abe2"
	}, {
		"country": "Asus",
		"visits": 0.105,
		"percent": "10.5%",
		"color": "#336fc6"
	}, {
		"country": "Oppo",
		"visits": 0.166,
		"percent": "16.6%",
		"color": "#f9c94b"
	}, {
		"country": "Samsung",
		"visits": 0.288,
		"percent": "28.8%",
		"color": "#004bb8"
	}
];


//for x
var categoryAxis = chart2.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.cellStartLocation = 0.2;
categoryAxis.renderer.cellEndLocation = 0.8;

var valueAxis = chart2.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.maxLabelPosition = 0.98;
valueAxis.renderer.minGridDistance = 100;
valueAxis.min = 0;
valueAxis.max = 0.4;

valueAxis.numberFormatter = new am4core.NumberFormatter();
valueAxis.numberFormatter.numberFormat = "#.%";

var series = chart2.series.push(new am4charts.ColumnSeries3D());
// series.columns.template.width = am4core.percent(20);
series.dataFields.categoryY = "country";
series.dataFields.valueX = "visits";
// series.tooltipText = "Category: {categoryY}\nValue: {valueX}%";
// series.tooltipText = "{categoryY}\n{percent}";
series.sequencedInterpolation = true;
series.defaultState.transitionDuration = 1000;
series.sequencedInterpolationDelay = 100;
series.columns.template.strokeOpacity = 0;
series.strokeWidth = 0; //0px

// series.columns.template.propertyFields.fill = "color";
var columnTemplate = series.columns.template;
chart2.colors.list = [
	am4core.color("#4189f2"),
	am4core.color("#ffd2b1"),
	am4core.color("#2ab6a7"),
	am4core.color("#29abe2"),
	am4core.color("#f1bb50")
];
series.columns.template.events.once("inited", function (event) {
	event.target.fill = chart2.colors.getIndex(event.target.dataItem.index);
});

//for label
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
// valueLabel.label.text = "{valueX}%";
// valueLabel.label.text = "{valueX}";
valueLabel.label.text = "{percent}";
valueLabel.label.horizontalCenter = "right";
valueLabel.label.dx = -10;
valueLabel.label.hideOversized = false;
valueLabel.label.truncate = false;
valueLabel.label.fill = am4core.color("#000");

chart2.cursor = new am4charts.XYCursor();
chart2.cursor.behavior = "panY";


//bg color grad
// var gradient = new am4core.LinearGradient();
// gradient.addColor(am4core.color("#336fc6"));
// gradient.addColor(am4core.color("#336fc6"));
// series.fill = gradient;
series.lineThickness = 10;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// mobile
	valueLabel.label.horizontalCenter = "right";
	valueLabel.label.dx = 12;
	valueLabel.label.fontSize = 13;
}