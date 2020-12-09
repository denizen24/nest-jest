import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  getSquareNumber(number: number): number {
    return number*number
  }

  getElevateNumber(number: number, elevate: number): number {
    return number ** number
  }

  getDateNow(): string {
    const dateNow = new Date().toISOString();
    return 'now is Date ' + dateNow.slice(0, 10)
  }

  sayGoodbay(name: string): string {
    return `goodbye ${name}! see you soon`
  }
}
