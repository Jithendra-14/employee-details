import React, { useEffect, useState } from "react";
import { getEmployeeData } from "../../helpers";

const EmployeeDetailCard = () => {
	const [empData, setEmpData] = useState(getEmployeeData());
	useEffect(() => {
		const handleStorage = () => {
			setEmpData(JSON.parse(localStorage.getItem("employee")));
		};
		window.addEventListener("storage", handleStorage);
		return () => {
			window.removeEventListener("storage", handleStorage);
		};
	}, []);
	return (
		<div className="card">
			<h3>
				<em className="underline">Name</em>&nbsp; :&nbsp;{empData.name}
			</h3>
			<span>
				<em className="underline">Email</em>&nbsp; :&nbsp;{empData.email}
			</span>
		</div>
	);
};

export default EmployeeDetailCard;
