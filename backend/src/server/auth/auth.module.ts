import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
// import { MongooseModule } from '@nestjs/mongoose';
import { OAuth2Client } from 'google-auth-library';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'jwt-secret',
      signOptions: { expiresIn: '7d' },
    }),
    // MongooseModule.forFeature([{ name: 'Token', schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, ConfigService, OAuth2Client],
  exports: [AuthService],
})
export class AuthModule {}
