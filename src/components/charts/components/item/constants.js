import CanvasJSReact from "../../../../canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;


const chartOptions = (chartType) => {
    return {
        animationEnabled: true,
        animationDuration: 3000,
        title: {
            text: chartType.title
        },
        axisX: {
            valueFormatString: "HH:mm:ss",
            crosshair: {
                enabled: true,
                label: "Crosshair Label",
                labelFormatter: function (e) {
                    return CanvasJS.formatDate(e.value, "DD/MM/YYYY HH-mm-ss");
                }
            }
        },
        axisY: {
            title: "values in ms",
            crosshair: {
                enabled: true,
                labelMaxWidth: 80,
                labelFormatter: function (e) {
                    return e.value;
                }
            }
        },

        data: [{
            yValueFormatString: "#,###",
            xValueFormatString: "ss",
            type: "spline",
            dataPoints: chartType.data
        }]

    }
}

export default chartOptions;
