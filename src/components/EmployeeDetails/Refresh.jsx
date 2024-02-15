import React from "react";
import { fetchEmployeeDetails } from "../../helpers";

const Refresh = () => {
	const handleRefresh = () => {
		fetchEmployeeDetails();
	};
	return (
		<div>
			<button onClick={handleRefresh} className="button">
				<span className="material-symbols-outlined">refresh</span>
			</button>
		</div>
	);
};

export default Refresh;
