import { User } from "@/domain/entities/User";
import { UserRepository } from "@/domain/repositories/UserRepositories";

export class getAllUsers {
  private UserRepository: UserRepository;

  constructor(UserRepository: UserRepository) {
    this.UserRepository = UserRepository;
  }

  async execute(): Promise<User[]> {
    return await this.UserRepository.getAllUsers();
  }
}
