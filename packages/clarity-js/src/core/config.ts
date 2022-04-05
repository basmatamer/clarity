import { Config, LeanMode, Time } from "@clarity-types/core";

let config: Config = {
    projectId: null,
    delay: 1 * Time.Second,
    lean: LeanMode.AllData,
    track: true,
    content: true,
    mask: [],
    unmask: [],
    regions: [],
    extract: [],
    cookies: [],
    report: null,
    upload: null,
    fallback: null,
    upgrade: null
};

export default config;
