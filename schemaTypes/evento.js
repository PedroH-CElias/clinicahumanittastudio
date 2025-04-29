export default {
  name: 'evento',
  title: 'Evento',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome do Evento',
      type: 'string',
    },
    {
      name: 'resumo',
      title: 'Resumo do Evento',
      type: 'text',
    },
    {
      name: 'imagemFundo',
      title: 'Imagem de Fundo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagemEvento',
      title: 'Imagem do Evento',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
