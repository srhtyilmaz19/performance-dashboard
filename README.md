# Performance Analytic Dashboard

This repository shows the charts of the performance metrics of itself . Default time range is last 30 minutes but also any specific time range can be selected to display .


https://user-images.githubusercontent.com/82615231/117569872-545d0300-b0d0-11eb-8a66-d31ee2de3145.mov


## Initialization

performance-metrics-analyser is the library to measurement and communication with backend services.

```
const PerformanceMetricAnalyser = MeasureBrowserPerformance(
  process.env.REACT_APP_ANALYTICS_ENDPOINT # define your service endpoint in .env
);
PerformanceMetricAnalyser.analyse();
```

### Available Scripts

In the project directory, you can run:

```
npm install
```

Install necessary packages. You need to run this script only once.

```
npm start
```

Runs the app in the development mode. Watches your changes. \
Open [http://localhost:4444](http://localhost:4444) to view project in the browser.

```
npm test
```

Runs a predefined tests of the project. \
Results will shown on the console.
