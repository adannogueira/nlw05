import { UsersRepository } from '../repositories/UsersRepository'

export class UsersService {
  constructor(private readonly usersRepository = UsersRepository) {}

  async create(email: string) {
    const userAlreadyExists = await this.usersRepository.findOneBy({
      email
    })
    if (userAlreadyExists) {
      return userAlreadyExists
    }
    const user = this.usersRepository.create({
      email
    })
    await this.usersRepository.save(user)
    return user
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email })
    return user
  }

  async findOrCreateByEmail(email: string) {
    const user = await this.findByEmail(email)
    return user || await this.create(email)
  }
}
