abstract class BaseDTO {
    protected constructor(public id: string, public createdAt: Date, public updatedAt?: Date) {}
}

export default BaseDTO;