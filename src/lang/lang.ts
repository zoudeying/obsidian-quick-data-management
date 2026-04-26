import zhTW from "./locale/zh-tw";
import zhCN from "./locale/zh-cn";
import ptBR from "./locale/pt-br";
import vi from "./locale/vi";
import uk from "./locale/uk";
import tr from "./locale/tr";
import th from "./locale/th";
import sq from "./locale/sq";
import ru from "./locale/ru";
import ro from "./locale/ro";
import pt from "./locale/pt";
import pl from "./locale/pl";
import nl from "./locale/nl";
import ne from "./locale/ne";
import nb from "./locale/nb";
import ms from "./locale/ms";
import ko from "./locale/ko";
import ja from "./locale/ja";
import it from "./locale/it";
import id from "./locale/id";
import hu from "./locale/hu";
import he from "./locale/he";
//import fa from "./locale/fa";
import fr from "./locale/fr";
import es from "./locale/es";
import en from "./locale/en";
import de from "./locale/de";
import da from "./locale/da";
import ca from "./locale/ca";
import be from "./locale/be";
import ar from "./locale/ar";
import { moment } from "obsidian";


/**
 * Locale object type.
 */
export type LangMap = Record<string, string>;

export const localeMap: { [k: string]: Partial<typeof en> } = {
    ar,
    be,
    ca,
    da,
    de,
    en,
    es,
    // fa,
    fr,
    he,
    hu,
    id,
    it,
    ja,
    ko,
    ms,
    ne,
    nl,
    nb,
    pl,
    pt,
    "pt-br": ptBR,
    ro,
    ru,
    sq,
    th,
    tr,
    uk,
    vi,
    "zh-cn": zhCN,
    "zh-tw": zhTW,
};

// 增加 toLowerCase() 确保匹配鲁棒性
const currentLocale = moment.locale().toLowerCase();
const locale = (localeMap[currentLocale] || localeMap[currentLocale.split("-")[0]] || en) as Partial<LangMap>;


function getValueFromPath(root: Record<string, unknown>, path: string): unknown {
    const normalized = path
        .replace(/\[(?:'([^']*)'|"([^"]*)"|([^'\]"[\]]+))\]/g, (_m, g1, g2, g3) => {
            const key = g1 ?? g2 ?? g3;
            return "." + key;
        })
        .replace(/^\./, "");

    if (normalized === "") return undefined;

    const parts = normalized.split(".");
    let cur: unknown = root;
    for (const part of parts) {
        if (cur == null) return undefined;
        if (part === "") return undefined;
        if (typeof cur === "object") {
            cur = (cur as Record<string, unknown>)[part];
        } else {
            return undefined;
        }
    }
    return cur;
}


function interpolate(str: string, params: Record<string, unknown>): string {
    if (!str || typeof str !== "string") return String(str ?? "");
    return str.replace(/\$\{([^}]+)\}/g, (_match, expression) => {
        const path = expression.trim();
        if (!/^[A-Za-z0-9_.[\]'"\s-]+$/.test(path)) {
            return "";
        }
        const val = getValueFromPath(params, path);
        if (val === undefined || val === null) return "";
        if (typeof val === "string") return val;
        if (typeof val === "number" || typeof val === "boolean" || typeof val === "bigint") {
            return String(val);
        }
        try {
            return JSON.stringify(val);
        } catch {
            return "";
        }
    });
}


export function $(
    str: any,
    params?: Record<string, unknown>
): string {
    const key = str;
    const fallback = (en as any)[key];
    // 确保 locale 存在且 key 存在，否则使用 fallback
    const result = (locale && locale[key]) ? (locale[key] as string) : (fallback ?? key);

    if (params) {
        return interpolate(result, params);
    }

    return result;
}
