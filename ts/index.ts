import * as plugins from './smartip.plugins'

export class SmartIp {
  localIps: {
    v4: string
    v6: string
  }
  publicIps: {
    v4: string
    v6: string
  }
  constructor() {
    // nothing here
  }

  async detect () {
    await this.detectLocal()
    await this.detectPublic()
  }

  /**
   * detects public ips
   */
  async detectPublic() {
    this.publicIps = {
      v4: await plugins.publicIp.v4({https: true}),
      v6: null
    }
  }

  /**
   * detects local ips
   */
  async detectLocal() {
    this.localIps = {
      v4: plugins.ip.address(),
      v6: null
    }
  }
}
