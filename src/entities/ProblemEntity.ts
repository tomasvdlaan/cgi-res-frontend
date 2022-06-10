import BaseEntity from "./BaseEntity";

class Problem extends BaseEntity {
	createdAt?: Date;
	updatedAt?: Date;
	title?: string;
	description?: string;
	solvedAt?: Date;
	scannedAt?: Date;
	priority?: number;
}

export default Problem;