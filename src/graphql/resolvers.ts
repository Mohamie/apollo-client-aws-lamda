import { TaskRepository } from "../db/repositories/TaskRepository.js";
import { UserRepository } from "../db/repositories/UserRepository.js";

export const resolvers = {
    Query: {
        users: async () => await UserRepository.getUsers(),
        user: async (parent, {id}) => await UserRepository.getUsersById(id),
        tasks: async () => await TaskRepository.getAllTasks(),
        task: async (parent, {id}) => await TaskRepository.getTaskById(id),
    },
    Mutation: {
        createUser: async (parent, {user}) => await UserRepository.createUser(user),
        createTask: async (parent, {userId, task}) => await TaskRepository.createUserTask(userId, task),
        updateTask: async (parent, {userId, taskId, task}) => await TaskRepository.updateUserTask(userId, taskId, task),
        completeTask: async (parent, {userId, taskId}) => await TaskRepository.completeUserTask(userId, taskId),
        deleteTask: async (parent, {userId, taskId}) => await TaskRepository.deleteUserTask(userId, taskId),
    }
};