import { BaseEntity } from "../../helpers/BaseEntity";
import { Building } from "../buildings/BuildingEntity";

export class Workspace extends BaseEntity {
	title?: string;
	isReservable = true;
	building?: Building;
}
