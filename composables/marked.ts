import { marked } from 'marked'
import { gfmHeadingId } from 'marked-gfm-heading-id'
// TODO: We need to wait for this one https://github.com/UziTech/marked-emoji/issues/122 to be closed.
// import { markedEmoji } from 'marked-emoji'
// import { Octokit } from '@octokit/rest'
// TODO: We need to wait for this one https://github.com/markedjs/marked-highlight/issues/89 to be closed.
// import { markedHighlight } from 'marked-highlight'
// import hljs from 'highlight.js'
import { parse } from 'node-html-parser'

export const useMarked = () => {
  marked.use(gfmHeadingId())
  // TODO: Same here.
  // const octokit = new Octokit()
  // const response = await octokit.rest.emojis.get()
  // marked.use(markedEmoji({ emojis: response.data }))
  // TODO: Same here.
  // marked.use(markedHighlight({
  //   langPrefix: 'hljs language-',
  //   highlight (code, lang) {
  //     const language = hljs.getLanguage(lang) ? lang : 'plaintext'
  //     return hljs.highlight(code, { language }).value
  //   }
  // }))
  marked.use({
    gfm: true
  })

  const defaultRenderer: marked.Renderer = new marked.Renderer(marked.options)
  const renderer: marked.Renderer = {
    html (html: string, block?: boolean) : string {
      let hasChanged = false
      const element = parse(html)
      const images = element.querySelectorAll('img')
      for (const image of images) {
        const newSrc = handleImageSrc(image.getAttribute('src'))
        if (newSrc !== null) {
          image.setAttribute('src', newSrc)
          hasChanged = true
        }
      }
      return defaultRenderer.html(hasChanged ? element.outerHTML : html, block)
    },
    image (href: string, title: string | null, text: string): string {
      return defaultRenderer.image(handleImageSrc(href) ?? href, title, text)
    }
  }
  marked.use({ renderer })
  return marked
}

function handleImageSrc (src: string): string {
  const imageRegex = /https?:\/\/github\.com\/([A-Za-z0-9\-.]+)\/([A-Za-z0-9\-.]+)\/blob\/([A-Za-z0-9\-.]+)\/(.*)$/g
  const matches = src.matchAll(imageRegex)
  for (const match of matches) {
    if (match.length === 5) {
      return `https://raw.githubusercontent.com/${match[1]}/${match[2]}/${match[3]}/${match[4]}`
    }
  }
  return null
}
