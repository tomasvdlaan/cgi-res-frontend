import { BaseEntity } from "../../helper/BaseEntity";
import { Workspace } from "../../workspaces/WorkspaceEntity";

export class Reservation extends BaseEntity {
	start?: Date;
	end?: Date;
	userId?: string;
	secret?: string;
	workspace?: Workspace;
}
