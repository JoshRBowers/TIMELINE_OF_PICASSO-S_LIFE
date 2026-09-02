import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [scrolledFruit, setScrolledFruit] = useState(null)
  const [flippedFruit, setFlippedFruit] = useState(null)
  const containerRef = useRef(null)
  const cardRefs = useRef({})

  const fruits = [
    { 
      name: 'Banana', 
      image: '/FruitImage/Banana.jpg',
      description: 'Random fruit description example.'
    },
    { 
      name: 'Lemon', 
      image: '/FruitImage/Lemon.jpg',
      description: 'Random fruit description example.'
    },
    { 
      name: 'Mango', 
      image: '/FruitImage/Mango.jpg',
      description: 'Random fruit description example.'
    },
    { 
      name: 'Orange', 
      image: '/FruitImage/Orange.jpg',
      description: 'Random fruit description example.'
    },
    { 
      name: 'Pineapple', 
      image: '/FruitImage/Pinnapple.jpg',
      description: 'Random fruit description example.'
    },
    { 
      name: 'Strawberry', 
      image: '/FruitImage/Strawberry.jpg',
      description: 'Random fruit description example.'
    },
  ]

  useEffect(() => {
    const handleWheel = () => {
      // Find which fruit card is closest to the center of the viewport
      let closestFruit = null
      let closestDistance = Infinity

      fruits.forEach((fruit) => {
        const card = cardRefs.current[fruit.name]
        if (card) {
          const rect = card.getBoundingClientRect()
          const cardCenter = rect.top + rect.height / 2
          const viewportCenter = window.innerHeight / 2
          const distance = Math.abs(cardCenter - viewportCenter)

          // Find the closest fruit regardless of distance
          if (distance < closestDistance) {
            closestDistance = distance
            closestFruit = fruit.name
          }
        }
      })

      if (closestFruit) {
        setScrolledFruit(closestFruit)
      }
    }

    let flipTimeoutId = null

    if (scrolledFruit) {
      flipTimeoutId = window.setTimeout(() => {
        setFlippedFruit(scrolledFruit)
      }, 3000)
    } else {
      setFlippedFruit(null)
    }

    if (flippedFruit && flippedFruit !== scrolledFruit) {
      setFlippedFruit(null)
    }

    window.addEventListener('wheel', handleWheel)

    return () => {
      if (flipTimeoutId) {
        window.clearTimeout(flipTimeoutId)
      }
      window.removeEventListener('wheel', handleWheel)
    }
  }, [fruits, scrolledFruit, flippedFruit])

  return (
    <div className="fruit-container" ref={containerRef}>
      <h1>Fruit Gallery</h1>
      <p className="scroll-hint">Scroll to highlight a fruit, then wait 3 seconds for the card to flip</p>
      <div className="fruit-row">
        {fruits.map((fruit) => (
          <div 
            key={fruit.name} 
            ref={(el) => cardRefs.current[fruit.name] = el}
            className={`fruit-card ${scrolledFruit === fruit.name ? 'hovered' : ''} ${flippedFruit === fruit.name ? 'flipped' : ''}`}
          >
            <div className="fruit-card-inner">
              <div className="fruit-card-face fruit-card-front">
                <img src={fruit.image} alt={fruit.name} />
                <p className="fruit-name">{fruit.name}</p>
                <p className="fruit-prompt">Wait 3 seconds</p>
              </div>
              <div className="fruit-card-face fruit-card-back">
                <p className="fruit-back-label">{fruit.name}</p>
                <p className="fruit-description">{fruit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
