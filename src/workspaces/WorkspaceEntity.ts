import { BaseEntity } from "../Helper/BaseEntity";
import { Building } from "../buildings/BuildingEntity";

export class Workspace extends BaseEntity {
	title?: string;
	isReservable = true;
	building?: Building;
}
