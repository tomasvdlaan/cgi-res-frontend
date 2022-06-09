import BaseEntity from "./BaseEntity";
import Building from "./BuildingEntity";
import Reservation from "./ReservationEntity";

class Workspace extends BaseEntity {
	title?: string;
	isReservable = true;
	reservations?: Reservation[] = [];
	building?: Building;
}

export default Workspace;
