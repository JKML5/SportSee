import React, { useEffect } from 'react'
import * as d3 from 'd3'
import '../css/BarChart.css'

function BarChart() {
  const data = [
    {
      day: '2020-07-01',
      kilogram: 80,
      calories: 240,
    },
    {
      day: '2020-07-02',
      kilogram: 80,
      calories: 220,
    },
    {
      day: '2020-07-03',
      kilogram: 81,
      calories: 280,
    },
    {
      day: '2020-07-04',
      kilogram: 81,
      calories: 290,
    },
    {
      day: '2020-07-05',
      kilogram: 80,
      calories: 160,
    },
    {
      day: '2020-07-06',
      kilogram: 78,
      calories: 162,
    },
    {
      day: '2020-07-07',
      kilogram: 76,
      calories: 390,
    },
  ]

  const width = 835
  const height = 320

  useEffect(() => {
    const svg = d3.select('#barchart')

    // Title
    svg
      .append('text')
      .attr('x', 30)
      .attr('y', 40)
      .attr('font-size', '15px')
      .text('Activité quotidienne')

    // Circle 1
    svg
      .append('circle')
      .attr('r', 4)
      .attr('cx', 532)
      .attr('cy', 35)
      .style('fill', '#282D30')

    // Legend 1
    svg
      .append('text')
      .text('Poids (kg)')
      .attr('x', 550)
      .attr('y', 40)
      .attr('font-size', '14px')
      .style('fill', '#74798C')

    // Legend 2
    svg
      .append('text')
      .text('Calories brûlées (kCal)')
      .attr('x', 667)
      .attr('y', 40)
      .attr('font-size', '14px')
      .style('fill', '#74798C')

    // Circle 2
    svg
      .append('circle')
      .attr('r', 4)
      .attr('cx', 650)
      .attr('cy', 35)
      .style('fill', '#E60000')

    // x axis scale
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.day))
      .range([0, 700])

    svg
      .append('g')
      .attr('transform', 'translate(30,249)')
      .attr('stroke', '#dedede')
      .call(d3.axisBottom(xScale))

    // y axis scale
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.kilogram)])
      .range([200, 0])

    svg
      .append('g')
      .attr('transform', 'translate(730,50)')
      .call(
        d3
          .axisRight(yScale)
          .tickFormat((d) => `${d}`)
          .ticks(10)
      )

    const barSpacing = 8

    // bar "Poids"
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.day) + 77 - barSpacing)
      .attr('y', (d) => yScale(d.kilogram) / 2 + 90)
      .attr('width', 7)
      .attr('height', (d) => (height - yScale(d.kilogram)) / 2)
      .attr('fill', '#282D30') // color
      .attr('rx', 5) // rounded

    // bar "Calories"
    svg
      .selectAll('.bar2')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.day) + 77 + barSpacing)
      .attr('y', (d) => yScale(d.calories) / 7 + 204)
      .attr('width', 7)
      .attr('height', (d) => (height - yScale(d.calories)) / 7)
      .attr('fill', '#F60000') // color
      .attr('rx', 5) // rounded
  }, [])

  return <svg id="barchart" width={width} height={height} />
}

export default BarChart
