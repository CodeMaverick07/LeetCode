function minWindow(s: string, t: string): string {
    const s_len = s.length;
    const t_len = t.length;
    if (s_len < t_len || t_len === 0) {
        return "";
    }

    const need = new Map<string, number>();
    for (let k = 0; k < t_len; k++) {
        need.set(t[k], (need.get(t[k]) ?? 0) + 1);
    }
    const required = need.size; // number of distinct chars we must fully satisfy

    const window = new Map<string, number>();
    let formed = 0; // number of distinct chars currently satisfied

    let st = -1;
    let ed = -1;
    let i = 0;

    for (let j = 0; j < s_len; j++) {
        const c = s[j];
        window.set(c, (window.get(c) ?? 0) + 1);

        if (need.has(c) && window.get(c) === need.get(c)) {
            formed++;
        }

        while (formed === required) {
            const currLen = j - i + 1;
            if (st === -1 || currLen < (ed - st + 1)) {
                st = i;
                ed = j;
            }

            const left = s[i];
            window.set(left, window.get(left)! - 1);
            if (need.has(left) && window.get(left)! < need.get(left)!) {
                formed--;
            }
            i++;
        }
    }

    return st === -1 ? "" : s.slice(st, ed + 1);
}