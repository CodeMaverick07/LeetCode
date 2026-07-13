function nearestPalindromic(n: string): string {
    const len = n.length;
    const original = BigInt(n);
    const candidates = new Set<bigint>();

    candidates.add(10n ** BigInt(len - 1) - 1n);
    candidates.add(10n ** BigInt(len) + 1n);

    const prefixLength = Math.ceil(len / 2);
    const prefix = BigInt(n.substring(0, prefixLength));

    for (const adjustedPrefix of [prefix - 1n, prefix, prefix + 1n]) {
        const prefixStr = adjustedPrefix.toString();
        const mirrorSource = len % 2 === 0
            ? prefixStr
            : prefixStr.substring(0, prefixStr.length - 1);
        const mirrored = mirrorSource.split('').reverse().join('');
        candidates.add(BigInt(prefixStr + mirrored));
    }

    candidates.delete(original);

    let closest: bigint | null = null;
    let smallestDiff: bigint | null = null;

    for (const candidate of candidates) {
        const diff = candidate > original ? candidate - original : original - candidate;
        if (smallestDiff === null || diff < smallestDiff ||
            (diff === smallestDiff && candidate < closest!)) {
            smallestDiff = diff;
            closest = candidate;
        }
    }

    return closest!.toString();
}