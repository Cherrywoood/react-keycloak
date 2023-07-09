import { createGetKcContext } from "keycloakify/login";


//NOTE: In most of the cases you do not need to overload the KcContext, you can 
// just call createGetKcContext(...) without type arguments.  
// You want to overload the KcContext only if:  
// - You have custom plugins that add some values to the context (like https://github.com/micedre/keycloak-mail-whitelisting that adds authorizedMailDomains)
// - You want to add support for extra pages that are not yey featured by default, see: https://docs.keycloakify.dev/contributing#adding-support-for-a-new-page
export const { getKcContext } = createGetKcContext({
	mockData: [
		{
			pageId: "login.ftl",
			locale: {
				currentLanguageTag: "ru",
			},
			//Uncomment the following line for hiding the Alert message
			//"message": undefined
			//Uncomment the following line for showing an Error message
			//message: { type: "error", summary: "This is an error" }
		},
		{
			//NOTE: You will either use register.ftl (legacy) or register-user-profile.ftl, not both
			pageId: "register-user-profile.ftl",
			locale: {
				currentLanguageTag: "ru"
			},
			profile: {
				attributes: [
					{
						validators: {
							pattern: {
								pattern: "^[a-zA-Z]+$",
								"ignore.empty.value": true,
								// eslint-disable-next-line no-template-curly-in-string
								"error-message": "${alphanumericalCharsOnly}",
							},
						},
						//NOTE: To override the default mock value
						value: undefined,
						name: "username"
					},
					{
						validators: {
							pattern: {
								pattern: "^[a-zA-Z]+$",
								"ignore.empty.value": true,
								// eslint-disable-next-line no-template-curly-in-string
								"error-message": "${alphanumericalCharsOnly}",
							},

						},
						name: "firstName",
					},
					{
						validators: {
							pattern: {
								pattern: "^[a-zA-Z0-9]+$",
								"ignore.empty.value": true,
								// eslint-disable-next-line no-template-curly-in-string
								"error-message": "${alphanumericalCharsOnly}",
							},
						},
						name: "lastName",
					},
					{
						validators: {
							email: {
							},
						},
						name: "email",
					},
				]
			}
		},
		{
			pageId: "login-reset-password.ftl",
			locale: {
				currentLanguageTag: "ru",
			}
		},
	]
});

export const { kcContext } = getKcContext({
	// Uncomment to test the login page for development.
	//mockPageId: "register-user-profile.ftl",
});


export type KcContext = NonNullable<ReturnType<typeof getKcContext>["kcContext"]>;