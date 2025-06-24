import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click Me</Button>)
    const btn = screen.getByRole('button', { name: /click me/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('bg-primary')
  })

  it('applies variant and size correctly', () => {
    render(<Button variant="destructive" size="lg">Delete</Button>)
    const btn = screen.getByRole('button', { name: /delete/i })
    expect(btn).toHaveClass('bg-destructive')
    expect(btn).toHaveClass('h-10')
  })

  it('merges additional classes via className', () => {
    render(<Button className="custom-class">Merge</Button>)
    const btn = screen.getByRole('button', { name: /merge/i })
    expect(btn).toHaveClass('custom-class')
  })

  it('renders as Slot when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/home">Link</a>
      </Button>
    )
    const anchor = screen.getByRole('link', { name: /link/i })
    expect(anchor).toBeInTheDocument()
    expect(anchor).toHaveAttribute('href', '/home')
    expect(anchor.dataset.slot).toBe('button') // Should preserve slot attribute
  })
})
