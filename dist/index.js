"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartip.plugins");
class SmartIp {
    constructor() {
        // nothing here
    }
    detect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.detectLocal();
            yield this.detectPublic();
        });
    }
    /**
     * detects public ips
     */
    detectPublic() {
        return __awaiter(this, void 0, void 0, function* () {
            this.publicIps = {
                v4: yield plugins.publicIp.v4({ https: true }),
                v6: null
            };
        });
    }
    /**
     * detects local ips
     */
    detectLocal() {
        return __awaiter(this, void 0, void 0, function* () {
            this.localIps = {
                v4: plugins.ip.address(),
                v6: null
            };
        });
    }
}
exports.SmartIp = SmartIp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBRTVDO0lBU0U7UUFDRSxlQUFlO0lBQ2pCLENBQUM7SUFFSyxNQUFNOztZQUNWLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ3hCLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQzNCLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0csWUFBWTs7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDZixFQUFFLEVBQUUsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztnQkFDNUMsRUFBRSxFQUFFLElBQUk7YUFDVCxDQUFBO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDRyxXQUFXOztZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUN4QixFQUFFLEVBQUUsSUFBSTthQUNULENBQUE7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQXJDRCwwQkFxQ0MifQ==