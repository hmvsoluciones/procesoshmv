
module.exports = {
	lang: "es-MX",
	title: "Portal de Procesos HMV Soluciones",
	description: "Portal de procesos HMV Soluciones",
	base: "/procesoshmv/",
	themeConfig: {
		logo: "./logo.png",
		siteTitle: false,
		nav: [
			{ text: "Inicio", link: "/" },
			{ text: "Introduccion", link: "/hmvsoluciones/introduccion" },
			{ text: "HMV Soluciones", link: "https://hmvsoluciones.com" },
		],
		sidebar: [
			{
				text: "HMV Soluciones",
				collapsed: false,
				items: [
					{ text: "Introduccion", link: "/hmvsoluciones/introduccion" },
					{ text: "Descripción empresa", link: "/hmvsoluciones/descripcionhmv" },
					{ text: "Metodología BPMN", link: "/hmvsoluciones/metodologiabpmn" },
					{ text: "Gestión de calidad", link: "/hmvsoluciones/gestiondecalidad" },
					{ text: "Procesos documentados", link: "/hmvsoluciones/procesosdocumentados" },
					{ text: "Anexos", link: "/hmvsoluciones/anexos" },
				],
			},
			{
				text: "Procesos clave",
				collapsed: true,
				items: [
					{ text: "Creacion de productos SaaS", link: "/procesosclave/proceso-creacion-productos-saas" },
					{ text: "Proceso clave 2", link: "/procesosclave/proceso-creacion-productos-saas" },
					{ text: "Proceso clave 3", link: "/procesosclave/proceso-creacion-productos-saas" },
					{ text: "Proceso clave 4", link: "/procesosclave/proceso-creacion-productos-saas" },
				],
			},
			{
				text: "Otros procesos",
				collapsed: true,
				items: [
					{ text: "Otro proceso 1", link: "/otrosprocesos/proceso-creacion-productos-saas" },
					{ text: "Otro proceso 2", link: "/otrosprocesos/proceso-creacion-productos-saas" },
					{ text: "Otro proceso 3", link: "/otrosprocesos/proceso-creacion-productos-saas" },
					{ text: "Otro proceso 4", link: "/otrosprocesos/proceso-creacion-productos-saas" },
				],
			}
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2024 HMV Soluciones",
		},
	},	
};
