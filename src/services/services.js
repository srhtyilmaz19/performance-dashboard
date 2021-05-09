import React from "react";
import axiosInstance from "../utils/axios";

class DomainServices extends React.Component {
  list = (instance) => axiosInstance(instance);
}

const domainServices = new DomainServices();
export default domainServices;
