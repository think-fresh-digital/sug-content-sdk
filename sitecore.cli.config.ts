import config from './sitecore.config';
import { defineCliConfig } from '@sitecore-content-sdk/nextjs/config';
import { generateSites, generateMetadata } from '@sitecore-content-sdk/nextjs/tools';

export default defineCliConfig({
  build: {
    commands: [
      generateMetadata(),
      generateSites({
        scConfig: config,
      }),
    ],
  },
  scaffold: {
    templates: [
      {
        name: "fixDefault",
        generateTemplate: (componentName: string) => {
          return `import React, { JSX } from 'react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface ${componentName}Props {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
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
