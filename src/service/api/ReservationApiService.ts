import ApiServiceInterface from "../../interfaces/ApiServiceInterface";
import ReservationDTO from "../../DTO/ReservationDTO";

class ReservationApiService implements ApiServiceInterface<ReservationDTO> {
    create(data: ReservationDTO): boolean {
        return false;
    }

    delete(id: string): boolean {
        return false;
    }

    getAll(id: string): ReservationDTO[] {
        return [];
    }

    getById(id: string): ReservationDTO {
        return new ReservationDTO();
    }

    update(data: ReservationDTO): boolean {
        return false;
    }


}