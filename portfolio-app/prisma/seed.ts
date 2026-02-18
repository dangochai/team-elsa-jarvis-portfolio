import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

// Try the standard constructor - maybe the CLI handles the environment?
const prisma = new PrismaClient()

async function main() {
  const dataDir = path.join(process.cwd(), 'data')

  // Import Projects
  const projectsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'projects.json'), 'utf8'))
  for (const item of projectsData) {
    await prisma.project.upsert({
      where: { slug: item.slug },
      update: {},
      create: {
        slug: item.slug,
        title: item.title,
        shortDescription: item.shortDescription,
        description: item.description,
        techStack: item.techStack.join(','),
        status: item.status,
        category: item.category,
        date: item.date,
        githubUrl: item.githubUrl,
        liveDemo: item.liveDemo,
        thumbnail: item.thumbnail,
        screenshots: JSON.stringify(item.screenshots),
        features: JSON.stringify(item.features),
        featured: item.featured,
      },
    })
  }
  console.log('Imported projects')

  // Import Resources
  const resourcesData = JSON.parse(fs.readFileSync(path.join(dataDir, 'resources.json'), 'utf8'))
  for (const item of resourcesData) {
    await prisma.resource.create({
      data: {
        name: item.name,
        description: item.description,
        url: item.url,
        category: item.category,
      },
    })
  }
  console.log('Imported resources')

  // Import Team Members
  const teamData = JSON.parse(fs.readFileSync(path.join(dataDir, 'team.json'), 'utf8'))
  for (const item of teamData) {
    await prisma.teamMember.create({
      data: {
        name: item.name,
        role: item.role,
        bio: item.bio,
        avatar: item.avatar,
        github: item.github,
        twitter: item.twitter,
        linkedin: item.linkedin,
      },
    })
  }
  console.log('Imported team members')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
