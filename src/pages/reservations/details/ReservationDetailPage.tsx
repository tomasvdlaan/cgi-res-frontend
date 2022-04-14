import { useParams } from "react-router-dom";

function ReservationDetailPage() {
    const params = useParams();
    return (
        <div>{params.reservationId} Reservatie</div>
    )
}

export default ReservationDetailPage;