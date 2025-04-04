import { PrismaClient } from '@prisma/client';
import Transport from 'winston-transport';

interface LogEntry {
 level: string;
 message: string;
 meta?: any;
 source?: string;
}


export class PrismaTransport extends Transport {
 private prisma: PrismaClient;

 constructor(prismaClient: PrismaClient, opts?: Transport.TransportStreamOptions) {
  super(opts);
  this.prisma = prismaClient;
 }

 log(info: LogEntry, callback: () => void) {
  setImmediate(() => {
   this.emit('logged', info);
  });
  
  this.prisma.log.create({
   data: {
    level: info.level,
    message: info.message,
    meta: info.meta ?? {},
    source: info.source ?? null
   }
  })
  .catch((e: any) => {
   console.error('Error loggin do DB: ', e);
  })
  .finally(() => {
   callback();
  });

 }

}