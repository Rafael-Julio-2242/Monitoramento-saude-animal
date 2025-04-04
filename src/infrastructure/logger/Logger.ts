import winston from 'winston';
import { PrismaTransport } from './PrismaTransport';
import { prisma } from '../database/connection';

const logger = winston.createLogger({
 level: 'info',
 format: winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
 ),
 transports: [
  new winston.transports.Console(),
  new PrismaTransport(prisma, { level: 'error' })
 ]
});

export default logger;