// TEMPORARY, never commit: shows the ad timeline with no login or server, for viewing only.
// It sits outside the app's routes, so the router and its guards are unchanged, and no production build includes it.
// Delete this file and ../timeline-preview.html when the backend is reachable again.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import { I18nProvider } from '@/presentation/providers/I18nProvider'
import { QueryProvider } from '@/presentation/providers/QueryProvider'
import AdTimelinePage from '@/presentation/pages/advertisements/AdTimelinePage'
import { useUIStore } from '@/store/ui.store'
import '@/i18n'
import '@/index.css'

// ?lang=ar or ?lang=en chooses the language.
const language = new URLSearchParams(window.location.search).get('lang')
if (language === 'ar' || language === 'en') useUIStore.setState({ language })

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <StrictMode>
      <QueryProvider>
        <I18nProvider>
          <MemoryRouter>
            <AdTimelinePage />
          </MemoryRouter>
        </I18nProvider>
      </QueryProvider>
    </StrictMode>,
  )
}
