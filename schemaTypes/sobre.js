export default {
  name: 'sobre',
  title: 'Sobre',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
    },
    {
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'sobreMim',
      title: 'Sobre mim',
      type: 'text',
    },
  ],
}
