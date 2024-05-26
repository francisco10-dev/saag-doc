module.exports = {
  title: 'Documentación técnica',
  tagline: 'Sistema Administrativo de Apoyo General (SAAG)',
  url: 'https://tu-dominio.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tu-usuario', 
  projectName: 'mi-backend-docs',
  themeConfig: {
    navbar: {
      title: 'Inicio',
      items: [
        { 
          type: 'doc',
          docId: 'back end/instalacion', // Usa el identificador del documento para esta opción del navbar
          label: 'Back end', 
          position: 'left' 
        },
        { 
          type: 'doc',
          docId: 'front end/instalacion', // Usa el identificador del documento para esta opción del navbar
          label: 'Front end', 
          position: 'left' 
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()}.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false, 
      respectPrefersColorScheme: false, 
    },
    i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          path: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          // Asegúrate de que editUrl no esté presente aquí
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/tu-usuario/mi-backend-docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
