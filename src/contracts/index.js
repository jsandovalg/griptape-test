import { createContract } from "@stakeordie/griptape.js";

const def = {
    queries: {
        getTokenInfo() {
            return { token_info: { } }
        }
    }
};

export const stkd = createContract({
    id: 'stkd',
    at: 'secret1847naf7ral278nqmj7gsvcv28zqfyeprd2al6v',
    definition: def
});