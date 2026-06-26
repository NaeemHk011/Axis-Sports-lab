import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '90aurlfw',
    dataset: 'production'
  },
  deployment: {
    appId: 'v3ojr3daxpwewsecjbfq2ey3',
    autoUpdates: true,
  },
})
