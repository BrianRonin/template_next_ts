export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  // plop generator code
  plop.setWelcomeMessage(
    'escolha um plop para gerar plops: \n',
  )
  plop.setGenerator('component', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'qual o nome do seu componente?',
      },
      {
        type: 'input',
        message:
          'O componente faz parte de um grupo?',
        prefix: 'components/',
        filterz: (x, r) => {
          if (x) {
            x.replace('', '/')
            return (
              'components/' + x + '/' + r.name
            )
          } else {
            return 'components/' + r.name
          }
        },
        name: 'group',
      },
      {
        type: 'confirm',
        name: 'chield',
        filter: (x, r) => {
          if (x) return 'chield'
          if (!x) return 'noChield'
        },
        message: 'tem chield?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'addMany',
        destination:
          './src/components/{{ snakeCase name }}', //diretorio destiono
        stripExtensions: 'hbs', // .extension a ser removido
        templateFiles:
          'src/components/generator/ts/{{chield}}/**.hbs',
        base: 'src/components/generator/ts/{{chield}}/',
      },
    ], // array of actions
  })
  plop.setGenerator('markdown component', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'element',
        message: 'qual o elemento HTML?',
      },
      {
        type: 'input',
        name: 'name',
        message:
          'qual o nome do seu componente markdown?',
      },
      {
        type: 'input',
        name: 'group',
        message:
          'o componente esta em um grupo especifico?',
        filter: (x) => {
          if (x) {
            x.replace('', '/')
            return 'markdown/' + x + '/{{name}}'
          } else {
            return 'markdown/{{name}}'
          }
        },
      },
      {
        type: 'rawlist',
        name: 'chield',
        choices: ['chield', 'noChield'],
        message: 'tem chield?',
      },
      {
        type: 'rawlist',
        name: 'isTs',
        choices: ['ts', 'js'],
        message: 'tem typescript?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'addMany',
        destination:
          './src/components/markdown/components/{{ snakeCase name }}', //diretorio destiono
        stripExtensions: 'hbs', // .extension a ser removido
        templateFiles:
          'src/components/generator/markdown/{{isTs}}/{{chield}}/**.hbs',
        base: 'src/components/generator/markdown/{{isTs}}/{{chield}}/',
      },
    ], // array of actions
  })
}
