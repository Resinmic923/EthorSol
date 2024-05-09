function getTokenBlockchain(tokenAddress) {
    if (typeof tokenAddress !== 'string') {
        return "Invalid token address";
    }

    // Check Ethereum token address format
    if (/^0x[0-9a-fA-F]{40}$/.test(tokenAddress)) {
        return "Ethereum";
    }

    // Check Solana token address format
    if (tokenAddress.length === 44 && tokenAddress.startsWith("S") && /^[0-9a-zA-Z]+$/.test(tokenAddress.substring(1))) {
        return "Solana";
    }

    // If the token address doesn't match any known format
    return "Unknown";
}

// Example usage:
const ethTokenAddress = "0x1234567890123456789012345678901234567890";
console.log(getTokenBlockchain(ethTokenAddress)); // Output: Ethereum

const solTokenAddress = "S1234567890123456789012345678901234567890123";
console.log(getTokenBlockchain(solTokenAddress)); // Output: Solana

const invalidTokenAddress = "invalid";
console.log(getTokenBlockchain(invalidTokenAddress)); // Output: Invalid token address
