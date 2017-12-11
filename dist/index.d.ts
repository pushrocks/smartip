export declare class SmartIp {
    localIps: {
        v4: string;
        v6: string;
    };
    publicIps: {
        v4: string;
        v6: string;
    };
    constructor();
    detect(): Promise<void>;
    /**
     * detects public ips
     */
    detectPublic(): Promise<void>;
    /**
     * detects local ips
     */
    detectLocal(): Promise<void>;
}
