import { expect, tap } from 'tapbundle'
import * as smartip from '../ts/index'

let testSmartIp: smartip.SmartIp

tap.test('should create valid instance of SmartIp', async () => {
  testSmartIp = new smartip.SmartIp()
  expect(testSmartIp).to.be.instanceOf(smartip.SmartIp)
})

tap.test('should get own ip', async () => {
  await testSmartIp.detect()
  expect(testSmartIp.publicIps.v4).to.be.string()
})

tap.start()
