import { ModuleMetadata } from '@nestjs/common/interfaces'
import { Test } from '@nestjs/testing'

export async function createTestingModule(metadata: ModuleMetadata) {
  const moduleBuilder = Test.createTestingModule(metadata)
  const mod = await moduleBuilder.compile()
  return mod.init()
}
