const oeuvres = [
    {
      titre: "Margate",
      lat: 51.3813,
      lng: 1.3862,
      image: "Artworks/Margate.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/1.html"
    },
    {
      titre: "Shivering Sand",
      lat: 51.4480,
      lng: 1.0330,
      image: "Artworks/Shivering_Sand.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/2.html"
    },
    {
      titre: "Southend Pier",
      lat: 51.5280,
      lng: 0.7140,
      image: "Artworks/Southen_Pier.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/3.html"
    },
    {
      titre: "Tilbury Dock",
      lat: 51.4633938,
      lng: 0.3359727,
      image: "Artworks/Tilbury_Dock.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/4.html"
    },
    {
      titre: "Margaret or Tripcock Ness",
      lat: 51.5091,
      lng: 0.0926778,
      image: "Artworks/Margaret_or_Tripcock_Ness.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/5.html"
    },
    {
      titre: "Thames Barrier",
      lat: 51.4956,
      lng: 0.0366,
      image: "Artworks/Thames_Barrier.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/6.html"
    },
    {
      titre: "Blackwall Point",
      lat: 51.5021588,
      lng: -0.0025811,
      image: "Artworks/Blackwall_Point.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/7.html"
    },
    {
      titre: "Cubitt Town",
      lat: 51.4979009,
      lng: -0.0067121,
      image: "Artworks/Cubitt _Town.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/8.html"
    },
    {
      titre: "Greenwich Reach",
      lat: 51.4827737,
      lng: -0.0209597,
      image: "Artworks/Greenwich_Reach.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/9.html"
    },
    {
      titre: "Tower Bridge",
      lat: 51.5055,
      lng: -0.0754,
      image: "Artworks/Tower_Bridge.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/10.html"
    },
    {
      titre: "Millennium Bridge",
      lat: 51.5095323,
      lng: -0.1034134,
      image: "Artworks/Millennium_Bridge.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/11.html"
    },
    {
      titre: "London Eye",
      lat: 51.5028466,
      lng: -0.1220056,
      image: "Artworks/London_Eye.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/12.html"
    },
    {
      titre: "Chelsea Bridge",
      lat: 51.4845718,
      lng: -0.1546622,
      image: "Artworks/Tower_Bridge.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/13.html"
    },
    {
      titre: "Putney Bridge",
      lat: 51.4669745,
      lng: -0.2154783,
      image: "Artworks/Tower_Bridge.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/14.html"
    },
    {
      titre: "Hammersmith Bridge",
      lat: 51.4884307,
      lng: -0.232761,
      image: "Artworks/Tower_Bridge.png",
      lien: "https://ipfs.io/ipfs/QmWQed5sU8UW12BSv38DrgKY4Kcp8SYSgf9uUM3vdaTTgc/15.html"
    }
];

const locations = [
    {
        name: "Hammersmith",
        coordinates: [51.4884307, -0.232761],
        // ... rest of the properties
    },
    {
        name: "Putney Bridge",
        coordinates: [51.4669745, -0.2154783],
        // ... rest of the properties
    },
    {
        name: "Chelsea Bridge",
        coordinates: [51.4845718, -0.1546622],
        // ... rest of the properties
    },
    {
        name: "London Eye",
        coordinates: [51.5028466, -0.1220056],
        // ... rest of the properties
    },
    {
        name: "Millenium Bridge",
        coordinates: [51.5095323, -0.1034134],
        // ... rest of the properties
    },
    {
        name: "Green Wich reach",
        coordinates: [51.4827737, -0.0209597],
        // ... rest of the properties
    },
    {
        name: "Cubitt Town",
        coordinates: [51.4979009, -0.0067121],
        // ... rest of the properties
    },
    {
        name: "BlackWall point",
        coordinates: [51.5021588, -0.0025811],
        // ... rest of the properties
    },
    {
        name: "Margaret",
        coordinates: [51.5091, 0.0926778],
        // ... rest of the properties
    }
];