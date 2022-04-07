import { useParams } from "react-router-dom";

function ReservationPage() {
    const params = useParams();
    return (
        <div>{params.reservationId} Reservatie</div>
    )
}

export default ReservationPage;