import { UserRepository } from "@/domain/repositories/UserRepositories";
import { JoinEventRequest } from "@/domain/entities/JoinEvent";

export class JoinEventUsers {
  constructor(private userRepository: UserRepository) {}

  async execute(eventData: JoinEventRequest): Promise<void> {
    await this.userRepository.joinEventUsers(eventData);
  }
}
