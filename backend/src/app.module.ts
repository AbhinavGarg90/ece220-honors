import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PageModule } from './page/page.module';
import { ComponentModule } from './component/component.module';

@Module({
  imports: [UserModule, PrismaModule, PageModule, ComponentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
