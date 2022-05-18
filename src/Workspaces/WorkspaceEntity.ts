import { BaseEntity } from "../Helper/BaseEntity";
import { Building } from "../Buildings/BuildingEntity";

export class Workspace extends BaseEntity {
	title?: string;
	isReservable = true;
	building?: Building;
}
