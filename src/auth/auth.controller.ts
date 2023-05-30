import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authServce: AuthService){}
    @HttpCode(HttpStatus.OK)
    
    // @UseGuards(AuthGuard)
    @Post('login')
    signIn(@Body()signInDto: Record<string,any>){
        return this.authServce.singIn(signInDto.username,signInDto.password);
    }
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}
