import { Controller, Get, Req, UseGuards } from '@nestjs/common';
// import { GoogleAuthGuard } from './strategies/google.guard';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(AuthGuard('google'))
  async handleGoogleLogin() {
    return {
      message: 'This action will return google login url',
    };
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  handleGoogleRedirect() {
    console.log('Redirect');
    return { message: 'OK' };
  }

  @Get('status')
  user(@Req() request: Request) {
    console.log(request.user);
    if (request.user) {
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }
}
