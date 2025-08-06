```ocaml 
module Lemuel : sig
  val origin : string
  val values : string list
  val first_program : int
  val education : string list
  val abroad : string
  val internship : string
  val current_work : string
  val interests : string list
end = struct
  let origin = 
    "Born and raised in Hong Kong, shaped by its tension and harmony \
     between East and West."

  let values = [
    "Individual liberty";
    "Free markets";
    "Rule of law"
  ]

  let first_program = 12

  let education = [
    "Computer Science at University of Hong Kong";
    "Taught programming to undergrads";
    "Explored OS internals, ML, compilers"
  ]

  let abroad = 
    "Semester abroad in the UK during the post-COVID thaw — \
     discovered functional programming, language theory, and \
     broadened his cultural lens."

  let internship =
    "Quantitative Developer at LCCC — where markets, energy, \
     and policy intersected. Learned the pragmatics of mission-driven \
     code in real-world systems."

  let current_work =
    "Master’s at Imperial College London. Building decision tools \
     for data center energy optimization — code as infrastructure, \
     logic as leverage."

  let interests = [
    "Museums in the early hours";
    "Classical music, preferably late Romantic";
    "Science fiction as mirror, not escape";
    "Systems: military, urban, economic, aesthetic"
  ]
end
```