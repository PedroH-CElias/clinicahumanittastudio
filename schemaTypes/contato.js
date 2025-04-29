export default {
  name: 'contato',
  title: 'Contato',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
    },
    {
      name: 'telefone',
      title: 'Telefone',
      type: 'string',
    },
    {
      name: 'contactMessage',
      title: 'Mensagem automatica',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    },
    {
      name: 'instagramLink',
      title: 'Link do instagram',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
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
      name: 'somenteRodape',
      title: 'Somente Rodapé',
      type: 'boolean',
      description: 'Marque se esse contato deve aparecer apenas no rodapé.',
    },
  ],
}
