import config from './sitecore.config';
import { defineCliConfig } from '@sitecore-content-sdk/nextjs/config';
import { generateSites, generateMetadata } from '@sitecore-content-sdk/nextjs/tools';
import { generateStories } from 'lib/build-commands/generate-stories';

export default defineCliConfig({
  build: {
    commands: [
      generateMetadata(),
      generateSites({
        scConfig: config,
      }),
      generateStories()
    ],
  },
  scaffold: {
    templates: [
      {
        name: "fixDefault",
        generateTemplate: (componentName: string) => {
          return `import React, { JSX } from 'react';
import { ${componentName}Props } from './${componentName}.types';

interface ${componentName}Fields {
  // Replace sample with your component fields
  sample: Field<string>;
}

export type ${componentName}Props = ComponentWithContextProps & {
  fields: ${componentName}Fields
}

export const Default = (props: ${componentName}Props): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={\`component \${props.params.styles}\`} id={id ? id : undefined}>
      <div className="component-content">
        <p>${componentName} Component</p>
      </div>
    </div>
  );
};`;
        },
        getNextSteps: (componentOutputPath: string) => {
          return [
            `component path is here: ${componentOutputPath}`,
          ];
        },
        fileExtension: 'tsx',
      },
    ],
  },
});
