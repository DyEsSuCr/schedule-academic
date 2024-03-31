import { Module } from '@nestjs/common'
import { StudentModule } from '@/modules'

@Module({
  controllers: [],
  providers: [],
  imports: [StudentModule]
})
export class AppModule {}
