import { INestApplication } from '@nestjs/common'
import { AppService } from "./app.service";
import { createTestingApp  } from "../test/setup/helpers";
import { AppModule } from "./app.module";

describe(AppService.name, () => {
  let mod: INestApplication
  let appService: AppService

  beforeAll(async () => {
    mod = await createTestingApp({
      imports: [ AppModule ],
    })

    appService = mod.get(AppService)
  })

  afterAll(async () => {
    await mod.close()
  })

  describe('check App service ', () => {
    it('should return "Hello World!"', async () => {
      const responseAppService = await appService.getHello()
      expect(responseAppService).toBe('Hello World!')
    })
  })

  describe('check App service getSquareNumber', () => {
    it('should return SquareNumber', async () => {
      const responseAppService = await appService.getSquareNumber(5)
      expect(responseAppService).toEqual(5*5)
    })
  })

  describe('check App service getElevateNumber', () => {
    it('should return ElevateNumber', async () => {
      const responseAppService = await appService.getElevateNumber(5, 5)
      expect(responseAppService).toEqual(5 ** 5)
    })
  })

  describe('get Date Now', () => {
    it('should return "now is Date + dateNow"', async () => {
      const responseAppService = await appService.getDateNow()
      expect(responseAppService).toContain('now is Date')
    })
  })

  describe('get Date Now toEqual Date String', () => {
    it('should return "now is Date + dateNow"', async () => {
      const responseAppService = await appService.getDateNow()
      const dateNow = new Date().toISOString()
      expect(responseAppService).toEqual('now is Date ' + dateNow.slice(0, 10))
    })
  })

  describe('sayGoodbay', () => {
    it('should return "goodbye ${name}! see you soon"', async () => {
      const name = 'Denis'
      const responseAppService = await appService.sayGoodbay(name)
      expect(responseAppService).toEqual(`goodbye ${name}! see you soon`)
    })
  })
})
