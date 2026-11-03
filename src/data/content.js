const photo = (id, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`

const portrait = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&h=1120&q=75`

export const club = {
  name: 'Crestfield Sports Club',
  short: 'Crestfield',
  city: 'Bengaluru',
  established: 1998,
  addressLines: ['12 Lakefront Drive', 'Koramangala', 'Bengaluru 560034'],
  phoneDisplay: '+91 80 4567 2190',
  phoneHref: 'tel:+918045672190',
  email: 'hello@crestfield.club',
  hours: [
    ['Monday – Friday', '5:30 AM – 10:30 PM'],
    ['Saturday – Sunday', '6:00 AM – 9:00 PM'],
  ],
  mapEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=77.6045%2C12.9252%2C77.6445%2C12.9452&layer=mapnik&marker=12.9352%2C77.6245',
  mapLink: 'https://www.openstreetmap.org/?mlat=12.9352&mlon=77.6245#map=16/12.9352/77.6245',
}

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/sports', label: 'Sports' },
  { to: '/membership', label: 'Membership' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

export const heroSlides = [
  photo('1552674605-db6ffd4facb5', 2000),
  photo('1574629810360-7efbbe195018', 2000),
  photo('1519861531473-9200262188bf', 2000),
  photo('1595435934249-5df7ed86e1c0', 2000),
]

export const sports = [
  {
    id: 'cricket',
    name: 'Cricket',
    tag: 'Nets & turf',
    blurb: 'Graded nets, turf sessions, and a weekend league on the outfield.',
    image: photo('1531415074968-036ba1b575da'),
    imageAlt: 'Cricketer playing a shot on the field',
    summary:
      'Crestfield cricket is coached, not casual. Juniors learn grip, stance, and how to read a bowler. Adults book graded nets or turn out for the weekend XI.',
    details:
      'The lane has two nets, a bowling machine, and a turf pitch that takes spin. Sessions stay small so every batter and bowler gets a block of balls, then a short review with the coach before the next set.',
    levels: ['Junior academy (8–15)', 'Club nets', 'Match XI'],
    schedule: ['Mon & Wed · 6:00 AM nets', 'Tue & Thu · 7:30 PM turf', 'Sat · 7:00 AM match practice'],
    coach: 'Arjun Mehta',
    facility: 'Two nets, a turf pitch, and bowling machines',
  },
  {
    id: 'football',
    name: 'Football',
    tag: 'Pitch sessions',
    blurb: 'Technical drills midweek and small-sided games under floodlights.',
    image: photo('1574629810360-7efbbe195018'),
    imageAlt: 'Footballer striking a ball on a grass pitch',
    summary:
      'The football programme mixes first-touch work with games that actually resemble a match. You will press, switch play, and finish — not just jog laps.',
    details:
      'Midweek sessions run on the full pitch in groups of sixteen. Fridays are floodlit 7-a-side. New players spend the first two weeks in a placement group so the pace matches their touch.',
    levels: ['Foundation', 'Club', 'Competitive'],
    schedule: ['Tue & Thu · 6:30 PM technical', 'Fri · 8:00 PM floodlit 7s', 'Sun · 7:30 AM team play'],
    coach: 'Sofia Alvarez',
    facility: 'Full-size pitch with floodlights and a small-sided court',
  },
  {
    id: 'basketball',
    name: 'Basketball',
    tag: 'Indoor court',
    blurb: 'Shooting labs, 3x3 nights, and full-court runs for every level.',
    image: photo('1546519638-68e109498ffc'),
    imageAlt: 'Basketball dropping through a hoop',
    summary:
      'The indoor court is marked for both full-court and 3x3. Sessions open with footwork and close with live play, so the work shows up in the game.',
    details:
      'Shooting labs cap at twelve players. Open runs later in the evening are split by pace, not by ego — the coach moves people if a game gets lopsided.',
    levels: ['Skills lab', 'Open run', 'Club team'],
    schedule: ['Mon · 7:00 PM shooting lab', 'Wed · 8:00 PM open run', 'Sat · 5:00 PM 3x3'],
    coach: 'Marcus Hale',
    facility: 'Indoor sprung court with glass boards',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    tag: 'Six courts',
    blurb: 'Clear, smash, and footwork on wooden courts with proper lighting.',
    image: photo('1626224583764-f87db24ac4ea'),
    imageAlt: 'Badminton shuttlecock in mid-air',
    summary:
      'Six indoor courts, no shared hall with another sport. You can hear the shuttle, which is how you know the lighting and the ceiling height are right.',
    details:
      'Beginners start with grip and serve. Club players work patterns: lift, net, smash, then repeat until the footwork is boring and reliable. Ladder nights are posted every month.',
    levels: ['Beginner', 'Club ladder', 'Match play'],
    schedule: ['Daily · 6:00 AM court blocks', 'Tue & Thu · 6:00 PM coaching', 'Sun · 9:00 AM ladder'],
    coach: 'Mei Lin',
    facility: 'Six wooden courts, non-marking shoes required',
  },
  {
    id: 'tennis',
    name: 'Tennis',
    tag: 'Four courts',
    blurb: 'Cardio tennis, private blocks, and a monthly club ladder.',
    image: photo('1554068865-24cecd4e34b8'),
    imageAlt: 'Tennis ball resting on a racket',
    summary:
      'Four outdoor courts, two of them lit for evening sets. Coaching is built around one pattern at a time: serve, return, then the first ball after.',
    details:
      'Cardio tennis is the social on-ramp. Private blocks are 45 minutes. The monthly ladder is open to members who have played at least four coached sessions.',
    levels: ['Cardio tennis', 'Development', 'Ladder'],
    schedule: ['Mon & Wed · 6:30 AM cardio', 'Thu · 7:00 PM development', 'Sat · 4:00 PM ladder'],
    coach: 'Elena Petrova',
    facility: 'Four hard courts, two with floodlights',
  },
]

export const coaches = [
  {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    sport: 'Cricket',
    sportId: 'cricket',
    years: 14,
    title: 'Head cricket coach',
    image: portrait('1506794778202-cad84cf45f1d'),
    imageAlt: 'Portrait of Arjun Mehta',
    specialization: 'Batting technique and match awareness',
    credentials: 'BCCI Level 2 · Former state-squad batter',
    bio: 'Arjun builds sessions around one skill and a match situation. Juniors leave knowing why they played a shot, not only how. He still throws a long spell in the nets every Thursday.',
  },
  {
    id: 'sofia-alvarez',
    name: 'Sofia Alvarez',
    sport: 'Football',
    sportId: 'football',
    years: 11,
    title: 'Head football coach',
    image: portrait('1534528741775-53994a69daeb'),
    imageAlt: 'Portrait of Sofia Alvarez',
    specialization: 'Possession play and finishing',
    credentials: 'AFC B licence',
    bio: 'Sofia coaches the way she wants the team to play: short, sharp, and loud enough to be useful. New players are placed by a two-session trial, not by the shirt they wore last year.',
  },
  {
    id: 'marcus-hale',
    name: 'Marcus Hale',
    sport: 'Basketball',
    sportId: 'basketball',
    years: 9,
    title: 'Head basketball coach',
    image: portrait('1500648767791-00dcc994a43e'),
    imageAlt: 'Portrait of Marcus Hale',
    specialization: 'Shooting mechanics and 3x3',
    credentials: 'College champion · FIBA 3x3 instructor',
    bio: 'Marcus films one shooting session a month and sends notes, not a highlight reel. His open runs are split by pace so a new member can play without being posted up all night.',
  },
  {
    id: 'mei-lin',
    name: 'Mei Lin',
    sport: 'Badminton',
    sportId: 'badminton',
    years: 12,
    title: 'Head badminton coach',
    image: portrait('1580489944761-15a19d654956'),
    imageAlt: 'Portrait of Mei Lin',
    specialization: 'Footwork and doubles patterns',
    credentials: 'National medalist · BWF coaching certificate',
    bio: 'Mei treats footwork as the whole sport. If the split step is late, the smash lesson waits. Her ladder is the fairest board in the building, and she updates it herself.',
  },
  {
    id: 'elena-petrova',
    name: 'Elena Petrova',
    sport: 'Tennis',
    sportId: 'tennis',
    years: 16,
    title: 'Head tennis coach',
    image: portrait('1494790108377-be9c29b29330'),
    imageAlt: 'Portrait of Elena Petrova',
    specialization: 'Serve, return, and match play',
    credentials: 'PTR professional · 16 years on court',
    bio: 'Elena keeps cardio tennis welcoming and development sessions exact. She would rather you land eight serves in the same window than hit one that looks expensive.',
  },
  {
    id: 'daniel-okonkwo',
    name: 'Daniel Okonkwo',
    sport: 'Strength',
    sportId: 'strength',
    years: 10,
    title: 'Strength coach',
    image: portrait('1507003211169-0a1dd7228f2d'),
    imageAlt: 'Portrait of Daniel Okonkwo',
    specialization: 'Athletic strength for court and field sports',
    credentials: 'CSCS · Works across all five sports',
    bio: 'Daniel programmes strength for people who have a match on Saturday, not for people chasing a mirror. Captain members get a weekly plan. Everyone else can book a movement screen.',
  },
]

export const events = [
  {
    id: 'lakeside-cricket-cup',
    title: 'Lakeside Cricket Cup',
    sport: 'Cricket',
    sportId: 'cricket',
    inDays: 12,
    time: '7:00 AM – 5:00 PM',
    place: 'Turf pitch & outfield',
    image: photo('1540747913346-19e32dc3e97e'),
    imageAlt: 'Cricket stadium under floodlights',
    summary: 'A one-day T20 between club XIs and two invited sides from the city. Members can play or score.',
    spots: 'Two playing XIs still open',
  },
  {
    id: 'night-football-league',
    title: 'Night Football League',
    sport: 'Football',
    sportId: 'football',
    inDays: 19,
    time: '7:30 PM – 10:00 PM',
    place: 'Floodlit pitch',
    image: photo('1522778119026-d647f0596c20'),
    imageAlt: 'Football match under stadium lights',
    summary: 'Five-a-side league night. Teams are drawn from the current training groups so nobody has to recruit a whole side.',
    spots: 'Open to Match and Captain members',
  },
  {
    id: 'basketball-showdown',
    title: '3x3 Basketball Showdown',
    sport: 'Basketball',
    sportId: 'basketball',
    inDays: 26,
    time: '5:00 PM – 9:00 PM',
    place: 'Indoor court',
    image: photo('1504450758481-7338eba7524a'),
    imageAlt: 'Indoor basketball game in progress',
    summary: 'Short games, one timeout, winners stay. A referee from the coaching staff keeps the clock and the arguments.',
    spots: 'Sixteen teams',
  },
  {
    id: 'shuttle-smash-open',
    title: 'Shuttle Smash Open',
    sport: 'Badminton',
    sportId: 'badminton',
    inDays: 34,
    time: '9:00 AM – 4:00 PM',
    place: 'Courts 1–6',
    image: photo('1626224583764-f87db24ac4ea'),
    imageAlt: 'Close view of a badminton shuttlecock',
    summary: 'Singles in the morning, doubles after lunch. Flights are seeded from the club ladder.',
    spots: 'Entries close ten days prior',
  },
  {
    id: 'tennis-classic',
    title: 'Crestfield Tennis Classic',
    sport: 'Tennis',
    sportId: 'tennis',
    inDays: 41,
    time: '4:00 PM – 8:30 PM',
    place: 'Courts 1–4',
    image: photo('1595435934249-5df7ed86e1c0'),
    imageAlt: 'Tennis player preparing to return a serve',
    summary: 'Box league finals under the lights, then a social set for anyone who did not make the draw.',
    spots: 'Ladder players qualify automatically',
  },
  {
    id: 'members-day',
    title: 'Members’ Multi-Sport Day',
    sport: 'All sports',
    sportId: 'all',
    inDays: 68,
    time: '6:30 AM – 1:00 PM',
    place: 'Whole club',
    image: photo('1431324155629-1a6deb1dec8d'),
    imageAlt: 'Athlete tying shoes before training',
    summary: 'A morning to try a second sport with the head coach. Bring one guest. Breakfast is on the club.',
    spots: 'Guests must be registered',
  },
]

export const plans = [
  {
    id: 'rally',
    name: 'Rally',
    monthly: 1499,
    tagline: 'One sport, done properly.',
    features: [
      'One sport of your choice',
      '8 group sessions a month',
      'Locker on session days',
      'Member rates for events',
    ],
  },
  {
    id: 'match',
    name: 'Match',
    monthly: 3299,
    tagline: 'The plan most players pick.',
    featured: true,
    features: [
      'All five sports',
      'Unlimited group sessions',
      '2 coach check-ins a month',
      'One guest pass a month',
      'Event entry discount',
    ],
  },
  {
    id: 'captain',
    name: 'Captain',
    monthly: 6499,
    tagline: 'Coaching that follows you all week.',
    features: [
      'Everything in Match',
      'Weekly private coaching',
      'Strength plan with Daniel',
      'Priority event spots',
      'Four guest passes a month',
    ],
  },
]

export const reasons = [
  {
    number: '01',
    title: 'Coaches on the court',
    text: 'Head coaches run the sessions themselves. A stand-in does not appear because the diary got busy.',
  },
  {
    number: '02',
    title: 'Rooms that match the sport',
    text: 'Nets, a floodlit pitch, a sprung basketball court, six badminton courts, and four tennis courts. Nothing is borrowed from a school hall.',
  },
  {
    number: '03',
    title: 'A timetable you can plan around',
    text: 'Sessions are published for the month. If a court is full, the desk says so before you leave the house.',
  },
]

export const milestones = [
  {
    year: '1998',
    title: 'A pitch and a pavilion',
    text: 'The club opened with a cricket outfield, one tennis court, and a desk that was also the kitchen.',
  },
  {
    year: '2006',
    title: 'Indoor halls',
    text: 'Badminton moved under a proper ceiling. Tennis gained floodlights and a second pair of courts.',
  },
  {
    year: '2014',
    title: 'Pitch and hardwood',
    text: 'The football pitch was relaid and the basketball court came indoors, which ended monsoon cancellations.',
  },
  {
    year: '2019',
    title: 'A state-final year',
    text: 'Club sides reached state finals in cricket, badminton, and tennis in the same season.',
  },
  {
    year: '2026',
    title: 'Still a club, not a chain',
    text: '2,400 members, 18 coaches, and the same rule: if you train here, someone knows your name.',
  },
]

export const achievements = [
  { value: 48, suffix: '', label: 'State titles across the five sports' },
  { value: 12, suffix: '', label: 'National finalists since 2010' },
  { value: 18, suffix: '', label: 'Coaches on the current staff' },
  { value: 2400, suffix: '+', label: 'Active members this season' },
]

export const facilities = [
  {
    title: 'Turf and nets',
    image: photo('1531415074968-036ba1b575da', 1200),
    imageAlt: 'Cricket practice on a grass field',
    text: 'Morning nets before the city traffic, and a turf pitch that is rested between match weeks.',
  },
  {
    title: 'Floodlit pitch',
    image: photo('1459865264687-595d652de67e', 1200),
    imageAlt: 'Marked football pitch',
    text: 'A full pitch for team play and a marked small-sided area so 7s do not wander into the penalty box.',
  },
  {
    title: 'Indoor court',
    image: photo('1546519638-68e109498ffc', 1200),
    imageAlt: 'Basketball hoop and court',
    text: 'Sprung floor, glass boards, and a clock that the coach, not the loudest player, controls.',
  },
  {
    title: 'Racket halls',
    image: photo('1554068865-24cecd4e34b8', 1200),
    imageAlt: 'Tennis racket and ball',
    text: 'Badminton stays indoors. Tennis stays outside, with two courts lit until the last session.',
  },
]

export const stats = [
  { value: 2400, suffix: '+', label: 'Members' },
  { value: 18, suffix: '', label: 'Coaches' },
  { value: 5, suffix: '', label: 'Sports' },
  { value: new Date().getFullYear() - club.established, suffix: '', label: 'Years on this ground' },
]
