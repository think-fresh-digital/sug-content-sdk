import { sync } from 'glob';
import * as fs from 'fs/promises';
import * as path from 'path';

export const generateStories = (): (() => Promise<void>) => {
    return async () => {
        try {
            // Find all component files in the stories folder
            const componentFiles = sync('src/components/stories/**/*.tsx', {
                ignore: ['**/*.stories.tsx', '**/*.test.tsx']
            });

            for (const componentFile of componentFiles) {
                const componentName = path.basename(componentFile, '.tsx');
                const componentDir = path.dirname(componentFile);
                const storyFilePath = path.join(componentDir, `${componentName}.stories.tsx`);

                // Skip if story file already exists
                try {
                    await fs.access(storyFilePath);
                    console.log(`Story file already exists for ${componentName}, skipping...`);
                    continue;
                } catch {
                    // File doesn't exist, proceed with generation
                }

                // Generate basic story content
                const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import { Default as ${componentName} } from './${componentName}';
import { LayoutServicePageState } from '@sitecore-content-sdk/nextjs';

const meta: Meta<typeof ${componentName}> = {
    title: 'Components/${componentName}',
    component: ${componentName},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
    args: {
        rendering: {
            componentName: '${componentName}',
            uid: '{50de89e1-8742-43db-979f-6f2f025fd455}',
        },
        params: {
            styles: ''
        },
        sitecoreContext: {
            pageState: LayoutServicePageState.Normal
        },
        fields: {
            // Add your field values from Sitecore here
        }        
    },
};
`;

                // Write the story file
                await fs.writeFile(storyFilePath, storyContent);
                console.log(`Generated story file for ${componentName}`);
            }

            console.log('Story generation completed successfully!');
        } catch (error) {
            console.error('Error generating stories:', error);
            throw error;
        }
    };
};