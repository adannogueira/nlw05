import { UsersRepository } from '../repositories/UsersRepository'

export class UsersService {
  async create(email: string) {
    const userAlreadyExists = await UsersRepository.findOneBy({
      email
    })
    if (userAlreadyExists) {
      return userAlreadyExists
    }
    const user = UsersRepository.create({
      email
    })
    await UsersRepository.save(user)
    return user
  }
}
