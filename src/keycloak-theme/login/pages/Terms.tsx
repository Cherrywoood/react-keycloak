import {clsx} from "keycloakify/tools/clsx";
import {useRerenderOnStateChange} from "evt/hooks";
import {Markdown} from "keycloakify/tools/Markdown";
import type {PageProps} from "keycloakify/login/pages/PageProps";
import {useGetClassName} from "keycloakify/login/lib/useGetClassName";
import {evtTermMarkdown, useDownloadTerms} from "keycloakify/login/lib/useDownloadTerms";
import tos_ru_url from "../assets/tos_ru.md";
import type {KcContext} from "../kcContext";
import type {I18n} from "../i18n";

export default function Terms(props: PageProps<Extract<KcContext, { pageId: "terms.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes
    });

    const { msg, msgStr } = i18n;

    useDownloadTerms({
        kcContext,
        "downloadTermMarkdown": async ({currentLanguageTag}) => {

            const tos_url = (() => {
                switch (currentLanguageTag) {
                    default: return tos_ru_url;
                }
            })();

            return await fetch(tos_url).then(response => response.text());
        }
    });

    useRerenderOnStateChange(evtTermMarkdown);

    const { url } = kcContext;

    const termMarkdown = evtTermMarkdown.state;

    if (termMarkdown === undefined) {
        return null;
    }

    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} displayMessage={false} headerNode={msg("termsTitle")}>
            <div id="kc-terms-text">
                <Markdown>{termMarkdown}</Markdown>
            </div>
            <form className="form-actions" action={url.loginAction} method="POST">
                <input
                    className={clsx(
                        getClassName("kcButtonClass"),
                        getClassName("kcButtonClass"),
                        getClassName("kcButtonClass"),
                        getClassName("kcButtonPrimaryClass"),
                        getClassName("kcButtonLargeClass")
                    )}
                    name="accept"
                    id="kc-accept"
                    type="submit"
                    value={msgStr("doAccept")}
                />
                <input
                    className={clsx(getClassName("kcButtonClass"), getClassName("kcButtonDefaultClass"), getClassName("kcButtonLargeClass"))}
                    name="cancel"
                    id="kc-decline"
                    type="submit"
                    value={msgStr("doDecline")}
                />
            </form>
            <div className="clearfix" />
        </Template>
    );
}
