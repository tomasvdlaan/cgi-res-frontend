import { BaseEntity } from "../helper/BaseEntity";
import { Building } from "../buildings/BuildingEntity";

export class Workspace extends BaseEntity {
	title?: string;
	isReservable = true;
	building?: Building;
}
