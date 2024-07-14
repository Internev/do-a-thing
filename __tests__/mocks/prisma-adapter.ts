const prismaMock = {
  user: {
    findUnique: jest.fn(),
    // add other methods as needed
  },
  // add other models and methods as needed
}

export const PrismaAdapter = jest.fn().mockImplementation(() => {
  return {
    getAdapter: jest.fn(() => prismaMock),
  }
})
