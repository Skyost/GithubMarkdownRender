import { marked, type RendererObject, type Tokens } from 'marked'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import { markedEmoji } from 'marked-emoji'
import { Octokit } from '@octokit/rest'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import { parse } from 'node-html-parser'

export const useMarked = async () => {
  if (marked.defaults.extensions === null) {
    marked.use(gfmHeadingId())
    const octokit = new Octokit()
    const response = await octokit.rest.emojis.get()
    marked.use(markedEmoji({ emojis: response.data as Record<string, string> }))
    marked.use(markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      }
    }))

    const defaultRenderer = new marked.Renderer(marked.defaults)
    const renderer: RendererObject = {
      html(object: Tokens.HTML | Tokens.Tag): string {
        let hasChanged = false
        const element = parse(object.raw)
        const images = element.querySelectorAll('img')
        for (const image of images) {
          if (image.hasAttribute('src')) {
            const newSrc = handleImageSrc(image.getAttribute('src') as string)
            if (newSrc !== null) {
              image.setAttribute('src', newSrc)
              hasChanged = true
            }
          }
        }
        return defaultRenderer.html({
          ...object,
          raw: hasChanged ? element.outerHTML : object.raw
        })
      },
      image({ raw, type, href, title, text }: Tokens.Image): string {
        return defaultRenderer.image(
          {
            raw,
            type,
            href: handleImageSrc(href) ?? href,
            title: title,
            text: text
          }
        )
      }
    }
    marked.use({ renderer })
  }
  return marked
}

function handleImageSrc(src: string): string | null {
  const imageRegex = /https?:\/\/github\.com\/([A-Za-z0-9\-.]+)\/([A-Za-z0-9\-.]+)\/blob\/([A-Za-z0-9\-.]+)\/(.*)$/g
  const matches = src.matchAll(imageRegex)
  for (const match of matches) {
    if (match.length === 5) {
      return `https://raw.githubusercontent.com/${match[1]}/${match[2]}/${match[3]}/${match[4]}`
    }
  }
  return null
}
