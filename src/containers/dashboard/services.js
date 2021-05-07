import React from "react";
import {fetchInstance} from "../../services/instance";


class DomainServices extends React.Component {
    list = (instance) => fetchInstance(instance);
}

const domainServices = new DomainServices();
export default domainServices;
