import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { site } from '@/lib/site'

const toAddress = process.env.ENQUIRY_EMAIL || site.email

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name ?? '').trim()
    const phone = String(body.phone ?? '').trim()
    const interest = String(body.interest ?? '').trim()
    const message = String(body.message ?? '').trim()

    if (!name || !phone || !interest) {
      return NextResponse.json(
        { error: 'Name, phone, and interest are required.' },
        { status: 400 },
      )
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT ?? 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            'SMTP email settings are not configured. Add SMTP_HOST, SMTP_USER, SMTP_PASS and optional ENQUIRY_EMAIL.',
        },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const submittedAt = new Date().toISOString()
    const emailText = `
New enquiry received from ${site.name}

Name: ${name}
Phone: ${phone}
Interested in: ${interest}
Message: ${message || 'No additional message'}
Submitted at: ${submittedAt}
`

    await transporter.sendMail({
      from: `"${site.name}" <${smtpUser}>`,
      to: toAddress,
      subject: `New enquiry: ${interest} - ${name}`,
      text: emailText,
      html: `
        <h2>New enquiry received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested in:</strong> ${interest}</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
        <p><strong>Submitted at:</strong> ${submittedAt}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send enquiry email:', error)
    return NextResponse.json(
      { error: 'Unable to send enquiry email.' },
      { status: 500 },
    )
  }
}
