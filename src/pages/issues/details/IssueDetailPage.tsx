import { useParams } from "react-router-dom";

function IssueDetailPage() {
    const params = useParams();
    return (
        <div>{params.issueId} Issue</div>
    )
}

export default IssueDetailPage;