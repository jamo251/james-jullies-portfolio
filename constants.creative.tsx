import { HeroContent, Release, Track } from './types';

export const ARTIST_HERO: HeroContent = {
  eyebrow: 'Producer & Composer | JAMO | Bahrain',
  lines: [
    { text: 'JAMO' },
    { text: 'Sound &', accent: true },
    { text: 'Instinct.' },
  ],
  bio: 'The other half of the architect. As JAMO I write and produce instrumental electronic music, most recently ANIMUS, a nine-track EP where every song channels the spirit of a different animal.',
  ctas: [
    { label: 'Hear the EP', href: '#animus' },
    { label: 'In the Works', href: '#releases' },
  ],
};

export const ARTIST_MARQUEE_WORDS = ['Animus', 'Sound', 'Rhythm', 'Instinct'];

export const ARTIST_NAV_LINKS = [
  { href: '#animus', label: 'Animus EP' },
  { href: '#releases', label: 'In the Works' },
  { href: '#contact', label: 'Contact' },
];

export const ANIMUS_INTRO =
  'Animus is Latin for spirit. Nine instrumental tracks, each channeling a different animal: its habitat, its movement, its temperament. Five are out now, four are still taking shape.';

export const ANIMUS_TRACKS: Track[] = [
  {
    title: 'Jaguar',
    concept: 'Jungle floor at night. Slinky and dangerous, moving low through the trees.',
    mood: ['Slinky', 'Powerful', 'Dangerous'],
    spotifyTrackId: '3zs1ITpWIhcZfGKna31LGd',
  },
  {
    title: 'Seal',
    concept: 'Arctic water under ice. Chilled, playful trap with a dreamy, flowing pulse.',
    mood: ['Underwater', 'Playful', 'Dreamy'],
    spotifyTrackId: '6kJ4ffD6yqOmG32URu7KqD',
  },
  {
    title: 'Dragonfly',
    concept: 'From swamp haze to neon skyline, carried on fluttering, futuristic synths.',
    mood: ['Floating', 'Futuristic', 'Tokyo'],
    spotifyTrackId: '22zQ6QldrJvx6wzgyoI0f9',
  },
  {
    title: 'Octopus',
    concept: 'Reef logic. Clever, intricate, and synth-heavy, with eight lines moving at once.',
    mood: ['Clever', 'Intricate', 'Synth-heavy'],
    spotifyTrackId: '61x3E2XMqTDVjvVBXt93gy',
  },
  {
    title: 'Bear',
    concept: 'A forest clearing at dusk. Smooth and brooding, powerful yet chilled.',
    mood: ['Brooding', 'Smooth', 'Chilled'],
    spotifyTrackId: '0JBpWtQl4VgQlj44j1G1hp',
  },
  {
    title: 'Phoenix',
    concept: 'Cycles of death and rebirth. One melody, reborn into a new harmonic world each time.',
    mood: ['Cycles', 'Rebirth', 'Ashes'],
  },
  {
    title: 'Spider',
    concept: 'Plucked arpeggios weaving a web, one thread at a time. Intricate and unsettling.',
    mood: ['Unsettling', 'Arpeggios', 'Pulsating'],
  },
  {
    title: 'Owl',
    concept: 'The closest thing to a ghost in the bird world. Piano, silence, and silent flight.',
    mood: ['Silent', 'Secretive', 'Ghostly'],
  },
  {
    title: 'Wolf',
    concept: 'A hunt on a drum and bass groove, with howls sampled into horns.',
    mood: ['Howling', 'Solitary', 'Dark'],
  },
];

export const OTHER_RELEASES: Release[] = [
  {
    title: 'Silent Night (2025)',
    status: 'In the Studio',
    description:
      'An acoustic take on the Christmas classic. Warm, John Mayer style guitar with bells and crotales ringing through it.',
  },
  {
    title: 'The Christmas Beat of Africa',
    status: 'In the Studio',
    description:
      'A Christmas song with a South African heartbeat. Live bass, organ in the bridge, and a crowd clapping around a fire.',
  },
  {
    title: 'Animus Instruments',
    status: 'Concept',
    description:
      'Playable instruments built from the animal recordings sampled across the EP. Jaguar, gibbon, and bee as VSTs.',
  },
];
