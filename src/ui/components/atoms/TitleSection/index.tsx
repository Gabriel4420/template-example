import TitleProps from './types'

const TitleSection = ({ title, className }: TitleProps) => (
  <h1 className={className}>{title}</h1>
)

export default TitleSection
