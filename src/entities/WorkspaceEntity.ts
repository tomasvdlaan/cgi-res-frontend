import BaseEntity  from "./BaseEntity";
import Building from "./BuildingEntity";

class Workspace extends BaseEntity {
	title?: string;
	isReservable = true;
	building?: Building;
}

export default Workspace;
