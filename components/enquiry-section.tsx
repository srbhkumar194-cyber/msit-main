'use client'

import type { FormEvent } from 'react'
import { site } from '@/lib/site'

const interests = [
  'Laptop',
  'Computer / Desktop',
  'Printer',
  'Apple Product',
  'Camera / CCTV',
  'Mobile',
  'Software',
  'AMC Plan',
  'Repair / Service',
]

const contactItems = [
  { icon: 'call', label: 'Phone', value: site.phoneDisplay, href: site.phoneHref },
  { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: 'location_on', label: 'Visit us', value: site.address },
  { icon: 'schedule', label: 'Working hours', value: site.hours },
]

export function EnquirySection() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      interest: String(formData.get('interest') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    }

    const message = [
      `Hello ${site.name}, I have an enquiry.`,
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Interested in: ${payload.interest}`,
      `Message: ${payload.message}`,
    ].join('\n')

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        console.error('Enquiry email failed to send:', await response.text())
      }
    } catch (error) {
      console.error('Enquiry email error:', error)
    }

    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-info">
          <h2 id="contact-title" className="md-typescale-headline-large section-title">
            Get a quote or book a service
          </h2>
          <p className="md-typescale-body-large section-subtitle">
            Share your requirement and our team will reply on WhatsApp within
            a few hours.
          </p>
          <ul className="contact-list" role="list">
            {contactItems.map((item) => (
              <li key={item.label} className="contact-item">
                <span className="icon-badge" aria-hidden="true">
                  <md-icon>{item.icon}</md-icon>
                </span>
                <div>
                  <p className="md-typescale-label-medium contact-label">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="md-typescale-body-large contact-value">
                      {item.value}
                    </a>
                  ) : (
                    <p className="md-typescale-body-large contact-value">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h3 className="md-typescale-title-large card-title">Send an enquiry</h3>
          <md-outlined-text-field
            label="Your name"
            name="name"
            required
            autocomplete="name"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Mobile number"
            name="phone"
            type="tel"
            required
            autocomplete="tel"
            pattern="[0-9+ ]{10,14}"
            error-text="Enter a valid mobile number"
          ></md-outlined-text-field>
          <md-outlined-select label="Interested in" name="interest" required>
            {interests.map((interest) => (
              <md-select-option key={interest} value={interest}>
                <div slot="headline">{interest}</div>
              </md-select-option>
            ))}
          </md-outlined-select>
          <md-outlined-text-field
            label="Message"
            name="message"
            type="textarea"
            rows={4}
            supporting-text="Model, budget, or the issue you are facing"
          ></md-outlined-text-field>
          <md-filled-button type="submit" class="form-submit">
            <md-icon slot="icon">send</md-icon>
            Send on WhatsApp
          </md-filled-button>
        </form>
      </div>
    </section>
  )
}
