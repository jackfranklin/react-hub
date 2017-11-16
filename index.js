const regex = /part([0-9]{1,2})\//g
const match = regex.exec(window.location.pathname)

if (match) {
  const partKey = 'part' + match[1]
  // this is very manual but it helps webpack know exactly
  // which files could end up being included
  if (partKey === 'part1') {
    System.import('./part1')
  } else if (partKey === 'part2') {
    System.import('./part2')
  } else if (partKey === 'part3') {
    System.import('./part3')
  } else if (partKey === 'part4') {
    System.import('./part4')
  } else if (partKey === 'part5') {
    System.import('./part5')
  } else if (partKey === 'part6') {
    System.import('./part6')
  } else if (partKey === 'part7') {
    System.import('./part7')
  } else if (partKey === 'part8') {
    System.import('./part8')
  } else if (partKey === 'part9') {
    System.import('./part9')
  } else if (partKey === 'part10') {
    System.import('./part10')
  } else if (partKey === 'part11') {
    System.import('./part11')
  } else if (partKey === 'part12') {
    System.import('./part12')
  } else if (partKey === 'part13') {
    System.import('./part13')
  } else if (partKey === 'part14') {
    System.import('./part14')
  } else if (partKey === 'part15') {
    System.import('./part15')
  } else if (partKey === 'part16') {
    System.import('./part16')
  } else if (partKey === 'part17') {
    System.import('./part17')
  } else if (partKey === 'part18') {
    System.import('./part18')
  } else {
    document.body.innerHTML =
      '<p>No part found. Head to /partX where X is the number!</p>'
  }
} else {
  document.body.innerHTML =
    '<p>No part found. Head to /partX where X is the number!</p>'
}
