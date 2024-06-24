import { User } from "@/domain/entities/User";
import { JoinEventRequest } from "@/domain/entities/JoinEvent";
import { UserRepository } from "@/domain/repositories/UserRepositories";
import { getAllUsers, joinEventUsers } from "../api/UserApi";

export class UserRepositoryImpl implements UserRepository {
  async getAllUsers(): Promise<User[]> {
    return await getAllUsers();
  }

  async joinEventUsers(eventData: JoinEventRequest): Promise<void> {
    await joinEventUsers(eventData);
  }
}
