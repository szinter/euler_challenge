const { generateTemplateFiles } = require('generate-template-files');
  
generateTemplateFiles([
  {
    option: 'Create New Task Files',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './templates/new-task',
    },
    stringReplacers: ['__task__'],
    output: {
      path: './tasks/__task__(camelCase)',
      overwrite: true,
    },
  }
]);