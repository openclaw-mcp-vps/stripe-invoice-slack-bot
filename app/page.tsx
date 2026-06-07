export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For freelancers billing $50k+ annually
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Send Stripe invoices{' '}
          <span className="text-[#58a6ff]">straight from Slack</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Type a slash command, get a Stripe invoice link in seconds. No browser tabs, no copy-pasting — just fast, professional billing inside your existing workflow.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get started — $15/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-left font-mono text-sm">
          <p className="text-[#8b949e] mb-1"># In any Slack channel</p>
          <p><span className="text-[#58a6ff]">/invoice</span> <span className="text-[#c9d1d9]">client@acme.com $2500 "Website redesign - Phase 1"</span></p>
          <p className="mt-3 text-[#3fb950]">✓ Invoice created: https://invoice.stripe.com/i/acct_...</p>
          <p className="text-[#3fb950]">✓ Email sent to client@acme.com</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited invoices via Slack',
              'Stripe integration included',
              'Instant email delivery to clients',
              'Invoice status in Slack',
              'Multi-workspace support',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start free trial
          </a>
          <p className="text-[#8b949e] text-xs mt-3">14-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the Slack bot work?</h3>
            <p className="text-[#8b949e] text-sm">Install the bot to your Slack workspace, connect your Stripe account, then use <code className="text-[#58a6ff]">/invoice</code> with a client email, amount, and description. The bot creates a Stripe invoice and sends the link back to your channel instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need an existing Stripe account?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You connect your own Stripe account during setup. All payments go directly to you — we never touch your funds. Stripe's standard processing fees apply.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I use this across multiple Slack workspaces?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Your $15/mo plan covers unlimited Slack workspaces and unlimited invoices. Install the bot wherever your clients communicate.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Stripe Invoice Slack Bot. All rights reserved.
      </footer>
    </main>
  )
}
