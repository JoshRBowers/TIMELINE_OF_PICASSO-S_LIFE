import { useEffect, useRef, useState } from 'react'
import './App.css'

const PicassoCard = [
  {
    name: '1881',
    year: 1881,
    description: 'Pablo Ruiz Picasso is born in Málaga, Spain on October 25. ',
    color: '#f3e9e3', 
  },
  {
    name: '1899',
    year: 1899,
    description: <>Creates his first etching, titled <i>El Zurdo (The Left-Handed Man)</i>.</>,
    color: '#f3e9e3', 
  },
  {
    name: '1900',
    year: 1900,
    description: <>Travels to Paris for the first time. He meets the ceramist Paco Durio, who introduced him to Gauguin's ceramics.</>,
    color: '#f3e9e3', 
  },
  {
    name: '1901',
    image: 'PicassoImage/1901GeneralKeyWork.png',
    year: 1901,
    description: <>Enters his Blue Period. For three years, he creates largely monochromatic blue paintings of somber subject matter. Followed by his Rose period in 1904.</>,
    credit: <>Pablo Picasso (Spanish, 1881–1973), <i>Seated Harlequin</i>, 1901 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York; Digital Image © The Metropolitan Museum of Art. Image source: Art Resource, NY</>,
    color: '#f3e9e3', 
  },
  {
    name: '1907',
    image: 'PicassoImage/1907GeneralKeyWork.png',
    year: 1907,
    description: <>Begins to incorporate elements of global ethnographic art into paintings such as <i>Les Demoiselles d’Avignon</i> (The Young Ladies of Avignon).</>,
    credit: <>Pablo Picasso (Spanish, 1881–1973), <i>Les Demoiselles d'Avignon (<i>The Young Ladies of Avignon</i>)</i>, 1907 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York; Digital Image © The Museum of Modern Art / Licensed by SCALA / Art Resource, NY</>,
     color: '#f3e9e3', 
  },
  {
    name: 'Divider 1909',
    year: 1909,
    description: '1909 \u2003 Inception of Cubism ',
    color: '#f3e9e3',
  },
  {
    name: 'Divider 1914',
    year: 1914,
    description: '1914 \u2003 World War I Begins',
    color: '#f3e9e3', 
  },
  {
    name: '1918 ',
    image: 'PicassoImage/ART564772_Updated.jpg',
    year: 1918,
    description: <>Following <i>le rappel à l’ordre</i> (the return to order) in Europe, adopts Neoclassicism and blends the style with Cubism. </>,
    credit: <>Pablo Picasso (Spanish, 1881–1973), <i>La Flûte de Pan (The Pipes of Pan)</i>, 1923 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York; Digital Image © RMN-Grand Palais / Art Resource, NY</>,
    color: '#f3e9e3',
  },
  {
    name: '1921',
    year: 1921,
    description: <>Meets the Spanish ceramicist Josep Llorens i Artigas. Their attempts to collaborate end in frustration.</>,
    color: '#f3e9e3', 
  },
  {
    name: 'Divider 1925',
    year: 1925,
    description: "1925 \u2003 Inception of Surrealism ",
    color: '#f3e9e3',
  },
  {
    name: '1929',
    image: 'PicassoImage/1929Ceramic.jpg',
    year: 1929,
    description: "Paints two ceramic vases with the assistance of Dutch artist Jean van Dongen. ",
    credit: <>Pablo Picasso (Spanish, 1881–1973) and Jean van Dongen (Dutch, 1883–1970),<i> Vase décoré de baigneuses (Vase with Bathers)</i>, 1929 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York; Digital Image © RMN-Grand Palais / Art Resource, NY”</>,
    color: '#f3e9e3',
  },
  {
    name: 'Divider 1936',
    year: 1936,
    description: "1936 \u2003 Spanish Civil War Begins",
    color: '#f3e9e3', 
  },
  {
    name: '1936',
    year: 1936,
    description: "Visits Vallauris, France for the first time and is fascinated by the potters there.",
    color: '#f3e9e3',
  },
  {
    name: '1937',
    image: 'PicassoImage/Guernica.jpeg',
    imageCredit: <>Reina Sofía National Art Centre Museum</>,
    year: 1937,
    description: <>Paints <i>Guernica</i> for the Spanish pavilion at the Exposition Internationale des Arts et Techniques dans la Vie Moderne (International Exposition of Art and Technology in Modern Life) in Paris. </>,
    credit: <>Pablo Picasso (Spanish, 1881–1973), <i>Guernica</i>, 1937 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York; Digital Image © Reina Sofía National Art Centre Museum Photo Archive</>,
    color: '#f3e9e3', 
  },
  {
    name: 'Divider 1939',
    year: 1939,
    description: "1939 \u2003 World War II Begins",
    color: '#f3e9e3',
  },
  {
    name: '1945',
    year: 1945,
    description: <>Creates <i>Le Taureau</i>, a series of eleven lithographs depicting a bull, at Fernand Mourlot’s print shop in Rue de Chabrol. </>,
    color: '#f3e9e3', 
  },
  {
    name: '1946',
    year: 1946,
    description: 'Meets Suzanne and Georges Ramié, owners of the Madoura pottery workshop. Invited to experiment with clay in their studio, Picasso creates three small pieces during his first visit and begins a collaboration that would last more than twenty-five years. ',
    color: '#f3e9e3',
  },
  {
    name: '1947',
    image: 'PicassoImage/AR_Face_Plate.jpg',
    year: 1947,
    description: "Begins his ongoing work on ceramics in Vallauris at the Ramiés’ Madoura workshop. ",
    credit: <>Pablo Picasso (Spanish, 1881–1973), <i>Brown/Blue Face</i>, 1947 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York</>,
    color: '#f3e9e3', 
  },
  {
    name: '1948',
    year: 1948,
    description: "Moves his family to Vallauris, where he lives until 1955. Exhibits more than one hundred ceramics, helping establish ceramics as a major component of his artistic practice rather than a secondary pursuit.",
    color: '#f3e9e3',
  },
  {
    name: '1949',
    image: 'PicassoImage/AR_Blue_Plate.jpg',
    year: 1949,
    description: <>Picasso suggests to the Ramiés that they produce prints of his ceramics, leading to the first edition, <i>Four Enlaced Profiles</i>. </>,
    credit: <>Pablo Picasso (Spanish, 1881–1973), <i>Four Enlaced Profiles</i>, 1949 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York</>,
    color: '#f3e9e3', 
  },
  {
    name: '1950',
    year: 1950,
    description: <>Experiments with assemblage plaster sculptures using ceramic vessels and fragments, including <i>La chèvre (The Goat)</i> and <i>La guenon et son petit (Baboon and Young)</i>. <br /><br /> Drawing inspiration from ancient Mediterranean, Greek, and Roman pottery traditions, reimagines historic vessel forms through a modern visual language.</>,
    color: '#f3e9e3',
  },
  {
    name: '1957',
    year: 1957,
    description: <>Paints <i>Las Meninas</i>, a series of 58 paintings interpreting Diego Velazquez’s <i>Las Meninas</i>. </>,
    color: '#f3e9e3',
  },
  {
    name: '1963',
    image: 'PicassoImage/AR_Front_Face.jpg',
    year: 1963,
    description: "At Madoura, produces a remarkable series of 204 ceramic dishes painted in enamel, demonstrating his continued experimentation with serial production and painted surface decoration. ",
    credit: <>Pablo Picasso (Spanish, 1881–1973), <i>Face nº 202</i>, 1963 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York</>,
    color: '#f3e9e3',
  },
  {
    name: '1968',
    image: 'PicassoImage/AR_BlackOrange_Paint.jpg',
    year: 1968,
    description: "Using his reduction linocut blockss, produces prints on paper and ceramic. ",
    credit: <>Pablo Picasso (Spanish, 1881–1973), <i>Figures and Cavalier</i>, 1968 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York</>,
    color: '#f3e9e3',
  },
  {
    name: '1970',
    image: 'PicassoImage/T06.jpg',
    year: 1970,
    description: "The Papal Palace in Avignon hosts the first of two landmark exhibitions of Picasso’s works, the second opening months after his passing. ",
    credit: <>Pablo Picasso (Spanish, 1881–1973), <i>L’Étreinte (The Embrace)</i>, 1969 © 2026 Estate of Pablo Picasso / Artists Rights Society (ARS), New York</>,
    color: '#f3e9e3',
  },
  {
    name: '1971',
    year: 1971,
    description: "Completes the last of the 633 ceramic editions produced through his collaboration with the Ramié family and Madoura. ",
    color: '#f3e9e3',
  },
  {
    name: '1973',
    year: 1973,
    description: "Passes away in Mougins, France on April 8 at the age of 91.",
    color: '#f3e9e3',
  },
]

PicassoCard.sort((a, b) => a.year - b.year)

const timelineYears = PicassoCard.map((card, index) => ({
  id: index,
  name: card.name,
  year: card.year,
}))

// BOUNDARIES
const timelineMinYear = 1880
const timelineMaxYear = 1980
const timelineYearRange = timelineMaxYear - timelineMinYear

const getLinearPosition = (year) => {
  const percentage = ((year - timelineMinYear) / timelineYearRange) * 100
  return Math.max(0, Math.min(percentage, 100))
}

const uniqueRulerMarkers = []
for (let y = timelineMinYear; y <= timelineMaxYear; y += 10) {
  uniqueRulerMarkers.push(y)
}

function App() {
  const [scrolledFruit, setScrolledFruit] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const rowRef = useRef(null)
  const cardRefs = useRef({})
  
  const startSpacerRef = useRef(null)
  const endSpacerRef = useRef(null)

  const targetScrollLeftRef = useRef(0)
  const wheelAnimationFrameRef = useRef(null)
  const scrollTimeoutRef = useRef(null)
  const scrollAnimationTimer = 1500

  useEffect(() => {
    const row = rowRef.current

    if (!row) {
      return undefined
    }

    const cancelWheelAnimation = () => {
      if (wheelAnimationFrameRef.current) {
        window.cancelAnimationFrame(wheelAnimationFrameRef.current)
        wheelAnimationFrameRef.current = null
      }
    }

const updateScrollState = () => {
      const rowRect = row.getBoundingClientRect()
      const viewportCenter = rowRect.left + rowRect.width / 2
      const isAtStart = row.scrollLeft <= 8
      const isAtEnd = row.scrollLeft >= row.scrollWidth - row.clientWidth - 8
      
      const cardStates = PicassoCard
        .map((cardItem, index) => {
          const cardNode = cardRefs.current[index]
          if (!cardNode) return null
          const rect = cardNode.getBoundingClientRect()
          return {
            id: index,
            name: cardItem.name,
            year: cardItem.year,
            center: rect.left + rect.width / 2,
            distance: Math.abs(rect.left + rect.width / 2 - viewportCenter),
          }
        })
        .filter(Boolean)

      if (startSpacerRef.current) {
        const rect = startSpacerRef.current.getBoundingClientRect()
        cardStates.push({
          id: 'start-spacer',
          year: timelineMinYear,
          center: rect.right, 
          distance: Math.abs(rect.right - viewportCenter),
        })
      }

      if (endSpacerRef.current) {
        const rect = endSpacerRef.current.getBoundingClientRect()
        cardStates.push({
          id: 'end-spacer',
          year: timelineMaxYear,
          center: rect.left, 
          distance: Math.abs(rect.left - viewportCenter),
        })
      }

      let closestFruit = null
      let closestDistance = Infinity
      let currentYear = timelineMinYear

      cardStates.forEach((cardState) => {
        if (cardState.distance < closestDistance) {
          closestDistance = cardState.distance
          closestFruit = cardState.id
        }
      })

      if (isAtStart) {
        closestFruit = 'start-spacer'
      }

      if (isAtEnd) {
        closestFruit = 'end-spacer'
      }

      if (cardStates.length > 0) {
        const sortedCards = [...cardStates].sort((leftCard, rightCard) => leftCard.center - rightCard.center)

        if (viewportCenter <= sortedCards[0].center) {
          currentYear = sortedCards[0].year
        } else if (viewportCenter >= sortedCards[sortedCards.length - 1].center) {
          currentYear = sortedCards[sortedCards.length - 1].year
        } else {
          for (let index = 0; index < sortedCards.length - 1; index += 1) {
            const leftCard = sortedCards[index]
            const rightCard = sortedCards[index + 1]

            if (viewportCenter >= leftCard.center && viewportCenter <= rightCard.center) {
              const span = Math.max(1, rightCard.center - leftCard.center)
              // Clamping ratio between 0 and 1 prevents NaN breaks during fast scrolls
              const ratio = Math.max(0, Math.min((viewportCenter - leftCard.center) / span, 1))
              currentYear = leftCard.year + (rightCard.year - leftCard.year) * ratio
              break
            }
          }
        }
      }

      // Safe fallback guarantees the CSS variable never receives 'NaN%'
      const safeProgress = getLinearPosition(currentYear) || 0
      setScrollProgress(safeProgress)

      if (closestFruit !== null) {
        setScrolledFruit(closestFruit)
        
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          let targetCard = null
          let targetCenter = 0
          
          if (closestFruit === 'start-spacer') {
            targetCard = startSpacerRef.current
            targetCenter = targetCard ? targetCard.getBoundingClientRect().right : 0
          } else if (closestFruit === 'end-spacer') {
            targetCard = endSpacerRef.current
            targetCenter = targetCard ? targetCard.getBoundingClientRect().left : 0
          } else {
            targetCard = cardRefs.current[closestFruit]
            targetCenter = targetCard ? targetCard.getBoundingClientRect().left + targetCard.getBoundingClientRect().width / 2 : 0
          }

          if (targetCard && row) {
            const rowRect = row.getBoundingClientRect()
            const currentViewportCenter = rowRect.left + rowRect.width / 2
            const distanceToCenter = targetCenter - currentViewportCenter
            
            const maxScroll = row.scrollWidth - row.clientWidth
            targetScrollLeftRef.current = Math.max(0, Math.min(row.scrollLeft + distanceToCenter, maxScroll))
            
            if (!wheelAnimationFrameRef.current) {
              wheelAnimationFrameRef.current = window.requestAnimationFrame(animateWheelScroll)
            }
          }
        }, scrollAnimationTimer) 
      }
    }

    const animateWheelScroll = () => {
      const maxScrollLeft = row.scrollWidth - row.clientWidth
      const targetScrollLeft = Math.max(
        0,
        Math.min(targetScrollLeftRef.current, maxScrollLeft),
      )
      const currentScrollLeft = row.scrollLeft
      const distance = targetScrollLeft - currentScrollLeft

      if (Math.abs(distance) < 0.5) {
        row.scrollLeft = targetScrollLeft
        wheelAnimationFrameRef.current = null
        return
      }

      row.scrollLeft = currentScrollLeft + distance * 0.08
      wheelAnimationFrameRef.current = window.requestAnimationFrame(animateWheelScroll)
    }

    const handleScroll = () => {
      updateScrollState()
    }

    const handleWheel = (event) => {
      event.preventDefault()

      const horizontalDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      const direction = horizontalDelta === 0 ? 0 : Math.sign(horizontalDelta)
      const arrowStep = 120

      const maxScrollLeft = row.scrollWidth - row.clientWidth
      targetScrollLeftRef.current = Math.max(
        0,
        Math.min(targetScrollLeftRef.current + direction * arrowStep, maxScrollLeft),
      )

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = null
      }

      if (!wheelAnimationFrameRef.current) {
        wheelAnimationFrameRef.current = window.requestAnimationFrame(animateWheelScroll)
      }
    }

    updateScrollState()
    targetScrollLeftRef.current = row.scrollLeft

    row.addEventListener('scroll', handleScroll)
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      cancelWheelAnimation()
      row.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('wheelclick', handleWheel)
    }
    
  }, [])

  const activeFruitIndex = 
    scrolledFruit === 'start-spacer' ? 0 : 
    scrolledFruit === 'end-spacer' ? PicassoCard.length - 1 : 
    (typeof scrolledFruit === 'number' ? scrolledFruit : -1)

  return (
    <div className="Picasso-timeline-container">
      <h1>TIMELINE OF PICASSO’S LIFE</h1>
      <p className="scroll-hint">Spin the potter’s wheel to navigate the timeline</p>
      <div className="timeline-shell" aria-hidden="true" style={{ '--timeline-progress': `${scrollProgress}%` }}>
        <div className="timeline-track">
          <div className="timeline-line" />
          <div className="timeline-progress" />
          
          {timelineYears.map((point, index) => {
            const isDuplicate = index > 0 && timelineYears[index - 1].year === point.year;
            
            if (isDuplicate) return null;
            const activeCard = typeof scrolledFruit === 'number' ? PicassoCard[scrolledFruit] : null;
            const isActiveYear = activeCard && activeCard.year === point.year;
            const isPointActive = isActiveYear || 
              (scrolledFruit === 'start-spacer' && index === 0) || 
              (scrolledFruit === 'end-spacer' && index === timelineYears.length - 1)
            return (
              <div
                key={point.id}
                className={`timeline-stop ${isPointActive ? 'active' : ''}`}
                style={{
                  '--timeline-position': `${getLinearPosition(point.year)}%`,
                }}
              >
                <p 
                  className="timeline-year" 
                  style={{ 
                    position: 'absolute', 
                    top: '-25px',
                    margin: 0,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {point.year}
                </p>
                <div className="timeline-checker" />
              </div>
            )
          })}

          {uniqueRulerMarkers.map((year) => (
            <div
              key={`ruler-${year}`}
              className="timeline-ruler-tick"
              style={{
                position: 'absolute',
                left: `${getLinearPosition(year)}%`,
                top: '14px',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 0,
                color: '#0f0404',
              }}
            >
              <div className="ruler-line" style={{ width: '2px', height: '8px', backgroundColor: '#b0b0b0' }} />
              <p style={{ margin: '6px 0 0', fontSize: '11px', color: '#070607', fontWeight: 'bold' }}>{year}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="fruit-row" ref={rowRef}>
        <div className="fruit-track">
          
          <div 
            ref={startSpacerRef} 
            style={{ width: '50vw', minWidth: '150px', flex: '0 0 auto', pointerEvents: 'none' }} 
            aria-hidden="true" 
          />

          {PicassoCard.map((card, index) => {
            const distanceFromFocus = activeFruitIndex === -1 ? index : Math.abs(index - activeFruitIndex)
            const centerCard = activeFruitIndex !== -1 ? PicassoCard[activeFruitIndex] : null;
            const isCenterDivider = centerCard && centerCard.name && centerCard.name.startsWith('Divider');

            const neighborScale = isCenterDivider ? 0.45 : 0.65;
            const cardScale = distanceFromFocus === 0 ? 1.10 : distanceFromFocus === 1 ? neighborScale : 0.45;
            const cardOpacity = distanceFromFocus === 0 ? 1 : distanceFromFocus === 1 ? 0.68 : 0.42
            const hasImage = Boolean(card.image)
            const cardBackgroundColor = card.color || '#ffffff' 
            const isDivider = card.name.startsWith('Divider')

            return (
              <div
                key={`${card.year}-${index}`}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`fruit-card ${scrolledFruit === index || (scrolledFruit === 'start-spacer' && index === 0) || (scrolledFruit === 'end-spacer' && index === PicassoCard.length - 1) ? 'active' : ''} ${hasImage ? '' : 'fruit-card--text-only'} ${isDivider ? 'fruit-card--divider' : ''}`}
                style={{
                  '--card-scale': cardScale,
                  '--card-opacity': cardOpacity
                }}
              >
                {isDivider ? (
                  <div className="fruit-divider-box">
                    <h2 className="fruit-divider-text">
                      {card.description}
                    </h2>
                  </div>
                ) : (
                  <div className="fruit-card-inner" style={{ backgroundColor: cardBackgroundColor }}>
                    {hasImage ? (
                      <div className="fruit-card-image-wrap">
                        <img className="fruit-card-image" src={card.image} alt={card.name} />
                        {card.imageCredit && (
                          <p className="fruit-image-credit">{card.imageCredit}</p>
                        )}
                      </div>
                    ) : null}
                    <div className="fruit-card-copy">
                      <p className="fruit-name">{card.name}</p>
                      <p className="fruit-description">{card.description}</p>
                      {card.credit && (
                        <p className="fruit-credit">
                          {card.credit}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          <div 
            ref={endSpacerRef} 
            style={{ width: '50vw', minWidth: '150px', flex: '0 0 auto', pointerEvents: 'none' }} 
            aria-hidden="true" 
          />
          
        </div>
      </div>
    </div>
  )
}

export default App