import { expect, test, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import HomePage from '../app/page'

// Mock Next.js components and functions that might cause issues in a test environment
vi.mock('next/link', () => {
  return {
    default: ({ children, href }: { children: React.ReactNode; href: string }) => {
      return <a href={href}>{children}</a>
    },
  }
})

vi.mock('next/image', () => {
  return {
    default: (props: any) => {
      // eslint-disable-next-line @next/next/no-img-element
      return <img {...props} alt={props.alt} />
    },
  }
})

// Mock the lib/prisma module
vi.mock('@/lib/prisma', () => {
  return {
    prisma: {
      project: {
        findMany: vi.fn().mockResolvedValue([
          {
            id: '1',
            slug: 'test-project',
            title: 'Test Project',
            shortDescription: 'Short',
            description: 'Long',
            techStack: 'React,Next.js',
            status: 'Active',
            category: 'Web',
            date: '2024-01-01',
            thumbnail: '/thumb.png',
            screenshots: '["/s1.png"]',
            features: '["f1"]',
            featured: true,
          }
        ]),
      },
      teamMember: {
        findMany: vi.fn().mockResolvedValue([
          {
            id: '1',
            name: 'Test Member',
            role: 'Tester',
            bio: 'Testing...',
            avatar: '/avatar.png',
          }
        ]),
      },
    },
  }
})

test('HomePage renders correctly', async () => {
  // Since HomePage is an async component, we need to await it
  const Result = await HomePage()
  render(Result)
  
  // Check for the main heading
  const heading = screen.getByText(/Building the Future with/i)
  expect(heading).toBeDefined()
  
  const span = screen.getByText(/Autonomous Agents/i)
  expect(span).toBeDefined()

  // Check for the team section heading
  expect(screen.getByText(/Meet the Builders/i)).toBeDefined()
  
  // Check for the featured projects section heading
  expect(screen.getByText(/Featured Projects/i)).toBeDefined()
  
  // Check for mocked content
  expect(screen.getByText(/Test Project/i)).toBeDefined()
  expect(screen.getByText(/Test Member/i)).toBeDefined()
})
