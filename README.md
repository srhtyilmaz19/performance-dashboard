

# Performance Analytic Dashboard 

This repository shows the charts of the  performance metrics of itself . Default time range is last 30 minutes but also any specific time range can be selected to display .


## Installation

```angular2html
npm install
```


## Initialization

performance-metrics-analyser is the library to measurement and communication with backend services.
```angular2html
import PerformanceAnalyser from 'performance-metrics-analyser';

const PerformanceMetricAnalyser = PerformanceAnalyser('http://localhost:5555/api/v1/metrics/create') // declare your endpoint url to store measure performance data .
PerformanceMetricAnalyser.analyse(); // trigger function.

```
