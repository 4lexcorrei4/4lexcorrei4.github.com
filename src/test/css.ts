export function mediaBlock(css: string, query: string) {
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = new RegExp(`@media\\s*\\(\\s*${escaped}\\s*\\)\\s*\\{`).exec(css);
    if (!match) throw new Error(`missing @media (${query})`);

    let depth = 1;
    let index = match.index + match[0].length;
    const start = index;
    while (index < css.length && depth > 0) {
        if (css[index] === '{') depth += 1;
        else if (css[index] === '}') depth -= 1;
        index += 1;
    }
    return css.slice(start, index - 1);
}

export function cssOutsideMedia(css: string) {
    let result = '';
    let index = 0;
    while (index < css.length) {
        const at = css.indexOf('@media', index);
        if (at === -1) {
            result += css.slice(index);
            break;
        }
        result += css.slice(index, at);
        const brace = css.indexOf('{', at);
        let depth = 1;
        let cursor = brace + 1;
        while (cursor < css.length && depth > 0) {
            if (css[cursor] === '{') depth += 1;
            else if (css[cursor] === '}') depth -= 1;
            cursor += 1;
        }
        index = cursor;
    }
    return result;
}
