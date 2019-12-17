import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import "../App.css";
import { string } from "prop-types";
import { HeartRate } from "../pages";
import { app } from "../const";
interface HeartRate {
  time: number;
  value: number;
}
export default (props: any) => {
  const [data, setData] = useState<Array<HeartRate>>([]);
  const xMax: number = 1000;
  const xMin: number = 0;
  const yMax: number = props.type === "sound" ? 3000 : 3900;
  const yMin: number = props.type === "sound" ? 1800 : 2700;

  var margin = { top: 10, right: 50, bottom: 50, left: 50 },
    width = window.outerWidth * 0.8, // Use the window's width
    height = window.outerHeight * 0.5; // Use the window's height

  var xScale = d3
    .scaleLinear()
    .domain([xMin, xMax]) // input
    .range([0, width]); // output

  var yScale = d3
    .scaleLinear()
    .domain([yMin, yMax]) // input
    .range([height, 0]); // output

  var line = d3
    .line<HeartRate>()
    .x(function(d) {
      return xScale(d.time);
    }) // set the x values for the line generator
    .y(function(d) {
      return yScale(d.value);
    }); // set the y values for the line generator

  let db = app
    .database()
    .ref()
    .limitToLast(1000);

  useInterval(() => {
    getData();
  }, 1000);

  function useInterval(callback: any, delay: any) {
    const savedCallback: any = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const getData = () => {
    let num: RegExp = /[0-9]+$/;
    setData([]);
    if (props.type === "heart-rate") {
      db.on("child_added", snap => {
        if (
          parseInt(snap.val().HeartRateSensor) >= 2800 &&
          num.test(snap.val().HeartRateSensor) &&
          num.test(snap.val().time)
        ) {
          let heartRatePayload = {
            value: parseInt(snap.val().HeartRateSensor),
            time: parseInt(snap.val().time) % 1000
          };
          data.push(heartRatePayload);
          console.log(data);
        }
      });
    } else if (props.type === "sound") {
      db.on("child_added", snap => {
        if (
          num.test(snap.val().MicrophoneSensor) &&
          num.test(snap.val().time)
        ) {
          let soundPayload = {
            value: parseInt(snap.val().MicrophoneSensor),
            time: parseInt(snap.val().time) % 1000
          };
          data.push(soundPayload);
          console.log(data);
        }
      });
    }
    var svg = d3
      .select("#heart-rate")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    svg
      .append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft
    svg
      .append("path")
      .datum(data) // 10. Binds data to the line
      .attr("class", "line") // Assign a class for styling
      .attr("d", line); // 11. Calls the line generator

    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle") // Uses the enter().append() method
      .attr("class", "dot")
      .attr("cx", function(d) {
        return xScale(d.time);
      })
      .attr("cy", function(d) {
        return yScale(d.value);
      })
      .attr("r", 0);
  };
  return (
    <div>
      {/* <p className="current-heart-rate">
        <h3>{`time:${curTime}`}</h3>
        <h3>{`value:${curVal}`}</h3>
      </p> */}
      <svg id="heart-rate"></svg>
    </div>
  );
};
