import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Invoice Slack Bot — Instant Invoicing for Freelancers',
  description: 'Create and send Stripe invoices instantly from Slack. Built for freelancers billing $50k+ annually.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e16e9b27-abc6-41fd-bd55-1ead41e10ee2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
