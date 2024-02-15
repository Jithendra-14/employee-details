import React, { useEffect } from "react";
import { fetchEmployeeDetails } from "../../helpers";
import EmployeeDetailCard from "./EmployeeDetailCard";
import Refresh from "./Refresh";
const EmployeeDetails = () => {
	useEffect(() => {
		fetchEmployeeDetails();
	}, []);

	return (
		<div className="container">
			<Refresh />
			<EmployeeDetailCard />
		</div>
	);
};

export default EmployeeDetails;
