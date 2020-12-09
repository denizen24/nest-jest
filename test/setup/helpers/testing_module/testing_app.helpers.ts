import { ModuleMetadata } from '@nestjs/common/interfaces'
import { Test } from '@nestjs/testing'

export async function createTestingApp(metadata: ModuleMetadata) {
  const moduleBuilder = Test.createTestingModule(metadata)
  const mod = await moduleBuilder.compile()
  const app = mod.createNestApplication()
  return app.init()
}
