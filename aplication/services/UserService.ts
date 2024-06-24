import { getAllUsers } from "../useCase/GetAllUsers";
import { JoinEventUsers } from "../useCase/JoinEventUsers";
import { UserRepositoryImpl } from "@/infrastructure/database/UserRepositoryImpl";

export class UserService {
  private getAllUsersUseCase: getAllUsers;
  private joinEventUsersUseCase: JoinEventUsers;

  constructor() {
    const userRepository = new UserRepositoryImpl();
    this.getAllUsersUseCase = new getAllUsers(userRepository);
    this.joinEventUsersUseCase = new JoinEventUsers(userRepository);
  }

  async getAllUsers() {
    return await this.getAllUsersUseCase.execute();
  }

  async joinEventUsers(eventData: JoinEventUsers) {
    await this.joinEventUsersUseCase.execute(eventData);
  }
}
