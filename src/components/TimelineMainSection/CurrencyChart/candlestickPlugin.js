export const candlestickPlugin = {
  id: "candlestick",
  beforeDatasetsDraw(chart) {
    const {
      ctx,
      data,
      scales: { y },
    } = chart;

    ctx.save();
    ctx.lineWidth = 2;

    data.datasets[0].data.forEach((_, index) => {
      const borderColor = data.datasets[0].borderColor[index];
      ctx.strokeStyle = borderColor;

      ctx.beginPath();
      ctx.moveTo(
        chart.getDatasetMeta(0).data[index].x,
        chart.getDatasetMeta(0).data[index].y,
      );
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(data.datasets[0].data[index].h),
      );
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(
        chart.getDatasetMeta(0).data[index].x,
        chart.getDatasetMeta(0).data[index].y,
      );
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(data.datasets[0].data[index].l),
      );
      ctx.stroke();
    });
  },
};
