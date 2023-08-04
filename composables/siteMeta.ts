import siteMeta from '~/siteMeta'

export const useSiteName = () => useState<string>('siteName', () => siteMeta.name)
export const useSiteDescription = () => useState<string>('siteDescription', () => siteMeta.description)
export const useSiteUrl = () => useState<string>('siteUrl', () => siteMeta.url)
export const useSiteGithubUrl = () => useState<string>('siteUrl', () => siteMeta.githubUrl)
