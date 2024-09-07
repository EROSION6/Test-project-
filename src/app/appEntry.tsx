import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './layouts/App'
import ProviderStore from './provider/route-store'

createRoot(document.getElementById('root')!).render(
	<ProviderStore>
		<App />
	</ProviderStore>
)
