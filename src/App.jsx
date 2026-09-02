import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [scrolledFruit, setScrolledFruit] = useState(null)
  const [expandedFruit, setExpandedFruit] = useState(null)
  const containerRef = useRef(null)
  const cardRefs = useRef({})
  const timerRef = useRef(null)

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
    const handleWheel = (e) => {
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
        setExpandedFruit(null)

        // Clear existing timer
        if (timerRef.current) {
          clearTimeout(timerRef.current)
        }

        // Set new timer for expansion after 3 seconds
        timerRef.current = setTimeout(() => {
          setExpandedFruit(closestFruit)
        }, 3000)
      }
    }

    const handleCloseExpanded = (e) => {
      if (expandedFruit && e.key === 'Escape') {
        setExpandedFruit(null)
      }
    }

    window.addEventListener('wheel', handleWheel)
    window.addEventListener('keydown', handleCloseExpanded)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleCloseExpanded)
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [fruits])

  return (
    <div className="fruit-container" ref={containerRef}>
      <h1>Fruit Gallery</h1>
      <p className="scroll-hint">Scroll to highlight fruits</p>
      <div className="fruit-row">
        {fruits.map((fruit) => (
          <div 
            key={fruit.name} 
            ref={(el) => cardRefs.current[fruit.name] = el}
            className={`fruit-card ${scrolledFruit === fruit.name ? 'hovered' : ''} ${expandedFruit === fruit.name ? 'expanded' : ''}`}
          >
            <img src={fruit.image} alt={fruit.name} />
            <p className="fruit-name">{fruit.name}</p>
            {expandedFruit === fruit.name && (
              <p className="fruit-description">{fruit.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
