const locations = [
  {
    name: 'Aurora Signal Hall',
    address: '1200 Echo Lane',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'Cobalt Pulse Theatre',
    address: '225 Rhythm Ave',
    city: 'Dallas',
    state: 'TX',
    zip: '75201',
    image:
      'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'Stratosphere Grove',
    address: '800 Skyline Dr',
    city: 'Houston',
    state: 'TX',
    zip: '77002',
    image:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'Lumen Star Arena',
    address: '2500 Arena Blvd',
    city: 'Dallas',
    state: 'TX',
    zip: '75219',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=60'
  }
]

const events = [
  {
    title: 'Pulsewave Prism',
    date: '2026-04-12',
    time: '8:00 PM',
    image:
      'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=900&q=60',
    location_id: 1
  },
  {
    title: 'Glassline Circuit',
    date: '2026-04-26',
    time: '8:30 PM',
    image:
      'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=900&q=60',
    location_id: 1
  },
  {
    title: 'Velvet Frequency',
    date: '2026-04-20',
    time: '7:30 PM',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60',
    location_id: 1
  },
  {
    title: 'Midnight Ember',
    date: '2026-03-10',
    time: '9:00 PM',
    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=60',
    location_id: 2
  },
  {
    title: 'Harbor Glow Sessions',
    date: '2026-04-17',
    time: '8:15 PM',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=60',
    location_id: 2
  },
  {
    title: 'Brasslight Revival',
    date: '2026-04-28',
    time: '8:30 PM',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=60',
    location_id: 2
  },
  {
    title: 'Skyline Serenade',
    date: '2026-04-18',
    time: '6:00 PM',
    image:
      'https://images.unsplash.com/photo-1764448102359-48dcfeca1c4b?auto=format&fit=crop&w=900&q=60',
    location_id: 3
  },
  {
    title: 'Orion Meadow Suite',
    date: '2026-04-25',
    time: '6:45 PM',
    image:
      'https://images.unsplash.com/photo-1464375117522-1311dd7d0cd3?auto=format&fit=crop&w=900&q=60',
    location_id: 3
  },
  {
    title: 'Duskstream DJ Set',
    date: '2026-05-02',
    time: '5:30 PM',
    image:
      'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=900&q=60',
    location_id: 3
  },
  {
    title: 'Starlight Anthem Tour',
    date: '2026-04-22',
    time: '7:00 PM',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=60',
    location_id: 4
  },
  {
    title: 'Nova Arena Nights',
    date: '2026-04-30',
    time: '7:45 PM',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=60',
    location_id: 4
  },
  {
    title: 'Victory Echo Night',
    date: '2026-05-05',
    time: '6:30 PM',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=60',
    location_id: 4
  }
]

export { locations, events }
