import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import subMinutes from "date-fns/subMinutes";

import { getDomainMetrics } from "./actions";
import DateTimePickers from "../../components/date-time-picker";
import Charts from "../../components/charts";
import ActionButtons from "../../components/action-buttons";
import "./dashboard.css";

const nowDate = () => new Date();

function Dashboard() {
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState({
    start_date: subMinutes(nowDate(), 30),
    end_date: nowDate(),
  });

  const handleSetDateRange = (type, value) => {
    setDateRange((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleFilter = () => dispatch(getDomainMetrics(dateRange));

  const handleReset = () => {
    setDateRange({
      start_date: subMinutes(nowDate(), 30),
      end_date: nowDate(),
    });
    dispatch(getDomainMetrics());
  };

  const handleAction = (type) => {
    switch (type) {
      case "filter":
        return handleFilter();

      case "reset":
        return handleReset();

      default:
        return null;
    }
  };

  useEffect(() => {
    dispatch(getDomainMetrics());
  }, [dispatch]);

  return (
    <div className="dashboard-wrapper">
      <h2>Performance Metrics</h2>

      <div className="date-picker-wrapper">
        <DateTimePickers dateRange={dateRange} onChange={handleSetDateRange} />
        <ActionButtons onClick={handleAction} />
      </div>

      <Charts />
    </div>
  );
}

export default Dashboard;
