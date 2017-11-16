import part1 from './part1'
import part2 from './part2'
import part3 from './part3'
import part4 from './part4'
import part5 from './part5'
import part6 from './part6'
import part7 from './part7'
import part8 from './part8'
import part9 from './part9'
import part10 from './part10'
import part11 from './part11'
import part12 from './part12'
import part13 from './part13'
import part14 from './part14'
import part15 from './part15'
import part16 from './part16'

const parts = {
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
  part7,
  part8,
  part9,
  part10,
  part11,
  part12,
  part13,
  part14,
  part15,
  part16,
}

const regex = /part([0-9]{1,2})\//g
const match = regex.exec(window.location.pathname)

if (match) {
  const partKey = 'part' + match[1]
  const partFn = parts[partKey]
  if (partFn) {
    partFn()
  } else {
    document.body.innerHTML =
      '<p>No part found. Head to /partX where X is the number!</p>'
  }
} else {
  document.body.innerHTML =
    '<p>No part found. Head to /partX where X is the number!</p>'
}
