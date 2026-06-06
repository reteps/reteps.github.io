import { toString } from 'mdast-util-to-string';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

export function inferDescription(markdown: string): string {
  const tree = unified().use(remarkParse).parse(markdown);

  let description = '';
  visit(tree, 'paragraph', (node) => {
    if (description.length > 160) return;
    description += toString(node) + ' ';
  });

  return description.slice(0, 160) + '...';
}
