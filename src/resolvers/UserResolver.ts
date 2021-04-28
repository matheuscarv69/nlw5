import { Arg, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";
import { UserService } from "../services/UserService";


@Resolver(User)
export class UserResolver {

  @Query(returns => User)
  async findUserByEmail(@Arg('email') email: string) {
    const userService = new UserService();

    const result = await userService.findByEmail(email);

    return result;
  }


}