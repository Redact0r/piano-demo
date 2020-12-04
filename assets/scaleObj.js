//to do :
//data entry
//add/hide frets for guitar and implement logic
//fix scale and code the js

const scaleObj = [
  {
    name: "2nd_mode_hm",
    notesPlayed: [
      "C3-C3",
      "D3-DsDb3-b",
      "E3-DsEb3-b",
      "F3-F3",
      "G3-FsGb3-b",
      "A3-A3",
      "B3-AsBb3-b",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-4",
      "a8-1",
      "a8-2",
      "a12-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g8-1",
      "g10-3",
      "g11-4",
      "b10-3",
      "b10-4",
      "e8-1",
      "e9-2",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "4_tone",
    notesPlayed: ["C3-C3", "D3-CsDb3-b", "F3-F3", "G3-G3", "C4-C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "a8-1",
      "a10-3",
      "d10-3",
      "d11-4",
      "g10-3",
      "b8-1",
      "e8-1",
      "e8-2",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "aeolian",
    notesPlayed: [
      "C3-C3",
      "D3-D3",
      "E3-DsEb3-b",
      "F3-F3",
      "G3-G3",
      "A3-GsAb3-b",
      "B3-AsBb3-b",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a8-1",
      "a10-3",
      "a11-4",
      "d8-1",
      "d10-4",
      "g7-1",
      "g8-2",
      "g10-4",
      "b8-1",
      "b9-2",
      "b11-4",
      "e8-1",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "arabian",
    notesPlayed: [
      "C3-C3",
      "D3-D3",
      "E3-E3",
      "F3-F3",
      "G3-FsGb3-b",
      "A3-GsAb3-b",
      "B3-AsBb3-b",
      "C4-C4",
    ],
    fingerings: [
      "E8-2",
      "E10-4",
      "a7-1",
      "a8-2",
      "a9-3",
      "a11-4",
      "d8-2",
      "d10-4",
      "g7-1",
      "g9-3",
      "g10-4",
      "b7-1",
      "b9-3",
      "b11-4",
      "e8-1",
      "e10-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "Augmented",
    notesPlayed: [
      "C3-C3",
      "D3-D3",
      "E3-E3",
      "F3-FsGb3-s",
      "G3-GsAb3-s",
      "A3-AsBb3-s",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E10-2",
      "E12-4",
      "a9-1",
      "a11-2",
      "a13-4",
      "d10-1",
      "d12-2",
      "d14-4",
      "g11-1",
      "g13-2",
      "g15-4",
      "b13-2",
      "b15-4",
      "e12-1",
      "e14-3",
    ],
    lastGtrNote: "d10",
    frets: [8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "ballinese",
    notesPlayed: [
      "C3-C3",
      "D3-CsDb3-b",
      "E3-DsEb3-b",
      "G3-G3",
      "A3-GsAb3-b",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-4",
      "a10-3",
      "a11-4",
      "d10-3",
      "d11-4",
      "g8-1",
      "b8-1",
      "b9-2",
      "e8-1",
      "e9-2",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "blues",
    notesPlayed: [
      "C3-C3",
      "D3-DsEb3-b",
      "F3-F3",
      "G3-FsGb3-b",
      "G3-GsGb3-n",
      "B3-AsBb3-b",
      "C4-C4",
    ],
    fingerings: [
      "E8-3",
      "a6-1",
      "a8-3",
      "a9-4",
      "d5-1",
      "d8-4",
      "g5-1",
      "g8-4",
      "b6-1",
      "b7-2",
      "b8-3",
      "e6-1",
      "e8-3",
    ],
    lastGtrNote: "g5",
    frets: [5, 6, 7, 8, 9, 10, 11],
  },
  {
    name: "byzantine",
    notesPlayed: [
      "C3-C3",
      "D3-CsDb3-b",
      "E3-E3",
      "F3-F3",
      "G3-G3",
      "A3-GsAb3-b",
      "B3-B3",
      "C4-C4",
    ],
    fingerings: [
      "E8-2",
      "E9-3",
      "a7-1",
      "a8-2",
      "a10-3",
      "a11-4",
      "d9-2",
      "d10-3",
      "d11-4",
      "g9-2",
      "g10-3",
      "b8-1",
      "b9-2",
      "e7-1",
      "e8-2",
      "e9-3",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "chad_gadyo",
    notesPlayed: ["C3-C3", "D3-D3", "E3-DsEb3-b", "F3-F3", "G3-G3", "C4-C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a8-1",
      "a10-3",
      "d10-4",
      "g7-1",
      "g8-2",
      "g10-4",
      "b8-1",
      "e8-1",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "chromatic",
    notesPlayed: [
      "C3-C3",
      "D3-CsDb3-b",
      "D3-D3-n",
      "E3-DsEb3-b",
      "E3-E3-n",
      "F3-F3",
      "G3-FsGb3-b",
      "G3-G3-n",
      "A3-GsAb3-b",
      "A3-A3-n",
      "B3-AsBb3-b",
      "B3-B3-n",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E9-2",
      "E10-3",
      "E11-4",
      "a7-1",
      "a8-2",
      "a9-3",
      "a10-4",
      "d6-1",
      "d7-2",
      "d8-3",
      "d9-4",
      "g5-1",
      "g6-2",
      "g7-3",
      "g8-4",
      "b5-1",
      "b6-2",
      "b7-3",
      "b8-4",
      "e4-1",
      "e5-2",
      "e6-3",
      "e7-4",
      "e8-1",
      "e9-2",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "g5",
    frets: [4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    name: "diminished",
    notesPlayed: [
      "C3-C3",
      "D3-D3",
      "E3-DsEb3-b",
      "F3-F3",
      "G3-FsGb3-b",
      "A3-GsAb3-b",
      "A3-A3-n",
      "B3-B3",
      "C4-C4",
    ],
    fingerings: [
      "E8-4",
      "a5-1",
      "a6-2",
      "a8-3",
      "a9-4",
      "d6-1",
      "d7-2",
      "d9-3",
      "d10-4",
      "g7-1",
      "g8-2",
      "g10-4",
      "b7-1",
      "b9-3",
      "b10-4",
      "e7-1",
      "e8-2",
      "e10-4",
    ],
    lastGtrNote: "d10",
    frets: [5, 6, 7, 8, 9, 10, 11],
  },
  {
    name: "dorian",
    notesPlayed: [
      "C3-C3",
      "D3-D3",
      "E3-DsEb3-b",
      "F3-F3",
      "G3-G3",
      "A3-A3",
      "B3-AsBb3-b",
      "C4",
    ],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a8-1",
      "a10-3",
      "d7-1",
      "d8-2",
      "d10-4",
      "g7-1",
      "g8-2",
      "g10-4",
      "b8-1",
      "b10-3",
      "b11-4",
      "e8-1",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "egyptian",
    notesPlayed: ["C3-C3", "E3-E3", "G3-G3", "A3-AsBb3-b", "C4-C4"],
    fingerings: [
      "E8-1",
      "E12-4",
      "a10-2",
      "d8-1",
      "d10-3",
      "g9-2",
      "b8-1",
      "b11-4",
      "e8-1",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "enigmatic",
    notesPlayed: [
      "C3-C3",
      "D3-CsDb3-b",
      "E3-E3",
      "G3-FsGb3",
      "A3-GsAb3-b",
      "B3-AsBb3-b",
      "B3-B3-b",
      "C4-C4",
    ],
    fingerings: [
      "E8-2",
      "E9-3",
      "a7-1",
      "a9-2",
      "a11-4",
      "d8-1",
      "d9-2",
      "d10-3",
      "d11-4",
      "g9-1",
      "g11-3",
      "b9-1",
      "b11-3",
      "b12-4",
      "e8-1",
      "e9-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "ethiopian",
    notesPlayed: [
      "C3-C3",
      "D3-D3",
      "E3-E3",
      "F3-F3",
      "G3-G3",
      "A3-GsAb3-b",
      "B3-B3",
      "C4-C4",
    ],
    fingerings: [
      "E8-2",
      "E10-4",
      "a7-1",
      "a8-2",
      "a10-4",
      "d6-1",
      "d9-3",
      "d10-4",
      "g7-1",
      "g9-3",
      "g10-4",
      "b8-2",
      "b9-3",
      "e7-1",
      "e8-2",
      "e10-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "harmonic_minor",
    notesPlayed: [
      "C3-C3",
      "D3-D3",
      "E3-DsEb3-b",
      "F3-F3",
      "G3-G3",
      "A3-GsAb3-b",
      "B3-B3",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a8-1",
      "a10-3",
      "a11-4",
      "d9-2",
      "d10-3",
      "g7-1",
      "g8-2",
      "g10-4",
      "b8-2",
      "b9-3",
      "e7-1",
      "e8-2",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "harmonic_minor_2",
    notesPlayed: [
      "C3-C3",
      "D3-CsDb3-b",
      "E3-DsEb3-b",
      "F3-F3",
      "G3-FsGb3-b",
      "A3-A3",
      "B3-AsBb3-b",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-4",
      "a8-1",
      "a9-2",
      "a12-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g8-1",
      "g10-3",
      "g11-4",
      "b10-3",
      "b11-4",
      "e8-1",
      "e9-2",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "harmonic_minor_3",
    notesPlayed: [
      "C3-C3",
      "D3-D3",
      "E3-E3",
      "F3-F3",
      "G3-GsAb3-b",
      "A3-A3",
      "B3-B3",
      "C4-C4",
    ],
    fingerings: [
      "E8-2",
      "E10-4",
      "a7-1",
      "a8-2",
      "a11-4",
      "d7-1",
      "d9-3",
      "d10-4",
      "g7-1",
      "g9-3",
      "g10-4",
      "b9-3",
      "b10-4",
      "e7-1",
      "e8-2",
      "e10-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "harmonic_minor_4",
    notesPlayed: [
      "C3-C3",
      "D3-D3",
      "E3-DsEb3-b",
      "F3-FsGb3-s",
      "G3-G3",
      "A3-A3",
      "B3-AsBb3-b",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a9-1",
      "a10-2",
      "a12-4",
      "d8-1",
      "d10-2",
      "d12-4",
      "g8-1",
      "g11-4",
      "b8-1",
      "b10-3",
      "b11-4",
      "e8-1",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "harmonic_minor_5",
    notesPlayed: [
      "C3-C3",
      "D3-CsDb3-b",
      "E3-E3",
      "F3-F3",
      "G3-G3",
      "A3-GsAb3-b",
      "B3-AsBb3-b",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E9-2",
      "a7-1",
      "a8-2",
      "a10-3",
      "a11-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g9-2",
      "g10-3",
      "b8-1",
      "b9-2",
      "b11-4",
      "e8-1",
      "e9-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "harmonic_minor_6",
    notesPlayed: [
      "C3-C3",
      "D3-DsEb3-s",
      "F3-FsGb3-s",
      "G3-G3",
      "A3-A3",
      "B3-B3",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E11-3",
      "E12-4",
      "a9-1",
      "a10-2",
      "d9-1",
      "d10-2",
      "g8-1",
      "g9-2",
      "g11-4",
      "b8-1",
      "b10-2",
      "b12-4",
      "e8-1",
      "e11-3",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "harmonic_minor_7",
    notesPlayed: [
      "C3-C3",
      "D3-CsDb3-b",
      "E3-DsEb3-b",
      "E3-E3-n",
      "F3-FsGb3-s",
      "G3-GsAb3-s",
      "A3-A3",
      "C4-C4",
    ],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-4",
      "a7-1",
      "a9-2",
      "a11-4",
      "d7-1",
      "d10-3",
      "d11-4",
      "g8-1",
      "g9-2",
      "g11-4",
      "b9-2",
      "b10-3",
      "e8-1",
      "e9-2",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "Hawaiian",
    notesPlayed: ["C3", "D3", "DsEb3", "G3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a10-3",
      "d8-1",
      "d10-3",
      "g7-1",
      "g8-2",
      "b8-1",
      "b11-4",
      "e8-1",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "hindu",
    notesPlayed: ["C3", "CsDb3", "D3", "F3", "G3", "GsAb3", "A3", "C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "E10-3",
      "a8-1",
      "a10-3",
      "a11-4",
      "d7-1",
      "d10-3",
      "d11-4",
      "g7-1",
      "g10-4",
      "b8-2",
      "b9-3",
      "b10-4",
      "e8-2",
      "e9-3",
      "e10-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "hira_joshi",
    notesPlayed: ["C3", "D3", "DsEb3", "G3", "GsAb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a10-3",
      "a11-4",
      "d10-4",
      "g7-1",
      "g8-2",
      "b8-1",
      "b9-2",
      "e8-1",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "Hungarian_minor",
    notesPlayed: ["C3", "D3", "DsEb3", "FsGb3", "G3", "GsAb3", "B3", "C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a9-2",
      "a10-3",
      "a11-4",
      "d9-1",
      "d10-2",
      "d12-4",
      "g8-1",
      "g11-4",
      "b8-1",
      "b9-3",
      "e7-1",
      "e8-2",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "indian_1",
    notesPlayed: ["C3", "CsDb3", "DsEb3", "FsGb3", "G3", "GsAb3", "B3", "C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-4",
      "a9-2",
      "a10-3",
      "a11-4",
      "d9-2",
      "d10-3",
      "d11-4",
      "g8-1",
      "g11-4",
      "b8-1",
      "b8-2",
      "e7-1",
      "e8-2",
      "e9-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "indian_2",
    notesPlayed: ["C3", "DsEb3", "E3", "F3", "GsAb3", "A3", "B3", "C4"],
    fingerings: [
      "E8-1",
      "E11-4",
      "a7-1",
      "a8-2",
      "a11-4",
      "d7-1",
      "d9-3",
      "d10-4",
      "g8-2",
      "g9-3",
      "g10-4",
      "b9-3",
      "b10-4",
      "e7-1",
      "e8-2",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "Ionian",
    notesPlayed: ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4"],
    fingerings: [
      "E8-2",
      "E10-4",
      "a7-1",
      "a8-2",
      "a10-4",
      "d7-1",
      "d9-3",
      "d10-4",
      "g7-1",
      "g9-3",
      "g10-4",
      "b8-2",
      "b10-4",
      "e7-1",
      "e8-2",
      "e10-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "irak",
    notesPlayed: [
      "C3",
      "CsDb3",
      "E3",
      "F3",
      "FsGb3",
      "GsAb3",
      "A3",
      "B3",
      "C4",
    ],
    fingerings: [
      "E8-2",
      "E9-3",
      "a7-1",
      "a8-2",
      "a9-3",
      "a11-4",
      "d7-1",
      "d9-2",
      "d10-3",
      "d11-4",
      "g9-2",
      "g10-3",
      "g11-4",
      "b9-2",
      "b10-3",
      "e7-1",
      "e8-2",
      "e9-3",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "iwato",
    notesPlayed: ["C3", "CsDb3", "F3", "FsGb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E8-2",
      "a8-1",
      "a9-2",
      "d8-1",
      "d10-3",
      "d11-4",
      "g10-3",
      "g11-3",
      "b11-4",
      "e8-1",
      "e9-2",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "kokin_joshi",
    notesPlayed: ["C3", "CsDb3", "F3", "G3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "a8-1",
      "a10-3",
      "d8-1",
      "d10-3",
      "d11-4",
      "g10-3",
      "b8-1",
      "b11-4",
      "e8-1",
      "e9-2",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "kumoi",
    notesPlayed: ["C3", "CsDb3", "F3", "G3", "GsAb3", "C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "a8-1",
      "a10-3",
      "a11-4",
      "d10-3",
      "d11-4",
      "g10-3",
      "b8-1",
      "b9-2",
      "e8-1",
      "e9-2",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "kumoi_nat_2nd",
    notesPlayed: ["C3", "D3", "F3", "G3", "GsAb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "a8-1",
      "a10-3",
      "a11-4",
      "d10-3",
      "g7-1",
      "g10-4",
      "b8-1",
      "b9-2",
      "e8-1",
      "e10-3",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "locrian",
    notesPlayed: [
      "C3",
      "CsDb3",
      "DsEb3",
      "F3",
      "FsGb3",
      "GsAb3",
      "AsBb3",
      "C4",
    ],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-4",
      "a8-1",
      "a9-2",
      "a11-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g8-1",
      "g10-3",
      "g11-4",
      "b9-2",
      "b11-4",
      "e8-1",
      "e9-2",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "lydian",
    notesPlayed: ["C3", "D3", "E3", "FsGb3", "G3", "A3", "B3", "C4"],
    fingerings: [
      "E8-1",
      "E10-2",
      "E12-4",
      "a9-1",
      "a10-2",
      "a12-4",
      "d9-1",
      "d10-2",
      "d12-4",
      "g9-1",
      "g11-3",
      "b8-1",
      "b10-2",
      "b12-4",
      "e8-1",
      "e10-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "lydian_flat_7",
    notesPlayed: ["C3", "D3", "E3", "FsGb3", "G3", "A3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-2",
      "E12-4",
      "a9-1",
      "a10-2",
      "a12-4",
      "d8-1",
      "d10-2",
      "d12-4",
      "g9-1",
      "g11-3",
      "b8-1",
      "b10-3",
      "b11-4",
      "e8-1",
      "e10-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "mahavishnu",
    notesPlayed: ["C3", "D3", "FsGb3", "G3", "A3", "C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "a9-1",
      "a10-2",
      "a12-4",
      "d10-1",
      "d12-3",
      "g11-2",
      "g12-3",
      "b10-1",
      "b13-4",
      "e10-1",
    ],
    lastGtrNote: "d10",
    frets: [7, 8, 9, 10, 11, 12, 13],
  },
  {
    name: "major",
    notesPlayed: ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4"],
    fingerings: [
      "E8-2",
      "E10-4",
      "a7-1",
      "a8-2",
      "a10-4",
      "d7-1",
      "d9-3",
      "d10-4",
      "g7-1",
      "g9-3",
      "g10-4",
      "b8-2",
      "b10-4",
      "e7-1",
      "e8-2",
      "e10-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "major_penta",
    notesPlayed: ["C3", "D3", "E3", "G3", "A3", "C4"],
    fingerings: [
      "E8-4",
      "a5-1",
      "a7-3",
      "d5-1",
      "d7-3",
      "g5-1",
      "g7-3",
      "b5-1",
      "b8-4",
      "e5-1",
      "e8-4",
    ],
    lastGtrNote: "g5",
    frets: [5, 6, 7, 8, 9, 10, 11],
  },
  {
    name: "melodic_minor",
    notesPlayed: ["C3", "D3", "DsEb3", "F3", "G3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a8-1",
      "a10-3",
      "a11-4",
      "d8-1",
      "d10-3",
      "g7-1",
      "g8-2",
      "g10-4",
      "b8-1",
      "b9-2",
      "b11-4",
      "e8-1",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "melodic_minor_2",
    notesPlayed: ["C3", "CsDb3", "DsEb3", "F3", "G3", "A3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E8-2",
      "E11-4",
      "a8-1",
      "a10-2",
      "a12-4",
      "d8-1",
      "d10-1",
      "d11-4",
      "g8-1",
      "g10-3",
      "b8-1",
      "b10-3",
      "b11-4",
      "e8-1",
      "e9-2",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "melodic_minor_3",
    notesPlayed: ["C3", "DsEb3", "F3", "FsGb3", "GsAb3", "AsBb3", "C4"],
    fingerings: ["E8-1", "E11-4", "a8-1", "a9-1", "a11-4", "d8-1", "d10-1"],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "melodic_minor_4",
    notesPlayed: ["C3", "D3", "E3", "FsGb3", "G3", "A3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-2",
      "E12-4",
      "a9-1",
      "a10-2",
      "a12-4",
      "d8-1",
      "d10-2",
      "d12-4",
      "g9-1",
      "g11-3",
      "b8-1",
      "b10-3",
      "b11-4",
      "e8-1",
      "e10-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "melodic_minor_5",
    notesPlayed: ["C3", "D3", "E3", "F3", "G3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-2",
      "E12-4",
      "a8-1",
      "a10-3",
      "a11-4",
      "d8-1",
      "d10-2",
      "d12-4",
      "g9-1",
      "g10-2",
      "b8-1",
      "b9-2",
      "b11-4",
      "e8-1",
      "e10-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "melodic_minor_6",
    notesPlayed: ["C3", "D3", "DsEb3", "F3", "FsGb3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "E11-4",
      "a8-1",
      "a9-2",
      "a11-4",
      "d8-1",
      "d10-3",
      "g7-1",
      "g8-2",
      "g10-4",
      "b7-1",
      "b9-2",
      "b11-4",
      "e8-1",
      "e10-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "melodic_minor_7",
    notesPlayed: [
      "C3",
      "CsDb3",
      "DsEb3",
      "E3",
      "FsGb3",
      "GsAb3",
      "AsBb3",
      "C4",
    ],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-4",
      "a7-11",
      "a9-2",
      "a11-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g8-1",
      "g9-2",
      "g11-4",
      "b9-2",
      "b11-4",
      "e8-1",
      "e9-2",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "minor_penta",
    notesPlayed: ["C3", "DsEb3", "F3", "G3", "AsBb3", "C4"],
    fingerings: [
      "E8-4",
      "a6-1",
      "a8-4",
      "d5-1",
      "d8-4",
      "g5-1",
      "g8-3",
      "b6-1",
      "b8-3",
      "e6-1",
      "e8-3",
    ],
    lastGtrNote: "g5",
    frets: [5, 6, 7, 8, 9, 10, 11],
  },
  {
    name: "mixo",
    notesPlayed: ["C3", "D3", "E3", "F3", "G3", "A3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-2",
      "E12-4",
      "a8-1",
      "a10-2",
      "a12-4",
      "d8-1",
      "d10-2",
      "d12-4",
      "g9-1",
      "g10-2",
      "b8-1",
      "b10-2",
      "b11-4",
      "e8-1",
      "e10-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "mixolydian",
    notesPlayed: ["C3", "D3", "E3", "F3", "G3", "A3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-2",
      "E12-4",
      "a8-1",
      "a10-2",
      "a12-4",
      "d8-1",
      "d10-2",
      "d12-4",
      "g9-1",
      "g10-2",
      "b8-1",
      "b10-2",
      "b11-2",
      "e8-1",
      "e10-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "neapolitan",
    notesPlayed: ["C3", "CsDb3", "DsEb3", "F3", "G3", "A3", "B3", "C4"],
    fingerings: [
      "E8-2",
      "E9-3",
      "a6-1",
      "a8-2",
      "a10-4",
      "d7-1",
      "d9-2",
      "d10-3",
      "d11-4",
      "g8-1",
      "g10-3",
      "b8-1",
      "b10-3",
      "e7-1",
      "e8-2",
      "e9-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "neapolitan_minor",
    notesPlayed: ["C3", "CsDb3", "DsEb3", "F3", "G3", "GsAb3", "B3", "C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-4",
      "a8-1",
      "a10-3",
      "a11-4",
      "d9-2",
      "d10-3",
      "d11-4",
      "g8-1",
      "g10-3",
      "b8-1",
      "b9-2",
      "e7-1",
      "e8-2",
      "e9-3",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "neutral_penta",
    notesPlayed: ["C3", "D3", "F3", "G3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "a8-1",
      "a10-3",
      "d8-1",
      "d10-4",
      "g7-1",
      "g10-4",
      "b8-1",
      "b11-4",
      "e8-1",
      "e10-3",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "oriental",
    notesPlayed: ["C3", "DsEb3", "E3", "F3", "FsGb3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E11-3",
      "E12-4",
      "a8-1",
      "a9-2",
      "a11-4",
      "d8-1",
      "d10-3",
      "g8-1",
      "g9-2",
      "g10-3",
      "g11-4",
      "b9-2",
      "b11-4",
      "e8-1",
      "e9-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "oriental_1",
    notesPlayed: ["C3", "DsEb3", "E3", "F3", "FsGb3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E11-3",
      "E12-4",
      "a8-1",
      "a9-2",
      "a11-4",
      "d8-1",
      "d10-3",
      "g8-1",
      "g9-2",
      "g10-3",
      "g11-4",
      "b9-2",
      "b11-4",
      "e8-1",
      "e9-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "oriental_2",
    notesPlayed: ["C3", "CsDb3", "E3", "F3", "FsGb3", "A3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "E12-4",
      "a8-1",
      "a9-2",
      "a12-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g9-2",
      "g10-3",
      "g11-4",
      "b9-2",
      "b11-4",
      "e8-1",
      "e9-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "oriental_3",
    notesPlayed: ["C3", "CsDb3", "E3", "F3", "FsGb3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "E12-4",
      "a8-1",
      "a9-2",
      "a11-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g9-2",
      "g10-3",
      "g11-4",
      "b9-2",
      "b11-4",
      "e8-1",
      "e9-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "Pyongio",
    notesPlayed: ["C3", "D3", "F3", "G3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-3",
      "a8-1",
      "a10-3",
      "a11-4",
      "d8-1",
      "d10-4",
      "g7-1",
      "g10-4",
      "b8-1",
      "b9-2",
      "b11-4",
      "e8-1",
      "e10-3",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "phrygian",
    notesPlayed: ["C3", "CsDb3", "DsEb3", "F3", "G3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-4",
      "a8-1",
      "a10-3",
      "a11-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g8-1",
      "g10-3",
      "b8-1",
      "b9-2",
      "b11-4",
      "e8-1",
      "e9-2",
      "e11-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "rhaoui",
    notesPlayed: ["C3", "CsDb3", "E3", "F3", "FsGb3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-2",
      "E9-3",
      "a7-1",
      "a8-2",
      "a9-3",
      "a11-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g9-2",
      "g10-3",
      "g11-4",
      "b9-2",
      "b10-3",
      "e8-1",
      "e9-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "ritusen",
    notesPlayed: ["C3", "D3", "F3", "G3", "A3", "C4"],
    fingerings: [
      "E8-2",
      "E10-4",
      "a8-2",
      "a10-4",
      "d7-1",
      "d10-4",
      "g7-1",
      "g10-4",
      "b8-2",
      "b10-4",
      "e8-2",
      "e10-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "scriabin",
    notesPlayed: ["C3", "CsDb3", "E3", "G3", "A3", "C4"],
    fingerings: [
      "E8-1",
      "E9-2",
      "E12-4",
      "a10-3",
      "d7-1",
      "d10-3",
      "d11-4",
      "g9-2",
      "b8-1",
      "b10-3",
      "e8-1",
      "e9-2",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "spanish_8",
    notesPlayed: [
      "C3",
      "CsDb3",
      "DsEb3",
      "E3",
      "F3",
      "FsGb3",
      "GsAb3",
      "AsBb3",
      "C4",
    ],
    fingerings: [
      "E8-1",
      "E9-2",
      "E11-3",
      "E12-4",
      "a8-1",
      "a9-2",
      "a11-4",
      "d8-1",
      "d10-3",
      "d11-4",
      "g8-1",
      "g9-2",
      "g10-3",
      "g11-4",
      "b9-2",
      "b11-4",
      "e8-1",
      "e9-2",
      "e11-3",
      "e12-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "taishikicho",
    notesPlayed: [
      "C3",
      "D3",
      "E3",
      "F3",
      "FsGb3",
      "G3",
      "A3",
      "AsBb3",
      "B3",
      "C4",
    ],
    fingerings: [
      "E8-2",
      "E10-4",
      "a7-1",
      "a8-2",
      "a9-3",
      "a10-4",
      "d7-1",
      "d8-2",
      "d9-3",
      "d10-4",
      "g7-1",
      "g9-3",
      "g10-4",
      "b7-1",
      "b8-2",
      "b10-3",
      "b11-4",
      "e7-1",
      "e8-2",
      "e10-4",
    ],
    lastGtrNote: "d10",
    frets: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "whole_tone",
    notesPlayed: ["C3", "D3", "E3", "FsGb3", "GsAb3", "AsBb3", "C4"],
    fingerings: [
      "E8-1",
      "E10-2",
      "E12-4",
      "a9-1",
      "a11-2",
      "a13-4",
      "d10-1",
      "d12-2",
      "d14-4",
      "g11-1",
      "g13-2",
      "g15-4",
      "b13-2",
      "b15-4",
      "e12-1",
      "e14-3",
    ],
    lastGtrNote: "d10",
    frets: [8, 9, 10, 11, 12, 13, 14, 15],
  },
];

export default scaleObj;
