import { useParams } from "react-router-dom";
import React from "react";

function IssueDetailPage() {
	const params = useParams();
	return (
		<div>{params.issueId} Issue</div>
	);
}

export default IssueDetailPage;