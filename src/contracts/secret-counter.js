import { createContract } from '@stakeordie/griptape.js';

const def = {
    messages: {
        doIncrement() {
            const handleMsg = { increment: { } };
            return { handleMsg };
        }
    },

    queries: {
        getCount() {
            return { get_count: { } };
        }
    }
};

export const secretCounter = createContract({
    id: 'secret-counter',
    at: 'secret1w97ynhe099cs5p433dvlaqhsxrszudz2n3f56h',
    definition: def
});