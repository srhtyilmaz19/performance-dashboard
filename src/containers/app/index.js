import MeasureBrowserPerformance from 'measure-browser-performance';
import React from "react";
import {Route} from "react-router-dom";
import Dashboard from "../dashboard";


const PerformanceMetricAnalyser = MeasureBrowserPerformance('http://localhost:5555/api/v1/metrics/create')
PerformanceMetricAnalyser.analyse();


const App = () => (
    <div>
        <Route exact path="/" component={Dashboard}/>
    </div>
);

export default App;
