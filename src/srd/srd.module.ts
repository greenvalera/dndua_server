import { Module } from '@nestjs/common';
import { SrdService } from './srd.service';

@Module({
  providers: [SrdService],
  exports: [SrdService],
})
export class SrdModule {}
