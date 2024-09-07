import { Provider } from 'react-redux'
import { store } from '../appStore'

type ProviderStoreProps = {
	children: React.ReactNode
}

export default function ProviderStore({ children }: ProviderStoreProps) {
	return <Provider store={store}>{children}</Provider>
}
