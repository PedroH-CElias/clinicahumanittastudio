export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título da Página',
      type: 'string',
    },
    {
      name: 'imagemBanner',
      title: 'Imagem de Fundo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagemClinica',
      title: 'Imagem da Clínica',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'textoApresentacao',
      title: 'Texto de Apresentação',
      type: 'text',
    },
  ],
}
