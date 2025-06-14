import { RegisterDto } from "../../application/dtos/AuthDto";
import { User } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";

export class AuthRepository {
  async create(userData: RegisterDto): Promise<User> {
    return await prisma.user.create({ data: userData });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: number): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async findActiveByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        email,
        isActive: true,
      },
    });
  }
}
