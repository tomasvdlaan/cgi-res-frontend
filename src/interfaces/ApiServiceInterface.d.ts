class ApiServiceInterface<T> {
    getById(id: string): T;
    getAll(id: string): T[];
    create(data: T): boolean;
    update(data: T): boolean;
    delete(id: string): boolean;
}

export default ApiServiceInterface;