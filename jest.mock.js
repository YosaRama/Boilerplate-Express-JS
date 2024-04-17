jest.mock('./src/databases', () => ({
  prisma: {
    vouchers: {
      count: jest.fn(),
      findMany: jest.fn().mockResolvedValue([{ id: 1, name: 'Test User 1' }]),
      findUnique: jest.fn().mockResolvedValue({ id: 1, name: 'Test User 1' }),
      delete: jest.fn().mockResolvedValue([{ id: 1, name: 'Test User 1' }]),
      create: jest.fn(),
      update: jest.fn(),
    },
  },
}));

jest.mock('./src/utils/schedular', () => ({
  cron: {
    schedular: jest.fn(),
  },
}));

process.env.ENABLE_AUTHENTICATION = 'false';
