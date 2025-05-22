export default {
  name: 'servico',
  title: 'Servico',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
}
