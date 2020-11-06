import { render, screen } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './PostsByCategoryCell'
import { standard } from './PostsByCategoryCell.mock'

describe('PostsByCategoryCell', () => {
  test('Loading renders successfully', () => {
    render(<Loading />)
    // Use screen.debug() to see output
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('Empty renders successfully', async () => {
    render(<Empty />)
    expect(screen.getByText('Empty')).toBeInTheDocument()
  })

  test('Failure renders successfully', async () => {
    render(<Failure error={new Error('Oh no')} />)
    expect(screen.getByText(/Oh no/i)).toBeInTheDocument()
  })

  test('Success renders successfully', async () => {
    render(<Success postsByCategory={standard().postsByCategory} />)
    expect(screen.getByText(/42/i)).toBeInTheDocument()
  })
})
