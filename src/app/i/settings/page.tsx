import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Settings } from './Settings'

export const metadata: Metadata = {
	title: 'Раздел настроек',
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return (
		<div>
			<Heading title='Раздел настроек' />
			<Settings />
		</div>
	)
}
