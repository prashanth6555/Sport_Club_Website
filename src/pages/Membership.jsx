import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import Field, { fieldClass } from '../components/Field'
import PageHero from '../components/PageHero'
import { heroSlides, plans, sports } from '../data/content'
import { useForm } from '../hooks/useForm'
import { usePageTitle } from '../hooks/usePageTitle'
import { isValidEmail, isValidName, isValidPhone, rupee, saveLocal, todayISO } from '../utils/helpers'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  ageGroup: '',
  guardian: '',
  sport: '',
  plan: '',
  cycle: 'monthly',
  start: '',
  notes: '',
  agree: false,
}

function validate(values) {
  const errors = {}
  if (!isValidName(values.name)) errors.name = 'Enter your full name using letters.'
  if (!isValidEmail(values.email)) errors.email = 'Enter a valid email address.'
  if (!isValidPhone(values.phone)) errors.phone = 'Enter a phone number with 10 to 14 digits.'
  if (!values.ageGroup) errors.ageGroup = 'Choose an age group.'
  if (values.ageGroup === 'junior' && !isValidName(values.guardian)) {
    errors.guardian = 'A parent or guardian name is required for junior members.'
  }
  if (!values.sport) errors.sport = 'Choose a sport.'
  if (!values.plan) errors.plan = 'Choose a membership plan.'
  if (!values.start) errors.start = 'Choose a start date.'
  else if (values.start < todayISO()) errors.start = 'Start date cannot be in the past.'
  if (!values.agree) errors.agree = 'Please confirm the session rules.'
  return errors
}

export default function Membership() {
  usePageTitle('Membership')
  const [params] = useSearchParams()
  const form = useForm(emptyForm, validate)
  const { values, errors, status, handleChange, handleSubmit, reset, update } = form

  useEffect(() => {
    const plan = params.get('plan')
    const sport = params.get('sport')
    const partial = {}
    if (plans.some((item) => item.id === plan)) partial.plan = plan
    if (sports.some((item) => item.id === sport)) partial.sport = sport
    if (Object.keys(partial).length === 0) return undefined

    update(partial)
    const timer = window.setTimeout(() => {
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
    return () => window.clearTimeout(timer)
  }, [params, update])

  function onSubmit(event) {
    const valid = handleSubmit(event)
    if (!valid) return
    saveLocal('crestfield-memberships', { ...values, sentAt: new Date().toISOString() })
  }

  const priceFor = (plan) => (values.cycle === 'yearly' ? plan.monthly * 10 : plan.monthly)

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Plans with the price on the card."
        image={heroSlides[3]}
        imageAlt="Tennis player on court"
      >
        Rally is one sport. Match opens the whole club. Captain adds a weekly private session and a strength plan.
      </PageHero>

      <section className="w-full px-5 py-16 md:px-8 xl:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-5xl uppercase">Choose how you train</h2>
          <div className="flex border border-ink/15" role="group" aria-label="Billing cycle">
            {['monthly', 'yearly'].map((cycle) => (
              <button
                key={cycle}
                type="button"
                aria-pressed={values.cycle === cycle}
                onClick={() => update({ cycle })}
                className={`px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] ${
                  values.cycle === cycle ? 'bg-ink text-white' : 'bg-white text-ink'
                }`}
              >
                {cycle}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-3 text-ink/65">Yearly billing is ten months for twelve. Cancel with 30 days’ notice at the desk.</p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => {
            const selected = values.plan === plan.id
            return (
              <article
                key={plan.id}
                className={`flex flex-col border p-7 ${selected ? 'border-lime bg-ink text-white' : 'border-ink/10 bg-white'}`}
              >
                <h3 className="font-display text-5xl uppercase">{plan.name}</h3>
                <p className={`mt-2 ${selected ? 'text-white/70' : 'text-ink/65'}`}>{plan.tagline}</p>
                <p className={`mt-6 font-display text-5xl ${selected ? 'text-lime' : ''}`}>
                  {rupee(priceFor(plan))}
                </p>
                <p className={`text-sm uppercase tracking-[0.14em] ${selected ? 'text-white/60' : 'text-ink/50'}`}>
                  {values.cycle === 'monthly' ? 'per month' : 'per year'}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className={`mt-1 h-2 w-2 shrink-0 ${selected ? 'bg-lime' : 'bg-pine'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  type="button"
                  variant={selected ? 'lime' : 'line'}
                  className="mt-8"
                  onClick={() => {
                    update({ plan: plan.id })
                    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {selected ? 'Selected' : `Choose ${plan.name}`}
                </Button>
              </article>
            )
          })}
        </div>
      </section>

      <section id="register" className="w-full bg-sand px-5 py-16 md:px-8 xl:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pine">Registration</p>
            <h2 className="mt-3 font-display text-6xl uppercase leading-[0.9]">Tell us when you start.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              This form stays in your browser. The desk does not receive it — it is here so you can try the signup, including the checks.
            </p>
          </div>

          {status === 'success' ? (
            <div className="border border-ink bg-white p-8" role="status">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">Request saved</p>
              <h3 className="mt-3 font-display text-5xl uppercase">You’re on the list, {values.name.split(' ')[0]}.</h3>
              <p className="mt-4 text-ink/70">
                {plans.find((plan) => plan.id === values.plan)?.name} · {values.cycle} · starting {values.start}. In a live club this would go to the front desk.
              </p>
              <Button type="button" className="mt-8" onClick={() => reset(emptyForm)}>
                Register someone else
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 border border-ink/10 bg-white p-6 md:p-8">
              {status === 'error' ? (
                <p className="border border-ember/30 bg-ember/5 px-4 py-3 text-sm text-ember" role="alert">
                  Please fix the highlighted fields.
                </p>
              ) : null}

              <div className="grid gap-5 md:grid-cols-2">
                <Field id="name" label="Full name" error={errors.name}>
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
                <Field id="phone" label="Phone" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="98765 43210"
                    className={fieldClass(errors.phone)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                </Field>
                <Field id="ageGroup" label="Age group" error={errors.ageGroup}>
                  <select
                    id="ageGroup"
                    name="ageGroup"
                    value={values.ageGroup}
                    onChange={handleChange}
                    className={fieldClass(errors.ageGroup)}
                    aria-invalid={Boolean(errors.ageGroup)}
                    aria-describedby={errors.ageGroup ? 'ageGroup-error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="junior">Junior (8–15)</option>
                    <option value="adult">Adult (16–59)</option>
                    <option value="senior">Senior (60+)</option>
                  </select>
                </Field>
              </div>

              {values.ageGroup === 'junior' ? (
                <Field id="guardian" label="Parent or guardian" error={errors.guardian}>
                  <input
                    id="guardian"
                    name="guardian"
                    value={values.guardian}
                    onChange={handleChange}
                    className={fieldClass(errors.guardian)}
                    aria-invalid={Boolean(errors.guardian)}
                    aria-describedby={errors.guardian ? 'guardian-error' : undefined}
                  />
                </Field>
              ) : null}

              <div className="grid gap-5 md:grid-cols-2">
                <Field id="sport" label="Main sport" error={errors.sport}>
                  <select
                    id="sport"
                    name="sport"
                    value={values.sport}
                    onChange={handleChange}
                    className={fieldClass(errors.sport)}
                    aria-invalid={Boolean(errors.sport)}
                    aria-describedby={errors.sport ? 'sport-error' : undefined}
                  >
                    <option value="">Select</option>
                    {sports.map((sport) => (
                      <option key={sport.id} value={sport.id}>
                        {sport.name}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="plan" label="Plan" error={errors.plan}>
                  <select
                    id="plan"
                    name="plan"
                    value={values.plan}
                    onChange={handleChange}
                    className={fieldClass(errors.plan)}
                    aria-invalid={Boolean(errors.plan)}
                    aria-describedby={errors.plan ? 'plan-error' : undefined}
                  >
                    <option value="">Select</option>
                    {plans.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} · {rupee(priceFor(plan))}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="start" label="Start date" error={errors.start}>
                  <input
                    id="start"
                    name="start"
                    type="date"
                    min={todayISO()}
                    value={values.start}
                    onChange={handleChange}
                    className={fieldClass(errors.start)}
                    aria-invalid={Boolean(errors.start)}
                    aria-describedby={errors.start ? 'start-error' : undefined}
                  />
                </Field>
                <Field id="notes" label="Anything the coach should know" error={errors.notes}>
                  <input
                    id="notes"
                    name="notes"
                    value={values.notes}
                    onChange={handleChange}
                    className={fieldClass(false)}
                    placeholder="Optional"
                  />
                </Field>
              </div>

              <div>
                <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={values.agree}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 accent-pine"
                    aria-invalid={Boolean(errors.agree)}
                    aria-describedby={errors.agree ? 'agree-error' : undefined}
                  />
                  I will arrive on time, follow the coach, and wear non-marking shoes indoors.
                </label>
                {errors.agree ? (
                  <p id="agree-error" className="mt-1.5 text-sm text-ember" role="alert">
                    {errors.agree}
                  </p>
                ) : null}
              </div>

              <Button type="submit">Submit registration</Button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
