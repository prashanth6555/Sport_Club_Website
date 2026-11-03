import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import Field, { fieldClass } from '../components/Field'
import PageHero from '../components/PageHero'
import { club, heroSlides } from '../data/content'
import { useForm } from '../hooks/useForm'
import { usePageTitle } from '../hooks/usePageTitle'
import { isValidEmail, isValidName, isValidPhone, saveLocal } from '../utils/helpers'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!isValidName(values.name)) errors.name = 'Enter your full name using letters.'
  if (!isValidEmail(values.email)) errors.email = 'Enter a valid email address.'
  if (!isValidPhone(values.phone)) errors.phone = 'Enter a phone number with 10 to 14 digits.'
  if (values.topic.trim().length < 3) errors.topic = 'Add a subject of at least 3 characters.'
  if (values.message.trim().length < 12) errors.message = 'Write a message of at least 12 characters.'
  return errors
}

export default function Contact() {
  usePageTitle('Contact')
  const [params] = useSearchParams()
  const { values, errors, status, handleChange, handleSubmit, reset, update } = useForm(emptyForm, validate)

  useEffect(() => {
    const topic = params.get('topic')
    if (topic) update({ topic })
  }, [params, update])

  function onSubmit(event) {
    const valid = handleSubmit(event)
    if (!valid) return
    saveLocal('crestfield-messages', { ...values, sentAt: new Date().toISOString() })
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="The desk picks up."
        image={heroSlides[0]}
        imageAlt="Runner on an outdoor track"
      >
        Call, write, or use the form. For event spots, include the event name and the sport you train in.
      </PageHero>

      <section className="grid w-full lg:grid-cols-12">
        <div className="bg-ink px-5 py-16 text-white md:px-10 lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime">Club desk</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-[0.9]">Crestfield, Koramangala.</h2>
          <address className="mt-6 text-lg not-italic leading-relaxed text-white/80">
            {club.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a href={club.phoneHref} className="mt-6 block text-2xl text-lime">
            {club.phoneDisplay}
          </a>
          <a href={`mailto:${club.email}`} className="mt-2 block text-lg text-white hover:text-lime">
            {club.email}
          </a>
          <dl className="mt-8 space-y-3 text-sm text-white/75">
            {club.hours.map(([day, time]) => (
              <div key={day} className="flex justify-between gap-6 border-b border-white/10 pb-3">
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="px-5 py-16 md:px-10 lg:col-span-7">
          {status === 'success' ? (
            <div role="status">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">Message saved</p>
              <h2 className="mt-3 font-display text-5xl uppercase">Thanks, {values.name.split(' ')[0]}. We’ll read it.</h2>
              <p className="mt-4 max-w-xl text-ink/70">
                On this demo the note stays in your browser. A live site would send it to {club.email}.
              </p>
              <Button type="button" className="mt-8" onClick={() => reset(emptyForm)}>
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5">
              <h2 className="font-display text-5xl uppercase">Write to the club</h2>
              {status === 'error' ? (
                <p className="border border-ember/30 bg-ember/5 px-4 py-3 text-sm text-ember" role="alert">
                  Please fix the highlighted fields.
                </p>
              ) : null}
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className={fieldClass(errors.name)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={fieldClass(errors.email)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </Field>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="phone" label="Phone" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className={fieldClass(errors.phone)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                </Field>
                <Field id="topic" label="Subject" error={errors.topic}>
                  <input
                    id="topic"
                    name="topic"
                    value={values.topic}
                    onChange={handleChange}
                    className={fieldClass(errors.topic)}
                    aria-invalid={Boolean(errors.topic)}
                    aria-describedby={errors.topic ? 'topic-error' : undefined}
                  />
                </Field>
              </div>
              <Field id="message" label="Message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={values.message}
                  onChange={handleChange}
                  className={fieldClass(errors.message)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
              </Field>
              <Button type="submit">Send message</Button>
            </form>
          )}
        </div>
      </section>

      <section className="w-full bg-sand">
        <div className="flex flex-wrap items-end justify-between gap-4 px-5 py-8 md:px-8 xl:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pine">Location</p>
            <h2 className="mt-2 font-display text-4xl uppercase">12 Lakefront Drive</h2>
          </div>
          <a
            href={club.mapLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.16em] underline decoration-lime decoration-2 underline-offset-4"
          >
            Open the map
          </a>
        </div>
        <iframe
          title="Map showing Crestfield Sports Club in Koramangala, Bengaluru"
          src={club.mapEmbed}
          className="h-[440px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
