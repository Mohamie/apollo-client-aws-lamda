export const typeDefs = `#graphql
  type User {
    id: ID!,
    firstName: String,
    lastName: String,
    age: Int,
    tasks: [Task!]
  }
 
  type Task {
    id: ID!,
    description: String,
    completed: Boolean,
    user: User!
  }

  type ResponseMessage{
    message: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    tasks: [Task] 
    task(id: ID!): Task 
  }

  type Mutation {
    createUser(user: CreateUserInput!): User  
    createTask(userId: ID!, task: CreateTaskInput!): Task 
    updateTask(userId: ID!, taskId: ID!, task: UpdateTaskInput!): Task 
    completeTask(userId: ID!, taskId: ID!): Task 
    deleteTask(userId: ID!, taskId: ID!): ResponseMessage 
  }

  input CreateUserInput{
    firstName: String!
    lastName: String!
    age: Int!
  }
  
  input UpdateUserInput{
    firstName: String
    lastName: String
    age: Int
  }
  
  input CreateTaskInput{
    description: String!
    completed: Boolean!
  }
  
  input UpdateTaskInput{
    description: String
    completed: Boolean
  }
`;

