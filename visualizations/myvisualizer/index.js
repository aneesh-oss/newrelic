import React from 'react';
import {AreaChart, PieChart, LineChart, BarChart} from "nr1";

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class HomeNerdlet extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, this is for testing not for production!</h1>
        <AreaChart 
        accountId = {4438265}
        query = "SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2NXxJTkZSQXxOQXw4Njc3OTkyMzM0ODg3NzM5ODQ1') TIMESERIES AUTO"
        fullWidth
        />
        <BarChart
        accountId = {4438265}
        query= "SELECT average(cpuPercent) AS `CPU used %` FROM SystemSample WHERE (entityGuid = 'NDQzODI2NXxJTkZSQXxOQXw4Njc3OTkyMzM0ODg3NzM5ODQ1') TIMESERIES AUTO"
        fullWidth
        />
        <PieChart 
        accountId={4438265}
        query= "SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI2NXxJTkZSQXxOQXw4Njc3OTkyMzM0ODg3NzM5ODQ1') TIMESERIES AUTO"
        fullWidth
        /> 

        <LineChart 
        accountId={4438265}
        query= "SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI2NXxJTkZSQXxOQXw4Njc3OTkyMzM0ODg3NzM5ODQ1') TIMESERIES AUTO "
        fullWidth
        />

        
      </div>
  )
  }
}

