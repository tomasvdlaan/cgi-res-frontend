import BaseDTO from "./BaseDTO";
import UserDTO from "./UserDTO";

class ReservationDTO extends BaseDTO {
    public start: Date;
    public end: Date;
    public secret: string;
    public scannedAt?: Date;
    public user: UserDTO;
    public workspace: WorkspaceDTO;
    public reservableObject: ReservableObjectDTO;

    constructor(data: {
        id: string,
        start: Date,
        end: Date,
        secret: string,
        scannedAt?: Date,
        user: UserDTO,
        workspace: WorkspaceDTO,
        reservableObject: ReservableObjectDTO,
        createdAt: Date,
        updatedAt?: Date
    }) {
        super(data.id, data.createdAt, data.updatedAt);
        this.start = data.start;
        this.end = data.end;
        this.secret = data.secret;
        this.scannedAt = data.scannedAt;
        this.user = data.user;
        this.workspace = data.workspace;
        this.reservableObject = data.reservableObject;
    }
}

export default ReservationDTO;