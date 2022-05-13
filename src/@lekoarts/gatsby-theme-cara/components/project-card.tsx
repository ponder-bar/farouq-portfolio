/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading, Text, Paragraph, Image, Flex } from 'theme-ui'


type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  years: string
  position: string
  paragraphs: string
  codings: string[]
}

const ProjectCard = ({ link, title, children, bg, years, position }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <Image mb={3} src={link} width="135px" height="65px" />
    <h3>
      {title}
    </h3>
    <Heading mb={1} as="h6" variant="styles.h6" sx={{ color: `InactiveCaption` }}>
      {position}
    </Heading>
    <Text mb={2} as="small" sx={{ fontStyle: `italic`, color: `HighlightText`, textAlign: `right` }}>
      {years}
    </Text>
    <div>{children}</div><br />
  </a>
)

export default ProjectCard
