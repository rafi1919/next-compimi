import { User } from "../entities/User";
import { JoinEventRequest } from "../entities/JoinEvent";

export interface UserRepository {
  getAllUsers(): Promise<User[]>;
  joinEventUsers(eventData: JoinEventRequest): Promise<void>;
}
