import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'cz5sk2i8',
    dataset: 'production',
  },
  deployment: {
    appId: '6055c1a7b34fb4600e5256d8', // ✅ add this line
    autoUpdates: true,
  },
})
