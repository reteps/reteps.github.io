import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'

// For some reason, cannot change metadata through rehype plugins, using remark instead

const remarkInferDescriptionMeta = () => (
  (tree, file) => {
    let description = ''
    visit(tree, 'paragraph', (node) => {
      if (description.length > 160) return
      description += toString(node) + ' '
    })

    description = description.slice(0, 160) + '...'

    file.data.fm.description = description
  }
)

export default remarkInferDescriptionMeta