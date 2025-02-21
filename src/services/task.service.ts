import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTasks = async () => {
  return prisma.task.findMany();
};

export const createTask = async (data: { title: string; color: string; completed: boolean }) => {
  return prisma.task.create({ data });
};

export const updateTask = async (id: number, data: Partial<{ title: string; color: string; completed: boolean }>) => {
  return prisma.task.update({ where: { id }, data });
};

export const deleteTask = async (id: number) => {
  return prisma.task.delete({ where: { id } });
};
