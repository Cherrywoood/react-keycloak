import { createUseI18n } from "keycloakify/login";

export const { useI18n } = createUseI18n({
    // NOTE: Here you can override the default i18n messages
    // or define new ones that, for example, you would have
    // defined in the Keycloak admin UI for UserProfile
    // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
    en: {
        alphanumericalCharsOnly: "Only alphanumerical characters",
        birthdate: "Birthdate",
        // Here we overwrite the default english value for the message "doForgotPassword" 
        // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
        doForgotPassword: "I forgot my password",
        registerTitle: "Register",
        doLogIn: "Sign In",
        doLogInHeader: "Sign In",
        noAccount: "New user?",
        doRegister: "Register",
        requiredFields: "Required fields",
        invalidEmailMessage: "Invalid email address."
    },
    ru: {
        /* spell-checker: disable */
        alphanumericalCharsOnly: "Только алфавитные символы",
        birthdate: "Дата рождения",
        doForgotPassword: "Забыли пароль?",
        registerTitle: "Регистрация",
        doLogIn: "Войти",
        doLogInHeader: "Вход",
        noAccount: "Первый раз?",
        doRegister: "Создайте аккаунт",
        requiredFields: "Обязательные поля",
        invalidEmailMessage:"Неправильный E-mail."
        /* spell-checker: enable */
    }
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
