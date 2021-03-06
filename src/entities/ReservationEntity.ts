import BaseEntity from "./BaseEntity";
import Workspace from "./WorkspaceEntity";

class Reservation extends BaseEntity {
	start?: Date;
	end?: Date;
	userId?: string;
	secret?: string;
	workspace?: Workspace;
	scannedAt?: Date;
	qrToken?: string;
}

export default Reservation;